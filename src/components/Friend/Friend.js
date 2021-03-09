import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";
const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();

  const handleClick = (friendId) => {
    history.push(`/friend/${friendId}`);
  };
  return (
    <div className="friend-container">
      <h3>Name : {name}</h3>
      <p>Email : {email}</p>
      {/* <p>
        Id : {id} <Link to={`/friend/${id}`}> Show Details of Friend</Link>
      </p> */}
      {/* way one to navigate dynamic data */}
      <button onClick={() => handleClick(id)}>Get Friend Info</button>
      {/* way two to navigate dynamic data */}
    </div>
  );
};

export default Friend;
