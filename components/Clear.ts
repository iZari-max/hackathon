import { clearCart } from "@/store/features/cartSlice"
import { useAppDispatch } from "@/store/store"



const Clear = ()=>{
const dispatch = useAppDispatch()

    dispatch(clearCart())
}
export default Clear