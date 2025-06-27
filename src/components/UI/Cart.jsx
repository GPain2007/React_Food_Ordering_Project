import { useContext } from "react";
import Model from "./Model";
import Buttons from "./Buttons.jsx";
import CartContext from "../../store/CartContext.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import { formatPrice } from "../../util/format.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const cartTotal = cartContext.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const userContext = useContext(UserProgressContext);

  function handleCloseCart() {
    userContext.hidecart();
  }

  function handleGoToCheckout() {
    userContext.showCheckout();
  }
  return (
    <Model
      className="cart"
      open={userContext.progress === "showcart"}
      onClose={userContext.progress === "showcart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartContext.removeItem(item.id)}
            onIncrease={() => cartContext.addItem(item)}
          />
        ))}
      </ul>
      <p className="total">Total Amount: {formatPrice.format(cartTotal)}</p>
      <p className="modal-actions">
        <Buttons textOnly onClick={handleCloseCart}>
          Close
        </Buttons>
        {cartContext.items.length > 0 && (
          <Buttons onClick={handleGoToCheckout}>Go to Check Out</Buttons>
        )}
      </p>
    </Model>
  );
}
