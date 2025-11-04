import { useEffect,useState } from 'react'
import {IoCartOutline   } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom'
import './singleProduct.css'
import { UseCart } from '../../hooks/CartProvider';

function SingleProduct() {
  const navgate = useNavigate();
  
  const{ addToCart } = UseCart();
  
  const goToProduct = ()=>{
    navgate('/Product')
  }
  const goToHome = ()=>{
    navgate('/')
  }
  const param = useParams();
  const [SingleProduct,setSingleProduct] = useState('null');

  const getsingleProdcut = async()=>{
    const res = await fetch(`https://fakestoreapi.com/products/${param.id}`);
    const jsonData = await res.json();
    setSingleProduct(jsonData)
    console.log(jsonData);
  }
  useEffect(() => {
    getsingleProdcut();
  }, [param.id]); 
  return (
    <>
    <div className="singleProduct">
      <h3><span style={{cursor:"pointer"}} onClick={goToHome}>home/</span><span style={{cursor:"pointer"}} onClick={goToProduct}>products/</span>{SingleProduct.title}</h3>
      <div className="single-all">
        <div className="product-img">
          <img src={SingleProduct.image} alt="" />
        </div>
        <div className="detial">
          <h1>{SingleProduct.title}</h1>
          <h4 id='single-h4'>{SingleProduct?.category?.toUpperCase()}</h4>
          <h2 id='ingle-h2'>Price : ${SingleProduct.price}</h2>
          <p>{SingleProduct.description}</p>
          <label htmlFor="number-input" id='number-lable'>Quantity = </label>
          <input type="number" id='number-input' placeholder='1'/>
          <button onClick={()=>addToCart(SingleProduct)} style={{ display: 'block', marginTop:'20px'}} id="cart-btn"><IoCartOutline id="p-cart" /> Add to Cart</button>
        </div>
      </div>
     </div> 
    </>
  )
}

export default SingleProduct