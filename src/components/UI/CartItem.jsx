import { formatPrice } from "../../util/format";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {formatPrice.format(price)}
      </p>
      <p className="cart-item-actions">
        <button className="cart-item-remove" onClick={onDecrease}>
          -
        </button>
        <span className="cart-item-quantity">{quantity}</span>
        <button className="cart-item-add" onClick={onIncrease}>
          +
        </button>
      </p>
    </li>
  );
}
