import { Action, Thunk, action, thunk } from "easy-peasy";
import { Brand } from "../interface";
import axios from "axios";

 interface BrandState{
  brand :Brand;
  responseStatus: string;
  failureReason: string;
}
 interface BrandActions {
    setBrand:Action<this,Brand>;
    setResponseStatus:Action<this,string>;
    setFailureReason: Action<this,string>;

}
interface BrandThunks{
    saveBrand:Thunk<BrandModel,any>;
}
export interface BrandModel extends BrandState, BrandActions, BrandThunks{}

export const brandModel: BrandModel ={
    //Store State
    brand:{},
    responseStatus:'',
    failureReason:'',

    //actions
    setBrand: action((state, brand) => {
        state.brand = brand;
    }),
    setResponseStatus: action((state,responseStatus)=>{
      state.responseStatus=responseStatus;
    }),
    setFailureReason:action((state,failureReason)=>{
      state.failureReason=failureReason;
    }),
    saveBrand: thunk(async(actions,payload,{getState})=>{

      await axios.post("http://localhost:8080/brand/createbrand",payload).then(
         res=>{ 
              actions.setBrand(res.data);
              actions.setResponseStatus("success");
        }
      )
      .catch(err=>{
        actions.setResponseStatus("failed");
        actions.setFailureReason(err.response.data.message);
        
      });
      
      console.log(getState().brand)
    })
}


