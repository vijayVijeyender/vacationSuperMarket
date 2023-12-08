import { FormattedMessage } from "react-intl";

export const BillHeader = () => {
  return (
    <div className="container">
      <div className="row gx-3 gy-3">
        <div className="col">
          <label className="form-label"><FormattedMessage id="billnumber" /></label>
          <p className="text-center">1</p>
        </div>
        <div className="col">
          <label className="form-label"><FormattedMessage id="billdate" /></label>
          <input type="date" />
        </div>
        <div className="col">
          <label className="form-label"><FormattedMessage id="gsttype" /></label>
          <select
            style={{
              marginTop: "4px",
            }}
          >
            <option value="12" selected>
              CGST
            </option>
            <option value="13">This is item 2</option>
            <option value="14">This is item 3</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label"><FormattedMessage id="paymentmode" /></label>
          <select
            style={{
              marginTop: "4px",
            }}
          >
            <option value="12" selected>
              Cash
            </option>
            <option value="13">Phone pey</option>
            <option value="14">Card</option>
          </select>
        </div>
        <div className="col">
          <label className="form-label"><FormattedMessage id="mobile" /></label>
          <input type="tel" />
        </div>
        <div className="col-xl-1 text-center align-self-center">
          <button
            className="btn btn-secondary"
            type="button"
            style={{
              textAlign: "center",
            }}
          >
            <FormattedMessage id="newbill" />
          </button>
        </div>
      </div>
    </div>
  );
};
