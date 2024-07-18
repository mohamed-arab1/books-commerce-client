import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState:[],
    name: "cartSlice",
    reducers: {
        addToCart: (state , action) => {
            const findProduct =  state.find((product) => product["_id"] === action.payload["_id"]);
            if(findProduct){
                findProduct.quantity += 1;

            } else{
                const productClone = { ...action.payload, quantity : 1}
                state.push(productClone);

            }
        },
        deleteFromCart:(state,action)=>{
            return  state.filter((product)=> product["_id"] !== action.payload["_id"])
        },
       decreaseQuantity:(state,action)=>{
        const findProduct =  state.find((product) => product["_id"] === action.payload["_id"]);
        if(findProduct){
            findProduct.quantity -= 1;

        } 
    },

        clear:()=>{
            return []
        },
    }
})

export const {addToCart,deleteFromCart,clear,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;