import { FormattedMessage, useIntl } from "react-intl";
import { useStoreActions, useStoreState } from "../../store/hooks";
import { AppStoreModel } from "../../store";
import { Actions } from "easy-peasy";
import { useState } from "react";
import { Model } from "../../components/model/Model.component";


export default function CreateBrand() {
  const [brand, setBrand] = useState({
    brandName: "",
    brandNameTn: "",
    brandDescription:"",
    brandDescriptionTn:''
  });
  const [showModel, setShowModel] = useState('');
  const intl = useIntl();
  const {responseStatus,failureReason}= useStoreState(store=> store.brandModel)
  const { saveBrand } = useStoreActions(
    (actions: Actions<AppStoreModel>) => actions.brandModel
  );
  const handleBrandCreation =  async () => {
    const res=await saveBrand(brand);
    console.log(res);
    if(responseStatus==="success"){
      setShowModel("success");
    }else{
      setShowModel("failed");
    }
  };
  const resetbrand=()=>{
    setBrand(
{
    brandName: "",
    brandNameTn: "",
    brandDescription:"",
    brandDescriptionTn:''
  }
    )
  }
  return (
  <>
      <div className="row">
        <div className="col">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            <FormattedMessage id="createabrand" />
          </h1>
        </div>
      </div>
      <div className="row gy-3 text-center d-flex flex-row justify-content-center">
        <div className="col-auto col-xl-6">
          <label className="float-start" htmlFor="brandname">
            <FormattedMessage id="enterbrandname" />
          </label>
          <input
           
            type="text"
            className="form-control"
            placeholder={intl.formatMessage({ id: `enterbrandname` })}
            name="brandname"
            value={brand.brandName}
            onChange={(e)=> setBrand(prev =>({...prev, brandName:e.target.value}))}
          />
        </div>
        <div className="col-auto">
          <label className=" float-start" htmlFor="brandnametamil">
            <FormattedMessage id="enterbrandnametamil" />
          </label>
          <input
            id="brandnametamil"
            type="text"
            className="form-control"
            value={brand.brandNameTn}
            onChange={(e)=> setBrand(prev =>({...prev, brandNameTn:e.target.value}))}
            placeholder={intl.formatMessage({ id: `enterbrandnametamil` })}
          />
        </div>
        <div className="col-auto col-xl-5">
          <label className="form-label float-start "><FormattedMessage id="enterbranddesciption" /></label>
          <input className="form-control" value={brand.brandDescription}
            onChange={(e)=> setBrand(prev =>({...prev, brandDescription:e.target.value}))} type="text" placeholder={intl.formatMessage({ id: `enterbranddesciption` })} /></div>
    <div className="col-auto col-xl-5">
      <label className="form-label float-start "><FormattedMessage id="enterbranddesciption" />
      </label><input className="form-control" value={brand.brandDescriptionTn}
            onChange={(e)=> setBrand(prev =>({...prev, brandDescriptionTn:e.target.value}))} type="text" placeholder={intl.formatMessage({ id: `enterbranddesciptiontamil` })} /></div>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{
          marginTop: "28px",
        }}
      >
        <div
          className="col-3"
          style={{
            textAlign: "center",
          }}
        >
          <button
            className="btn btn-success"
            type="button"
            onClick={handleBrandCreation}
            style={{
              textAlign: "center",
            }}
          >
            <FormattedMessage id="create" />
          </button>
        </div>
        <div
          className="col-3"
          style={{
            textAlign: "center",
          }}
        >
          <button
            onClick={resetbrand}
            className="btn btn-danger"
            type="button"
            style={{
              textAlign: "center",
            }}
          >
            <FormattedMessage id="cancel" />
          </button>
         
                  </div>

      </div>
      { showModel === "success"   &&
      <Model modelTitle="Brand Creation" modelContent="Brand Creation Success" resetbrand={resetbrand} setShowModel={setShowModel}/>}
      { showModel === "failed"   &&
      <Model modelTitle="Brand Creation" modelContent={failureReason} resetbrand={resetbrand} setShowModel={setShowModel}/>}
      </>
  );
}
