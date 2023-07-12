import { createSlice } from "@reduxjs/toolkit";
import { login, loginGoogle } from "./authThunk";

const initialState = {
  user: {},
  accessToken: "",
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=>{
      state.user = {}
      state.accessToken = ""
      state.isLogged = false
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.userData
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.accessToken = "";
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(loginGoogle.fulfilled, (state, action) => {
      state.user = action.payload.userData
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { loginRedux } = authSlice.actions;

export default authSlice.reducer;
