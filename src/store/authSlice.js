import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user:{},
   accessToken: "",
   isLogged: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ()=>{}
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer