import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = () => {
  const category = useContext(CategoryContext);
  return (
    <div>
      <h5>This is category details {category}</h5>
    </div>
  );
};

export default CategoryDetail;
