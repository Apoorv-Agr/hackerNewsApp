import React, { useState, useEffect } from "react";
import StoryDetails from "../components/StoryDetails";
import { connect } from "react-redux";
import {
  loadStoryDetailsAction,
  updateFinalDataAction,
  onDeleteAction,
} from "../actions";
import { API_LIMIT } from "../constants";

const Story = (props) => {
  const [metaData, setMetaData] = useState([]);
  const [storyDetailsData, setData] = useState([]);
  const [showLoader, setDataLoaded] = useState(true);

  useEffect(() => {
    props.storyIdList &&
      Object.values(props.storyIdList).map((storyId, idx) => {
        props.dispatch(loadStoryDetailsAction(storyId));
      });
  }, [props.storyIdList]);

  useEffect(() => {
    setMetaData([...metaData, props.storyDetails]);
  }, [props.storyDetails]);

  useEffect(() => {
    if (metaData.length === API_LIMIT) {
      const filteredData = metaData.filter((data, idx) => {
        if (data && data.url && !data.isDeleted) {
          data.key = idx + 1;
          return data;
        }
      });
      props.dispatch(updateFinalDataAction(filteredData));
      setData(filteredData);
    }
  }, [metaData]);

  useEffect(() => {
    if (storyDetailsData.length > 0) {
      setDataLoaded(false);
    } else {
      setDataLoaded(true);
    }
  }, [storyDetailsData]);

  const onDelete = (obj) => {
    let afterDeleteData = [];
    const storyDetailsDataCopy = storyDetailsData.map((singleStory) => {
      return { ...singleStory };
    });
    setData([]);
    setTimeout(() => {
      storyDetailsDataCopy.find((a) => a.id === obj.id).isDeleted = true;
      props.dispatch(onDeleteAction(storyDetailsDataCopy));
      afterDeleteData = storyDetailsDataCopy.filter((data) => {
        if (!data.isDeleted) {
          return data;
        }
      });
      return setData(afterDeleteData);
    }, 100);
    return afterDeleteData;
  };

  const markAsRead = (obj, key) => {
    let storyDetailsDataCopy = storyDetailsData.map((singleStory) => {
      return { ...singleStory };
    });
    // setData([]);
    setTimeout(() => {
      storyDetailsDataCopy.find((a) => a.id === obj.id).isRead = !key;
      return setData(storyDetailsDataCopy);
    }, 20);
    return storyDetailsDataCopy;
  };
  return (
    <div>
      <StoryDetails
        showLoader={showLoader}
        storyDetailsData={storyDetailsData}
        onDelete={onDelete}
        markAsRead={markAsRead}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { storyIdList: state.storyIdList, storyDetails: state.storyDetails };
}

export default connect(mapStateToProps)(Story);
