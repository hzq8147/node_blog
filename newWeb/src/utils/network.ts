import axios from "axios";
import apiConfig from './apiconfig';
import {ApiOptions} from "@/types";
const config = {
    defaults:{
        timeout: 60000,
        withCredentials: true,
        transformRequest:[function (data){
            let ret = '';
            ret = JSON.stringify(data);
            return ret;
        }]
    }
}
axios.defaults.timeout = 60000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const beforeRequest=[config=>{
    return config;
},error=>{
    return Promise.reject(error);
}]
const beforeResponse=[config=>{
    return config;
},error =>{
    return Promise.reject(error);
}]
const checkHttpStatus = response =>{
    if (!response || typeof response !== 'object'){
        // error case
    }
    if (response.status >= 200 && response.status < 300){
        if (response.data && response.data.error === 0){
            // success case
            return response.data;
        }
        // error case

    }else {
        // error case
    }
}
const httpError = e =>{
    return {error:true,exception:e};
}
function installAxios(Vue, axiosConfig){
    axios.interceptors.request.use(...beforeRequest);
    axios.interceptors.request.use(...beforeResponse);
    const defaults = config.defaults;
    Object.keys(defaults).forEach(key=>{
        axios.defaults[key] = defaults[key];
    })
    let apis = {};
    Object.keys(apiConfig).forEach(name =>{
        apis[name] = async function api(options?: ApiOptions){
            const defaultOption:ApiOptions = {
                data:{},
                method:"POST",
                silent:'silent'
            }
            let apiOption = Object.assign({},defaultOption,options);
            return await sendRequest("http://"+location.hostname+':3000/'+apiConfig[name],apiOption);
        }
    })
    Object.defineProperties(Vue.prototype,{
        $api: {
            get() {
                return apis;
            }
        }
    })
}
async function sendRequest(url,options?:ApiOptions){
    const response = await axios(url,options).then(checkHttpStatus).catch(httpError);
    console.log(response);
    if (response.error){
        // toast exception
    }
    return response;
}
export default {
    install: function (Vue,axiosConfig){
        installAxios(Vue, axiosConfig);
    }
}
