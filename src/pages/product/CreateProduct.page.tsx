import { FormattedMessage, useIntl } from "react-intl";

export default function CreateProduct(){
    const intl=useIntl();
    return (
        <form>
    <div className="row">
        <div className="col">
            <h1 style={{
                "textAlign": "center",
                "marginBottom": "1px"
            }}><FormattedMessage id="createaproduct" /></h1>
        </div>
    </div>
    <div className="row text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6"><label className="form-label float-start form-label" htmlFor="brandname"><FormattedMessage id="enterproductname" /></label><input className="form-control form-control" type="text" name="brandname" placeholder={intl.formatMessage({id:`enterproductname`})}  /></div>
        <div className="col-auto"><label className="form-label float-start form-label"><FormattedMessage id="enterproductname" /></label><input className="form-control form-control" type="text" placeholder={intl.formatMessage({id:`enterproductname`})} /></div>
    </div>
    <div className="row text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6"><label className="form-label float-start form-label" htmlFor="brandname"><FormattedMessage id="entercostprice" /></label><input className="form-control form-control" type="text" name="brandname" placeholder={intl.formatMessage({id:`entercostprice`})} /></div>
        <div className="col-auto"><label className="form-label float-start form-label"><FormattedMessage id="enterproductquantity" /></label><input className="form-control form-control" type="text" placeholder={intl.formatMessage({id:`enterproductquantity`})} /></div>
    </div>
    <div className="row text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6"><label className="form-label float-start form-label" htmlFor="brandname"><FormattedMessage id="entersellingprice" /></label><input className="form-control form-control" type="text" name="brandname" placeholder={intl.formatMessage({id:`entersellingprice`})} /></div>
        <div className="col-auto"><label className="form-label float-start form-label"><FormattedMessage id="enterbrandname" /></label><input className="form-control form-control" type="text" placeholder={intl.formatMessage({id:`enterbrandname`})} /></div>
    </div>
    <div className="row text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6"><label className="form-label float-start form-label" htmlFor="brandname"><FormattedMessage id="entercategoryname" /></label><input className="form-control form-control" type="text" name="brandname" placeholder={intl.formatMessage({id:`entercategoryname`})} /></div>
    </div>
    <div className="row d-flex justify-content-center" style={{
        "marginTop": "6px"
    }}>
        <div className="col-3" style={{
            "textAlign": "center"
        }}><button className="btn btn-success" type="button" style={{
            "textAlign": "center"
        }}><FormattedMessage id="create" /></button></div>
        <div className="col-3" style={{
            "textAlign": "center"
        }}><button className="btn btn-danger" type="button" style={{
            "textAlign": "center"
        }}><FormattedMessage id="cancel" /></button></div>
    </div>
</form>
    );
}