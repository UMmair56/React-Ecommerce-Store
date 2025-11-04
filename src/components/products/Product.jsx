import { useState } from 'react'
import FilterSection from '../filterSection/FilterSection'
import { IoCartOutline } from "react-icons/io5";
import './product.css'
import download from '../../images/Loading_icon.gif'
import NoData from '../../images/NoData.webp'
import { useNavigate } from 'react-router-dom';
import { UseProduct } from '../../hooks/ProductProvider';
import { UseCart } from '../../hooks/CartProvider';
import { FiFilter } from "react-icons/fi";

function Product() {
  const { products, loading, error } = UseProduct();
   const [show,setShow] = useState(false)

  const{ addToCart  } = UseCart();
  
  const navigate= useNavigate();
  const goToSingleProduct = (id)=>{
    navigate(`/Product/${id}`)
  }

  const [filters, setFilters] = useState({
    search: "",
    category: "ALL",
    priceRange: [0, 5000],
  });

  if (loading) return <img src={download} id="loading-img"/>
  if (error) return <p>Error: {error}</p>;

  // 🔍 Filter Logic
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category === "ALL" || item.category === filters.category;
    const matchesPrice = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="product-section">
      <div className="filters">
        <h1>Filter</h1>
        <FiFilter onClick={()=> setShow(!show)} size={30} />
      </div>
      <div className={`mobile-filtersection ${show ? "active" : ""}`}>
        <FilterSection filters={filters} setFilters={setFilters} products={products} />
      </div>
      <div className="products">
         {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <div key={index} className="product">
            <img src={item.image} alt="images" id="product-img" onClick={()=> goToSingleProduct(item.id)}/>
            <p id="p-h2">{item.title}</p>
            <h3 id="p-h3">${item.price}</h3>
            <button id="cart-btn" onClick={()=>addToCart(item)}><IoCartOutline id="p-cart"/> Add to Cart</button>
          </div>
        ))):(<div className="nodata-img"><img src={NoData} id='nodata'/></div>)}
      </div>
    </div>
  );
}

export default Product;
