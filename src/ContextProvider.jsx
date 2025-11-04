import CartProvider from "./hooks/CartProvider";
import { ProductProvider } from "./hooks/ProductProvider";

export default function ContextProvider({ children }) {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
}
