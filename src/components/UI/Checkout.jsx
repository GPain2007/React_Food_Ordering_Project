import { useContext } from "react";
import Model from "./Model.jsx";
import CartContext from "../../store/CartContext.jsx";
import Input from "./Input.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import { formatPrice } from "../../util/format.js";
import Buttons from "./Buttons.jsx";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserProgressContext);
  const cartTotal = cartContext.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  function handleClose() {
    userContext.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    // const customerData = {
    //   name: fd.get("name"),
    //   email: fd.get("email"),
    //   street: fd.get("street"),
    //   postal_code: fd.get("postal-code"),
    //   city: fd.get("city"),
    // };
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartContext.items,
          customer: customerData,
        },
      }),
    });

    // Here you would typically send the data to your server

    // Reset the cart after submission
    cartContext.clearCart();
    handleClose();
    userContext.hideCheckout();
  }

  return (
    <Model open={userContext.progress === "showCheckout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {formatPrice.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street Address" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Buttons textOnly type="button" onClick={handleClose}>
            Close
          </Buttons>
          <Buttons>Submit Order</Buttons>
        </p>
      </form>
    </Model>
  );
}
