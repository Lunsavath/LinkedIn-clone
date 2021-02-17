import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import Cover from "../../assets/images/cover.jpg";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Cover} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Lionel Messi</h2>
        <h4>lionelmessi@fcb.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">443</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("javascript")}
        {recentItem("reactnative")}
      </div>
    </div>
  );
}

export default Sidebar;
