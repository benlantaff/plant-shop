import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCartPrice, getCart } from "./cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <div className="offcanvas-body">
      <div className="order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">
            {totalCartQuantity}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${totalCartPrice}</strong>
          </li>
        </ul>

        <button className="w-100 btn btn-primary btn-lg" type="submit">
          <Link
            className="nav-link w-100 btn btn-primary btn-lg"
            to="/checkout"
          >
            Continue to checkout
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Cart;
