import React from "react";
import "./Friend.css";
const Friend = (props) => {
  const { name, email } = props.friend;
  return (
    <div className="friend-container">
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
    </div>
  );
};

export default Friend;
