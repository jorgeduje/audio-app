
import { axiosProducts } from "./axiosInstance";

export const getAllProducts = async ()=>{
    let promesa = axiosProducts.get("/");
    let res = await promesa;
    return res.data
}

// getById

// create 

// update 

// delete