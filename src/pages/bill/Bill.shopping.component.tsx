import { FormattedMessage } from "react-intl";

export const Shopping = () => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="row">
        <div className="col">
          <h2><FormattedMessage id="yourshopping" /></h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="subtotal" /></p>
        </div>
        <div className="col">
          <p>4321.123</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="totaltax" /></p>
        </div>
        <div className="col">
          <p>321.123</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="totalamount" /></p>
        </div>
        <div className="col">
          <p>4000.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="discount" /></p>
        </div>
        <div className="col">
          <input
            type="number"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="totalamount" /></p>
        </div>
        <div className="col">
          <p>4000.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="recivedamount" /></p>
        </div>
        <div className="col">
          <input
            type="number"
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p><FormattedMessage id="returnamount" /></p>
        </div>
        <div className="col">
          <p>0.00</p>
        </div>
      </div>
    </div>
  );
};
