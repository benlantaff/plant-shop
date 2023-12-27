function CartItem({ item }) {
  const { id, name, unitPrice, imageUrl, soldOut, tags } = item;

  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 className="my-0">{name}</h6>
      </div>
      <span className="text-body-secondary">${unitPrice}</span>
    </li>
  );
}

export default CartItem;
