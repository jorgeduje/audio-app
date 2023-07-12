import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, loginWithGoogle, onSignIn } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const login = createAsyncThunk(
  "login",
  async (argument, { rejectWithValue }) => { 
    let res = await onSignIn(argument);
    if (res.user.accessToken) {
      let usersCollection = collection(db, "users")
      let q = query(usersCollection, where("email", "==", res.user.email))
      const userInfo = await getDocs( q )
      const userData = {...userInfo.docs[0].data(),  id: userInfo.docs[0].id }
     
      return {userData, accessToken: res.user.accessToken };
    } else {
      rejectWithValue("Ocurrio un error");
    }
  }
);
export const loginGoogle = createAsyncThunk(
  "loginGoogle",
  async (_, { rejectWithValue }) => {
    let res = await loginWithGoogle();
    if (res.user.accessToken) {
      return {userData: res.user, accessToken: res.user.accessToken};
    } else {
      rejectWithValue("Ocurrio un error");
    }
  }
);

