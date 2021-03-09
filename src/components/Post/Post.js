import React from "react";
import { useHistory } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const { id, title, body } = post;
  const history = useHistory();
  const showComments = (id) => {
    const url = `/post/${id}`;
    history.push(url);
  };
  return (
    <div className="post-article">
      <h3>User ID: {id}</h3>
      <h4>Title: {title}</h4>
      <p>{body}</p>
      <button onClick={() => showComments(id)}>Show Comments</button>
    </div>
  );
};

export default Post;
