import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="wrapper">
      <h1>This is home</h1>
      <h3>I have got {posts.length}</h3>

      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Home;
