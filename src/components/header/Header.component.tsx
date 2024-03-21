import { FormattedMessage, useIntl } from "react-intl";
import { OffcanvasCart } from "../offcanvasCart.component.tsx/OffcanvasCart.component";

export const Header = () => {
  const intl=useIntl();
  return (
    <header
      style={{
        marginBottom: "24px",
      }}
    >
      <nav className="navbar navbar-expand-md py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg
                className="bi bi-basket2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
              </svg>
            </span>
            <span><FormattedMessage id="maxmarket" /></span>
          </a>
          <button
            className="cart-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbar-1"
            data-bs-placement="end"
            aria-controls="navbar"
            style={{
              fontSize: "22px",
              background: "rgb(214,86,30)",
            }}
          >
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
            <span
              style={{
                color: "rgb(1,3,1)",
                fontWeight: "bold",
              }}
            >
              <FormattedMessage id="cart" />
            </span>
          </button>
          <button
            className="navbar-toggler text-end"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-2"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navcol-2"
            style={{
              margin: "0px",
            }}
          >
            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                <FormattedMessage id="home" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/brands">
                <FormattedMessage id="brand" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category">
                <FormattedMessage id="category" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                <FormattedMessage id="product" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/billing">
                <FormattedMessage id="bill" />
                </a>
              </li>    
            </ul>
          </div>
        </div>
      </nav>
      <div className="container d-flex flex-row flex-grow-1 flex-shrink-1 justify-content-evenly">
        <input
          className="bg-secondary-subtle border rounded-pill border-primary-subtle shadow-lg d-flex flex-row flex-grow-1"
          type="search"
          placeholder={intl.formatMessage({id:`searchforproductsbrandandmore`})}
          style={{
            paddingLeft: "20px",
            margin: "0px",
            marginRight: "10px",
            marginLeft: "0px",
            paddingTop: "0px",
            paddingRight: "0px",
          }}
        />
        <button className="btn btn-success" type="submit">
        <FormattedMessage id="search" />
        </button>
      </div>
      <OffcanvasCart />
    </header>
  );
};
