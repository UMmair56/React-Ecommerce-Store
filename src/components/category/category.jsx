import React from "react";
import "./category.css";
import { useNavigate } from "react-router-dom";
import { UseProduct } from "../../hooks/ProductProvider";
function Category() {
  const { products, loading, error } = UseProduct();

  const navgative = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: ${error}</p>;

  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="category">
      {categories.map((cat, index) => (
        <h3 key={index} id="item-category">
          <button onClick={() => navgative(`/category/${cat}`)}>{cat}</button>
        </h3>
      ))}
    </div>
  );
}

export default Category;
