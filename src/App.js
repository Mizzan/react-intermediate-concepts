import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
