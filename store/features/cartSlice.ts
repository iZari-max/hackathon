import { CartItem, ProductT } from "@/interfaces"
import { createSelector, createSlice, current, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface CartState{
    cartItems : CartItem[]
}

const initialState: CartState = {
    cartItems: [],
}   


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

        increment:(state, action:PayloadAction<ProductT>)=>{
            const item = state.cartItems.find(
                (el)=> el.product._id === action.payload._id
            )
            if(item){
                item.qty++
            }
            else{
                state.cartItems.push(
                    {
                        product: action.payload,
                        qty: 1
                    }
                )
            }
        },

        decrement:(state, action:PayloadAction<ProductT>)=>{
            const item = state.cartItems.find(
                (el)=> el.product._id === action.payload._id
            )
            if(item){
                item.qty--
                if(item.qty===0){
                    state.cartItems = state.cartItems.filter
                    (
                        el=>el.product._id!==action.payload._id
                    )
                    }
            }
            else{
                state.cartItems.push(
                    {
                        product: action.payload,
                        qty: 1
                    }
                )
            }
        },
        remove:(state, action:PayloadAction<ProductT>)=>{
            const item = state.cartItems.find(
                (el)=> el.product._id === action.payload._id
            )
            if(item){
                const index = state.cartItems.indexOf(item)
                    state.cartItems.splice(index, 1)
                
                
            }
        },
        clearCart:(state)=>{
            state.cartItems = []
        }
    }
})

const cartItems = (state:RootState) => state.cart.cartItems

export const totalCartItemSelector = createSelector([cartItems], (cartItems)=>
cartItems.reduce((total:number, curr: CartItem)=>(total += curr.qty), 0

))

export const totalPriceSelector = createSelector([cartItems], (cartItems)=>
cartItems.reduce((total:number, curr: CartItem)=>(total += curr.qty * curr.product.price), 0

))

export const productQtySelector = createSelector([cartItems, (cartItems, productId:string)=>productId],
(cartItems, productId)=> cartItems.find(el=>el.product._id==productId)?.qty
)

export const { increment, decrement, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer