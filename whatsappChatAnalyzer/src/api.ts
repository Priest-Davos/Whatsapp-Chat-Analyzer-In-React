import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants'; // Assuming these are defined as shown previously

// Create an instance of axios
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Request interceptor to attach the token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default api;