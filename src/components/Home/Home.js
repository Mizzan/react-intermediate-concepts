import React, { useContext } from "react";
import { CategoryContext } from "../../App";
import Category from "../Category/Category";
import "./Home.css";
const Home = () => {
  const [category, setCategory] = useContext(CategoryContext);
  return (
    <div className="wrapper">
      <h1>This is Home: {category}</h1>
      <Category></Category>
    </div>
  );
};

export default Home;
