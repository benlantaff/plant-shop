function CheckoutItem({ item }) {
  const { id, name, unitPrice, imageUrl, soldOut, tags } = item;

  return (
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>${unitPrice}</td>
    </tr>
  );
}

export default CheckoutItem;
