import React from "react";
import "./css/style.css";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "../src/components/NavBar";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Error404 from "../src/components/Error404";

function App() {
 const [selectedCategory, setSelectedCategory] = useState('Todos');
  return (
  <div >      
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>           
    </BrowserRouter>
  </div>
);
}
export default App;
