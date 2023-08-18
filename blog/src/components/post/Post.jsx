import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, post }) {
  const PF = "http://localhost:5005/images/";

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              {post.categories.map((c) => (
                <span className="postCat">{c.name}</span>
              ))}
            </Link>
          </span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
