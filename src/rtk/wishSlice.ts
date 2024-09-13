import { createSlice } from "@reduxjs/toolkit";


    const initialState = {
        wishlistsItems: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],
    }

export const wishSlice = createSlice({
    name: "wishlists",
    initialState,
    reducers: {
        //add to wish list 

        addToWishList: (state, action) => {

            // //if the item already exits
            const exiteditemindex = state.wishlistsItems?.findIndex((product) => product["_id"] === action.payload["_id"]);

            if (exiteditemindex >= 0) {
                alert('You cannot add this to wishlists anymore it is already exit!');
            } else 
            {
            //add the book to wish list 

                const buildwishlistItem = { ...action.payload }

                state.wishlistsItems?.push(buildwishlistItem );
                
                localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistsItems));
        } },

        //remove item from wishlist

    removeWishlist: (state, action) => {

        const updatedWishlists = state.wishlistsItems?.filter((item) => item?._id !== action.payload?._id)

        state.wishlistsItems = updatedWishlists;

        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistsItems));

    },

    clearWishlists: (state, action) => {
        state.wishlistsItems = [];
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistsItems));
    }

},
})


export const { addToWishList, removeWishlist, clearWishlists } = wishSlice.actions

export default wishSlice.reducer