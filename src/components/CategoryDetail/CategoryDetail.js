import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = (props) => {
  const { name } = props.product;
  return (
    <div>
      <h5>This is category details</h5>
      <h6>Product Names: {name}</h6>
    </div>
  );
};

export default CategoryDetail;
