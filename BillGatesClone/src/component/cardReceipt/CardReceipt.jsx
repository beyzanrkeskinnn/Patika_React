import "./CardReceipt.css";

function CardReceipt({ cart }) {
  const cartItems = Object.values(cart);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="cardReceipt">
      <p className="font-weight-bold">Your Receipt</p>
      <ul className="list-unstyled">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div
              className="itemlist"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ flex: 6, margin: "0 5px" }}>
                <span>{item.name}</span>
              </p>
              <p style={{ flex: 1, margin: "0 50px" }}>
                {" "}
                ${item.price.toLocaleString()}
              </p>
              <p style={{ flex: 1, margin: "0 10px" }}>x{item.quantity}</p>
              <p
                style={{
                  flex: 4,
                  margin: "0 10px",
                  display: "block",
                  textAlign: "left",
                  backgroundColor: "pink",
                }}
              >
                ${item.totalPrice.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <hr style={{ border: "1px solid #000", margin: "20px 0" }} />
      <h3>Total ${totalPrice.toLocaleString()}</h3>
    </div>
  );
}

export default CardReceipt;
