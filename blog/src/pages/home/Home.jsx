import React from "react";
import "./home.css";
import Headers from "../../components/header/Headers";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:5005/api/posts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(API_BASE_URL);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Headers />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
