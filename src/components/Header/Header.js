import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Header = (props) => {
  const category = useContext(CategoryContext);
  const { setCount } = props;
  return (
    <div>
      <h1>This is header : {category}</h1>
      <button onClick={() => setCount(category + 1)}>Increase</button>
    </div>
  );
};

export default Header;
