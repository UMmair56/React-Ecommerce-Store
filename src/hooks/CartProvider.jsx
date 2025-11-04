import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from "react";
import { CartContext } from "../context/Cartcontext";

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItem));
    } catch {
      console.log("Error saving cart");
    }
  }, [cartItem]);

  const addToCart = useCallback((product) => {
    setCartItem((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCartItem((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0) 
    );
  }, []);

  const clearCart = useCallback(() => setCartItem([]), []);

  const totalItems = useMemo(
    () => cartItem.reduce((sum, it) => sum + (it.quantity || 1), 0),
    [cartItem]
  );

  const value = useMemo(
    () => ({
      cartItem,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
    }),
    [cartItem, addToCart, removeFromCart, updateQuantity, clearCart, totalItems ]
  );

  

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// ✅ custom hook (also fine here)
export const UseCart = () => useContext(CartContext);
