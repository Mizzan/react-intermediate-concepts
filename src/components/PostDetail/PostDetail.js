import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [getPost, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <h1>{getPost.title}</h1>
      <h4>Your are reading post {getPost.id}</h4>
      <p>{getPost.body}</p>
    </div>
  );
};

export default PostDetail;
