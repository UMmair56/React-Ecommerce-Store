import NoData from "../../images/NoData.webp";
import "./cart.css";
import { MdDelete } from "react-icons/md";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { UseCart } from '../../hooks/CartProvider'

function Cart() {
  const navaigate = useNavigate();
  const goToProduct = () => {
    navaigate("/Product");
    window.scroll(0, 0);
  };
  const { cartItem, updateQuantity, removeFromCart} = UseCart();
  const { user } = useUser();
  console.log(user);
  const totalprice = cartItem.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <div className="cart">
        {cartItem.length > 0 ? (
          <>
            <h1>My Cart ({cartItem.length})</h1>
            {cartItem.map((item, index) => {
              return (
                < div key={index}>
                  <div className="add-cart" >
                    <div className="cart-img">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="img-detail">
                        <h5 id="title">{item.title}</h5>
                        <h2 id="price">${item.price}</h2>
                      </div>
                    </div>
                    <div className="quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    </div>
                    <div className="delete-btn">
                      <MdDelete onClick={() => removeFromCart(item.id)}size={24} color="red" id="delete"/>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="deliver-bill">
              <div className="delivery">
                <h1 id="d-h2">Delivery Info</h1>
                <div className="name">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter your name" value={user?.fullName}/>
                </div>
                <div className="address">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Enter your address" />
                </div>
                <div className="grid">
                  <div className="state">
                    <label htmlFor="">State</label>
                    <input type="text" placeholder="Enter your state" />
                  </div>
                  <div className="postcode">
                    <label htmlFor="">PostCode</label>
                    <input type="text" placeholder="Enter your postcode" />
                  </div>
                  <div className="country">
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder="Enter your country" />
                  </div>
                  <div className="Phone-no">
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder="Enter your number" />
                  </div>
                </div>
                <button id="submit">submit</button>
                <h3>----------OR----------</h3>
                <button style={{ width: "120px", marginTop: "10px" }}>
                  Detect Location
                </button>
              </div>

              <div className="bill">
                <h1 id="b-h1">Bill details</h1>
                <div className="items-price" style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>Items total</p>
                  <span>${totalprice}</span>
                </div>
                <div className="Delivery-charge" style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>Delivery charge</p>
                  <p>
                    <span style={{textDecoration: "line-through", marginRight: "10px",}}>$25</span>
                    <span style={{ color: "RED" }}>FREE</span>
                  </p>
                </div>
                <div className="Handling-charge" style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>Handling charge</p>
                  <span>$5</span>
                </div>

                <div
                  className="Grand-total"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Grand total</p>
                  <span>${totalprice + 5}</span>
                </div>
                <p style={{ margin: "10px" }}>Apply Promo Code</p>
                <input type="text" placeholder="Enter code" id="bill-input" />
                <button id="apply-btn">Apply</button>
                <button id="b-btn"> Proceed to Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="nodataSection">
              <h3>Oh no! Your cart is empty</h3>
              <img id="img" src={NoData} />
              <button onClick={goToProduct}>Continue shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
