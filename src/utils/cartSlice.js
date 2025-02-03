import {createSlice} from "@reduxjs/toolkit"

/**
 * Redux slice for managing cart state.
 * - Allows adding, removing, and updating items in the cart.
*/

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        addToCart: (state, action) =>{
            const item = state.items.find((item) => item.id == action.payload.id)
            if(item){
                item.quantity += 1;
            }else{
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if(item){
                item.quantity = action.payload.quantity
            }
        },
    },
});

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer