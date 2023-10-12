import axios from "axios";
import { BACKEND_BASE_URL } from "./env";
import { getAccessToken, removeAccessToken } from "../utilis/local-storage";

axios.defaults.baseURL = BACKEND_BASE_URL

axios.interceptors.request.use((config)=>{
    const token = getAccessToken()
    if (token){
        config.headers.Authorization = `Bearer ${getAccessToken()}`
    }
    return config;
})



axios.interceptors.response.use(
    response => response,
    error => {
  
      if (error.response?.status === 401) {
        if(getAccessToken()){
          removeAccessToken();
          window.location.href = '/login';

        }
        
      }
      return Promise.reject(error);
    }
  );
  

export default axios