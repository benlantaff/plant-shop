import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function Product({ product }) {
  const { id, name, unitPrice, imageUrl, soldOut, tags } = product;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <div>
      <div className="col">
        <div
          className="product-item"
          style={{
            padding: "16px",
            boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04)",
            borderRadius: "12px",
          }}
        >
          <span className="badge bg-success position-absolute m-3">-30%</span>

          <figure
            style={{
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <a href="single-product.html" title="Product Title">
              <img
                src={imageUrl}
                style={{ backgroundColor: "#F9F9F9", borderRadius: "12px" }}
              />
            </a>
          </figure>
          <h3 style={{ textAlign: "center" }}>{name}</h3>

          <div className="d-flex align-items-center justify-content-between">
            <span className="price">${unitPrice}</span>
            {/* {!soldOut && <button>Add to cart</button>} */}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
