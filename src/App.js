import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componet/Home";
import Navbar from "./Componet/Nevbar";
import Product from "./Componet/Product";
import Details from "./Componet/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/product" exact element={<Product />}/>
        <Route path="/:id" exact element={<Details />}/>
      </Routes>
    </>
  );
}

export default App;