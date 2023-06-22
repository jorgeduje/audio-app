import axios from "axios";

// productos instance 
export const axiosProducts = axios.create({
    baseURL: 'http://localhost:5000/products',
    // headers: {'X-Custom-Header': 'foobar'}
  });

// auth instance