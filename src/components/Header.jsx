import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Buttons from "./UI/Buttons.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserProgressContext);

  const totalItems = cartContext.items.reduce((total, item) => {
    return total + item.quanity;
  }, 0);

  function handleShowCart() {
    userContext.showcart(true);
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Buttons textOnly onClick={handleShowCart}>
          {" "}
          Cart ({totalItems})
        </Buttons>
      </nav>
    </header>
  );
}
