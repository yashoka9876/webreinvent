import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    Token: string | null;
    isLogin: boolean;
  }
  
  const initialStateAuth: AuthState = {
    Token: "Smeer Ansari khauf",
    isLogin: false
  };
  

const authSlice=createSlice({
    name:'Auth',
    initialState:initialStateAuth,
    reducers:{
        login(state,actions){
            state.Token=actions.payload;
            if(state.Token){
                state.isLogin=true;
            }
        },
        logout(state,actions){
            state.Token=null;
            state.isLogin=false;
        }
    }
})

export const authActions=authSlice.actions;

export default authSlice.reducer