import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Home.css";
const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const url = "http://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="wrapper">
      {friends.map((singleFriend) => (
        <Friend friend={singleFriend}></Friend>
      ))}
    </div>
  );
};

export default Home;
