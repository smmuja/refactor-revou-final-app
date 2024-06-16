import axios from "axios";
import Cookies from "js-cookie";
import { token } from "config";

const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL

export const axiosInstance = axios.create({baseURL})

axiosInstance.interceptors.request.use(
    (config) => {
        const auth = Cookies.get(token);
        
        config.headers.Authorization = `Bearer ${auth}`;
        return config;
    },
    (error) => Promise.reject(error)
);
