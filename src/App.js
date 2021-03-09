import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";
import { createContext, useState } from "react";

export const CategoryContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={count}>
      <p> count {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
