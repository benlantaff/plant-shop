import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCartPrice, getCart } from "./cartSlice";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  console.log(cart);

  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bootstrap-tabs product-tabs">
              <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Checkout</h3>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <CheckoutItem item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;
