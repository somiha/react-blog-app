import "./singlePost.css";
import { Link } from "react-router-dom";
import flower from "../../assests/img/flower4.jpeg";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const API_BASE_URL = "http://localhost:5005/api/posts/";
export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(API_BASE_URL + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Somiha">
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
