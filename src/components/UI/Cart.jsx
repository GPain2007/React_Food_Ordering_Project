import { useContext } from "react";
import Model from "./Model";
import Buttons from "./Buttons.jsx";
import CartContext from "../../store/CartContext.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import { formatPrice } from "../../util/format.js";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const cartTotal = cartContext.items.reduce((total, item) => {
    return total + item.price * item.quanity;
  }, 0);

  const userContext = useContext(UserProgressContext);

  function handleCloseCart() {
    userContext.hidecart();
  }
  return (
    <Model className="cart" open={userContext.progress === "showcart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <p className="total">Total Amount: {formatPrice.format(cartTotal)}</p>
      <p className="modal-actions">
        <Buttons textOnly onClick={handleCloseCart}>
          Close
        </Buttons>
        <Buttons onClick={handleCloseCart}>Go to Check Out</Buttons>
      </p>
    </Model>
  );
}
