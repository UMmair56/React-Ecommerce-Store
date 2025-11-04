import { createContext, useContext, useState } from "react";
import Product from "../products/Product";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (Product) => {
    const itemInCart = cartItem.find((item) => item.id === Product.id);
    if (itemInCart) {
      const updateCart = cartItem.map((item) =>
        item.id === Product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItem(updateCart);
      toast.success("Product quantity increase")
    } else {
      setCartItem([...cartItem, { ...Product, quantity: 1 }]);
      toast.success("Product is added in cart")
    }
  };

  const updateQuantity = (cartItem, Productid, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === Productid) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Product quantity increase")
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("Product quantity decrease")
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null)
    );
  };

  const deleteItem = (productId)=>{
    setCartItem(cartItem.filter(item => item.id !== productId))
    toast.success("Product delete from cart")
  }
  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity,deleteItem}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => useContext(CartContext);
