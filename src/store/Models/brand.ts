import { Action, Thunk, action, thunk } from "easy-peasy";
import { Brand } from "../interface";
import axios from "axios";

 interface BrandState{
  brand :Brand;
  brandList:[];
  responseStatus: string;
  responseDesc: string;
}
 interface BrandActions {
    setBrand:Action<this,Brand>;
    setBrandList: Action<this, []>;
    setResponseStatus:Action<this,string>;
    setResponseDesc: Action<this,string>;

}
interface BrandThunks{
    saveBrand:Thunk<BrandModel,any>;
    getBrand:Thunk<BrandModel,any>;
}
export interface BrandModel extends BrandState, BrandActions, BrandThunks{}

export const brandModel: BrandModel ={
    //Store State
    brand:{},
    brandList:[],
    responseStatus:'',
    responseDesc:'',

    //actions
    setBrand: action((state, brand) => {
        state.brand = brand;
    }),
    setBrandList: action((state,brandList) =>{
      state.brandList= brandList;
    }),
    setResponseStatus: action((state,responseStatus)=>{
      state.responseStatus=responseStatus;
    }),
    setResponseDesc:action((state,responseDesc)=>{
      state.responseDesc=responseDesc;
    }),
    saveBrand: thunk(async(actions,payload,{getState})=>{

      await axios.post("http://localhost:8080/brand/createbrand",payload).then(
         res=>{ 
              actions.setBrand(res.data);
              actions.setResponseStatus("success");
              actions.setResponseDesc("Brand Created Sucessfully");
        }
      )
      .catch(err=>{
        actions.setResponseStatus("failed");
        actions.setResponseDesc(err.response.data.message);
        
      });
      
      console.log(getState().brand)
    }),


    getBrand: thunk(async(actions,{getState})=>{

      await axios.get("http://localhost:8080/brand").then(
         res=>{ 
              actions.setBrandList(res.data);
              actions.setResponseStatus("success");
              actions.setResponseDesc("Brand fetch Sucess");
        }
      )
      .catch(err=>{
        actions.setResponseStatus("failed");
        actions.setResponseDesc(err.response.data.message);
        
      });
      
      console.log(getState().brandList)
    })
}


