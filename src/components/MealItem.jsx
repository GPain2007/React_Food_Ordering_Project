import { useContext } from "react";
import { formatPrice } from "../util/format.js";
import Buttons from "./UI/Buttons.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ name, price, image, description, quanity }) {
  const carTxt = useContext(CartContext);
  function handleAddToCart() {
    carTxt.addItem({
      name,
      price,
      image,
      description,
      quanity: 1,
    });
    console.log("Item added to cart:", {
      name,
      price,
      image,
      description,
      quanity,
    });
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{formatPrice.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Buttons onClick={handleAddToCart}>Add to Cart</Buttons>
        </p>
      </article>
    </li>
  );
}
