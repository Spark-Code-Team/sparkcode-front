import axios from "axios";
import { getCookie } from "@/utils/cookies";

const api = axios.create({  
    baseURL:process.env.NEXT_PUBLIC_API_URL, 
    headers:{
        'Content-Type':'application/json'
    },
    // withCredentials: true,
  }); 

  api.interceptors.request.use(
    request => {
        const token = getCookie("accessToken")

        if(token) {
            request.headers["Authorization"] = `Bearer ${token}`
        }

        return request
    }, 

    (error) => {
        return Promise.reject(error)
    }
)

export default api