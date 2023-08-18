import React from "react";
import "./posts.css";
import Post from "../post/Post";
import post1 from "../../assests/img/post1.jpeg";
import post2 from "../../assests/img/post2.jpeg";
import post3 from "../../assests/img/post6.jpeg";
import post4 from "../../assests/img/post7.jpeg";
import post5 from "../../assests/img/post8.jpeg";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post img={post1} post={p} />
      ))}
    </div>
  );
}
