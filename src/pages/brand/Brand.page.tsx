
import { useEffect } from "react";

export function Brand (){
    // const navigate=useNavigate();
    // const { getBrand } = useStoreActions(
    //     (actions: Actions<AppStoreModel>) => actions.brandModel
    //   );
    useEffect(()=>{
        // getBrand();
    })

    return (
      //     <div className="container">
      //     <div className="row" style={{
      //         "marginBottom": "46px"
      //     }}>
      //         <div className="col-5 col-xl-3 offset-4 text-center align-self-center">
      //             <h1 className="text-secondary-emphasis">Brand Details</h1>
      //         </div>
      //         <div className="col text-end align-self-center"><button className="btn btn-outline-info btn-lg" role="button" onClick={()=> navigate('/createBrand')}>Create New Brand</button></div>
      //     </div>
      //     <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-3">
      //         <div className="col">
      //             <div className="d-flex flex-column justify-content-center align-items-center">
      //                 <p className="text-center"><span>Reflecting this rich Indian tradition is Aachi, a name synonymous with purity, taste.</span></p>
      //                 <div className="d-flex">
      //                     <div>
      //                         <p className="fs-3 fw-bold text-center text-primary mb-0">AAchi</p>
      //                     </div>
      //                 </div>
      //                 <div className="card border-0 shadow-none">
      //                     <div className="card-body d-flex align-items-center p-0" />
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      // </div>
      <form>
    <fieldset>
      <legend>Legend</legend>
      <div className="row">
        <label className="col-sm-2 col-form-label" htmlFor="staticEmail">Email</label>
        <div className="col-sm-10">
          <input className="form-control-plaintext" type="text"  id="staticEmail" value="email@example.com" />
        </div>
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="exampleInputEmail1">Email address</label>
        <input className="form-control" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" data-nlok-ref-guid="a2e6b209-36d7-4ea9-922a-58cdb7381829"  /><div id="norton-idsafe-field-styling-divId" style={{
        "height": "24px",
        "maxWidth": "24px",
        "verticalAlign": "top",
        "position": "absolute",
        "top": "142px",
        "left": "504.38709677419354px",
        "cursor": "pointer",
        "resize": "both",
        "zIndex": "2147483646"
      }}><img id="norton-idsafe-field-logo-imgId" src="chrome-extension://admmjipmmciaobhojoghlmleefbicajg/images/npw-badge-icon-locked.svg" style={{
        "height": "24px",
        "width": "24px",
        "display": "block"
      }} /></div>
        <small className="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small>
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="exampleInputPassword1">Password</label>
        <input className="form-control" type="password" id="exampleInputPassword1" placeholder="Password"  data-nlok-ref-guid="09e4fcad-6a16-4333-ff26-455bf42bec85" /><div id="norton-idsafe-field-styling-divId" style={{
        "height": "24px",
        "maxWidth": "24px",
        "verticalAlign": "top",
        "position": "absolute",
        "top": "258px",
        "left": "504.38709677419354px",
        "cursor": "pointer",
        "resize": "both",
        "zIndex": "2147483646"
      }}><img id="norton-idsafe-field-logo-imgId" src="chrome-extension://admmjipmmciaobhojoghlmleefbicajg/images/npw-badge-icon-locked.svg" style={{
        "height": "24px",
        "width": "24px",
        "display": "block"
      }} /></div>
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="exampleSelect1">Example select</label>
        <select className="form-select" id="exampleSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="exampleSelect1">Example disabled select</label>
        <select className="form-select" id="exampleDisabledSelect1" disabled>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="exampleSelect2">Example multiple select</label>
        <select className="form-select" multiple id="exampleSelect2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="exampleTextarea">Example textarea</label>
        <textarea className="form-control" id="exampleTextarea"  />
      </div>
      <div>
        <label className="form-label mt-4" htmlFor="formFile">Default file input example</label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <fieldset>
        <legend className="mt-4">Radio buttons</legend>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked />
          <label className="form-check-label" htmlFor="optionsRadios1">
            Option one is this and that—be sure to include why it's great
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
          <label className="form-check-label" htmlFor="optionsRadios2">
            Option two can be something else and selecting it will deselect option one
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
          <label className="form-check-label" htmlFor="optionsRadios3">
            Option three is disabled
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="mt-4">Checkboxes</legend>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="mt-4">Switches</legend>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="mt-4">Ranges</legend>
          <label className="form-label" htmlFor="customRange1">Example range</label>
          <input className="form-range" type="range" id="customRange1" />
          <label className="form-label" htmlFor="disabledRange">Disabled range</label>
          <input className="form-range" type="range" id="disabledRange" disabled />
          <label className="form-label" htmlFor="customRange3">Example range</label>
          <input className="form-range" type="range" min="0" max="5" step="0.5" id="customRange3" />
      </fieldset>
      <button className="btn btn-primary" type="submit" data-nlok-ref-guid="c0531c22-5b5e-427f-dc7f-c327ca99ed43">Submit</button>
    </fieldset>
  </form>
    );
}