import React from "react";
import { Table, Button } from "antd";
import moment from "moment";

const StoryDetails = ({
  storyDetailsData,
  showLoader,
  onDelete,
  markAsRead,
}) => {
  const expandedRowRender = () => {
    const columns = [
      { title: "Comments", dataIndex: "comments", key: "comments" },
    ];
    const data = [];
    for (let i = 0; i < 10; ++i) {
      data.push({
        key: i,
        comments: "This is comment name" + (i + 1),
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  const outerColumns = [
    { title: "Published By", dataIndex: "by", key: "by" },
    { title: "Up Votes", dataIndex: "score", key: "score" },
    { title: "Detail", dataIndex: "title", key: "title" },
    {
      title: "Posted On",
      dataIndex: "time",
      key: "time",
      render: (key, obj, index) => (
        <span>{key ? moment(key).format("DD MMM YYYY") : ""}</span>
      ),
    },
    { title: "Url", dataIndex: "url", key: "url", render : (key,obj,index)=>{
      return(
      <a href={key} target="_blank">{key}</a>
      )
    }},
    {
      title: "Delete",
      key: "isDeleted",
      dataIndex: "isDeleted",
      render: (key, obj) => (
        <Button
          type="link"
          block
          onClick={(e) => {
            onDelete(obj);
          }}
        >
          Delete
        </Button>
      ),
    },
    {
      title: "Mark as Read",
      key: "isRead",
      dataIndex: "isRead",
      render: (key, obj, index) => (
        <Button
          type="link"
          block
          onClick={(e) => {
            markAsRead(obj, key);
          }}
        >
          <span>{!key ? "Marked as Read" : "Mark as un-Read"} </span>
        </Button>
      ),
    },
  ];
  function getExpandEvent(isExpanded, record){
    console.log('isExpanded : ', isExpanded, ' , record ',record)
    // An API call to fetch the comments
  }
  return (
    <div>
      <Table
        className="components-table-demo-nested"
        columns={outerColumns}
        expandable={{ expandedRowRender }}
        onExpand = {getExpandEvent}
        dataSource={storyDetailsData ? storyDetailsData : null}
        loading={showLoader}
      />
    </div>
  );
};

export default StoryDetails;
