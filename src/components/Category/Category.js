import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";
import CategoryDetail from "../CategoryDetail/CategoryDetail";

const allProducts = [
  { name: "Dell", category: "laptop" },
  { name: "Razer", category: "laptop" },
  { name: "Asus", category: "laptop" },
  { name: "Nokia", category: "mobile" },
  { name: "Samsung", category: "mobile" },
  { name: "Huawei", category: "mobile" },
  { name: "Canon", category: "camera" },
  { name: "Nikkon", category: "camera" },
  { name: "Sony", category: "camera" },
];

const Category = () => {
  const [category] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const matchedProducts = allProducts.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProducts(matchedProducts);
  }, [category]);

  return (
    <div>
      <h3>Select your category: {category}</h3>
      {products.map((pd) => (
        <CategoryDetail product={pd}></CategoryDetail>
      ))}
    </div>
  );
};

export default Category;
