import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Singleitem from "./components/Singleitem";
import Cart from "./components/Cart";
import Navbar2 from "./components/Navbar2";
import Login from "./components/Login";
import Register from "./components/Register";
;

function App() {
  return (
    <>
      <Navbar />
      {/* <Navbar2/> */}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Singleitem} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
