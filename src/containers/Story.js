import React, { useState, useEffect } from "react";
// import { getStoryId, getStoryData } from "../services/apis";
import StoryDetails from "../components/StoryDetails";
import { connect } from "react-redux";
import { loadStoryDetailsAction } from "../actions/index";

const Story = (props) => {
  // console.log("props : ", props);
  // const [storyListData, updateStory] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [storyDetailsData, setData] = useState([]);
  const [showLoader, setDataLoaded] = useState(true);
  /* useEffect(() => {
    // getStoryId().then((resp) => {
    //   
    // });
    updateStory(props.storyIdList)
  }, [props.storyIdList]); */

  useEffect(() => {
    // const { dispatch } = props;
    console.log('props : ',props)
    let allPromiseArr = [];
    Object.values(props.storyIdList).map((storyId, idx) => {
      // allPromiseArr.push(dispatch(fetchSortIdsDetails(storyId)));
      // debugger;
      props.dispatch(loadStoryDetailsAction(storyId));
    });
    // Promise.all(allPromiseArr).then((storyData) => {
    //   const filteredData = storyData.filter((data, idx) => {
    //     if (data && data.url && !data.isDeleted) {
    //       data.key = idx + 1;
    //       return data;
    //     }
    //   });
    //   setData(filteredData);
    // });
  }, [props.storyIdList]);

  useEffect(() => {
    // const { dispatch } = props;
    console.log('props : ',props)
    let allData = [];
    
    setData([
      ...storyDetailsData,
      props.storyDetails
    ]);

    
  }, [props.storyDetails]);

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
      afterDeleteData = storyDetailsDataCopy.filter((data) => {
        if (!data.isDeleted) {
          return data;
        }
      });
      return setData(afterDeleteData);
    }, 200);
    return afterDeleteData;
  };

  const markAsRead = (obj, key) => {
    let storyDetailsDataCopy = storyDetailsData.map((singleStory) => {
      return { ...singleStory };
    });
    setData([]);
    setTimeout(() => {
      storyDetailsDataCopy.find((a) => a.id === obj.id).isRead = !key;
      return setData(storyDetailsDataCopy);
    }, 200);
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


/* const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
  };
}; */


function mapStateToProps(state) {
  return { storyIdList: state.storyIdList,storyDetails:state.storyDetails };
}

export default connect(mapStateToProps)(Story);
