import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons.jsx";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext.items.reduce((total, item) => {
    return total + item.quanity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Buttons textOnly> Cart ({totalItems})</Buttons>
      </nav>
    </header>
  );
}
