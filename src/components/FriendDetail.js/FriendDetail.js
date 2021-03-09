import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const [getFriend, setFriend] = useState({});
  const { friendId } = useParams();
  useEffect(() => {
    const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h3>Name: {getFriend.name}</h3>
      <h3>Email: {getFriend.email}</h3>
    </div>
  );
};

export default FriendDetail;
