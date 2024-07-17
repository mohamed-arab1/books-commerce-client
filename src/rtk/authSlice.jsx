import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:"",
};

export const signUpUser = createAsyncThunk(
    'signupuser', async (userdata) => {
    try{
        const response = await axios.post("http://localhost:3030/auth/signup",{
            user:userdata,
        });
        return response.data.user

    }
    catch{

    }
})


export const signInUser = createAsyncThunk('signinuser', async () => {
})


const authSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=> {
        builder
        .addCase(signUpUser.pending,(state)=> {
            state.loading=true
        })
        .addCase(signUpUser.fulfilled,(state,action)=> {
            state.loading=false;
            state.user=action.payload;
        })
        .addCase(signUpUser.rejected,(state)=> {
            state.loading=false;
        })
       
    }
})

// export const {logInOut} = authSlice.actions;

export default authSlice.reducer;