import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";
const Friend = (props) => {
  const { name, email, id } = props.friend;
  return (
    <div className="friend-container">
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
      <p>
        Id : {id} <Link to={`/friend/${id}`}> Show Details of Friend</Link>
      </p>
    </div>
  );
};

export default Friend;
