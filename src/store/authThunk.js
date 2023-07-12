import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginWithGoogle, onSignIn } from "../firebaseConfig";

export const login = createAsyncThunk(
  "login",
  async (argument, { rejectWithValue }) => {
    console.log("argumentosss")
    let res = await onSignIn(argument);
    if (res.user.accessToken) {
      return res.user;
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
      return res.user;
    } else {
      rejectWithValue("Ocurrio un error");
    }
  }
);

