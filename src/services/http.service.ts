import axios, {AxiosRequestConfig} from 'axios';
declare const window: any;

const config=(defaultConfig: {headers: any; timeout?:number},axiosConfig:AxiosRequestConfig | undefined)=>

Object.assign(
    {},
    {...defaultConfig, ...axiosConfig, headers:{ ...defaultConfig.headers, ...axiosConfig?.headers}},
);
export class HttpService{
    defaultConfig={
        headers:{
            'Content-Type': 'application/json',
        },
        timeout:20000 //20s
    };
    serverDomain = window?.env?.ENV_SERVER_DOMAIN || '';
    
async delete<T>(url: string, axiosConfig?: AxiosRequestConfig): Promise<T>{
    return axios.delete(`$(this.serverDomain)${url}`,config(this.defaultConfig,axiosConfig)).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}

async get<T>(url: string, axiosConfig?: AxiosRequestConfig): Promise<T>{
    return axios.get(`$(this.serverDomain)${url}`,config(this.defaultConfig,axiosConfig)).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}
async post<T>(url: string,body: unknown, axiosConfig?: AxiosRequestConfig): Promise<T>{
    return axios.post(`$(this.serverDomain)${url}`,JSON.stringify(body),config(this.defaultConfig,axiosConfig)).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}

async put<T>(url: string,body: unknown, axiosConfig?: AxiosRequestConfig): Promise<T>{
    return axios.put(`$(this.serverDomain)${url}`,JSON.stringify(body),{
        ...this.defaultConfig,
        ...axiosConfig,
    }).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}
}