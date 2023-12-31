export const OffcanvasCart = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      id="navbar-1"
      aria-labelledby="navbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="navbarLabel-1">
        <svg
              className="bi bi-cart4"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={{
                marginRight: "7px",
                paddingBottom: "0px",
                marginBottom: "4px",
              }}
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
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
          <a className="btn btn-primary" role="button" href="billing">
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
