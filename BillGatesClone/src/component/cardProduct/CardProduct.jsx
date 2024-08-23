import "./CardProduct.css";
function CardProduct() {
  return (
    <div className=" cardProducts">
      <div className="row">
        <div className="col-4 ">
          <div className="card">
            <div className="card-body">
              <img />
              <h5 className="card-title">Ürün ismi</h5>
              <p className="card-text text-primary">Fiyat</p>
              <div className="row m-auto ">
                <button className=" m-2 btn sellButton">Sell </button>
                <p className=" m-2 count">fjd</p>
                <button className=" m-2 buyButton">Buy</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">dmfdkfd</div>
        <div className="col-4">dmfdkfd</div>
      </div>
    </div>
  );
}

export default CardProduct;
