export const OffcanvasCart = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      id="navbar-1"
      aria-labelledby="navbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="navbarLabel-1">
          Cart
        </h5>
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div
        className="offcanvas-body"
        style={{
          maxHeight: "70%",
          overflowY: "scroll",
        }}
      >
        <div className="row">
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Product Name</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
        </div>
      </div>
      <div
        className="row align-items-center"
        style={{
          marginTop: "252px",
        }}
      >
        <div className="col">
          <p>Total Price</p>
        </div>
        <div className="col text-center align-self-center">
          <a className="btn btn-primary" role="button" href="bill.html">
            Proceed to Billing Page
          </a>
        </div>
        <div className="col">
          <p>100 Rs</p>
        </div>
      </div>
    </div>
  );
};
