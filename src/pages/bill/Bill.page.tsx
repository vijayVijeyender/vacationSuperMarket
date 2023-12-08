import { FormattedMessage } from "react-intl";
import { Shopping } from "./Bill.shopping.component";
import { BillHeader } from "./Bill.header";

function Bill() {
  return (
    <>
<BillHeader />
      <div className="container">
        <div className="row row-cols-2">
          <div className="col-auto col-md-6 col-xl-9 offset-0">
            <div
              className="row row-cols-5 fs-5 text-bg-primary"
              style={{
                marginBottom: "15px",
              }}
            >
              <div className="col">
                <span>P <FormattedMessage id="pcode" /></span>
              </div>
              <div className="col">
                <span>P <FormattedMessage id="pname" /></span>
              </div>
              <div className="col">
                <span>P <FormattedMessage id="pquantity" /></span>
              </div>
              <div className="col">
                <span>P <FormattedMessage id="pprice" /></span>
              </div>
              <div className="col">
                <span>P <FormattedMessage id="ptax" /></span>
              </div>
            </div>
            <div
              className="row"
              style={{
                margin: "2px",
                overflowY: "scroll",
                maxWidth: "827px",
                height: "339px",
                minHeight: "0px",
                maxHeight: "200px",
              }}
            >
              <div
                className="col"
                style={{
                  maxHeight: "inherit",
                }}
              >
                <div className="row row-cols-5 flex-shrink-1 justify-content-start align-content-center flex-wrap">
                  <div className="col">
                    <span>1</span>
                  </div>
                  <div className="col flex-row flex-grow-1 flex-shrink-1 flex-wrap">
                    <input
                      className="form-control-sm"
                      type="search"
                      style={{
                        width: "100%",
                        height: "101%",
                      }}
                    />
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
              </div>
            </div>
            <div
              className="row row-cols-5 flex-shrink-1 justify-content-center align-items-center align-content-center flex-wrap"
              style={{
                marginTop: "15%",
              }}
            >
              <div className="col" />
              <div className="col flex-row flex-grow-1 flex-shrink-1 flex-wrap" />
              <div className="col text-center">
                <button className="btn btn-danger" type="button">
                <FormattedMessage id="cancel" />
                </button>
              </div>
              <div className="col text-center">
                <button className="btn btn-warning" type="button">
                  Draft
                </button>
              </div>
              <div className="col text-center">
                <button className="btn btn-success" type="button">
                  <FormattedMessage id="bill" />
                </button>
              </div>
            </div>
          </div>
          <Shopping />
        </div>
      </div>
    </>
  );
}

export default Bill;
