import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p> count {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
