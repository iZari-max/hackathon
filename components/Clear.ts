import { clearCart } from "@/store/features/cartSlice"
import { useAppDispatch } from "@/store/store"



const clear = ()=>{
const dispatch = useAppDispatch()

    dispatch(clearCart())
}
export default clear