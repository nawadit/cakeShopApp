import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux/cake/cakeActionsCreators"

const HomeTwo = ()=>{
const noOfCakes = useSelector(state => state.noOfCakes)
const dispatch = useDispatch()
    
return(
    < div>
        <h1>Cake shop</h1>
        <p>Number of cakes:{noOfCakes}</p>
        <button onClick={dispatch(buyCake())}>Buy Cake</button>
    </div>
)
}

export default HomeTwo