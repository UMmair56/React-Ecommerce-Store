import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import download from "../../images/Loading_icon.gif";
import { ChevronLeft } from "lucide-react";
import { UseCart } from '../../hooks/CartProvider'
import "./SingleCategory.css";
import { UseProduct } from "../../hooks/ProductProvider";

function SingleCategory() {
  const { loading, error } = UseProduct();
  const [search, setSearch] = useState([]);
  const { addToCart } = UseCart();
  const navgative = useNavigate();

  const params = useParams();
  const category = params.category;
  console.log(category);

  const filterCategory = async () => {
    const responce = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const jsonData = await responce.json();
    console.log(jsonData);
    setSearch(jsonData);
  };

  useEffect(() => {
    filterCategory();
  }, []);

  if (loading) return <img src={download} id="loading-img" />;
  if (error) return <p>Error: ${error}</p>;
  return (
    <div className="all-categroy">
      <button onClick={() => navgative("/")} id="back-btn">
        <ChevronLeft />
      </button>
      {search.map((item) => {
        return (
          <div className="category-section">
            <div className="c-left">
              <img src={item.image} alt={item.title} id="category-img" />
            </div>
            <div className="c-right">
              <h3>{item.title}</h3>
              <h3>
                {item.price} <span style={{ fontSize: "12px" }}>(9%off)</span>
              </h3>
              <p>
                Free delivery Fri, 18 Apr <br /> Or fatest delivery Tommorow, 17
                Apr
              </p>
              <button onClick={() => addToCart(item)} id="add-btn">
                add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleCategory;
