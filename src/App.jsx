import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/home"
import Products from "./pages/product/products"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Cart from "./pages/cart/cart"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/Footer/Footer"
import SingleProduct from "./components/singleProduct/SingleProduct"
import SingleCategory from "./components/singleCategroy/SingleCategory"
function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Product" element={<Products/>}></Route>
        <Route path="/product/:id" element={<SingleProduct/>}></Route> 
        <Route path="/category/:category" element = {<SingleCategory/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App