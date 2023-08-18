import React from "react";
import blog from "../../assests/img/blog.jpg";
import "./header.css";

export default function Headers() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img className="headerImg" src={blog} alt="" />
    </div>
  );
}
