import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ProfilePage from "./routes/Profile";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Products from "./components/products";
import ProductById from "./components/products/Product";
import Cart from "./components/cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products/:id' element={<ProductById />} />
        <Route path='/shopping-cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
