import{buyCake} from '../redux/cake/cakeActionsCreators'
import{connect} from 'react-redux'

const Home = (props)=>{
    console.log("console.log() from home.jsx")
    console.log(props)

  const buttonBuyCake = () =>{
    console.log('console.log from buttonBuyCake')
    console.log(props.noOfCakes)
    if(props.noOfCakes>0){
        props.buyCake()
    }
  }
    
return(
    < div>
        <h1>Cake shop</h1>
        <p>Number of cakes: {props.noOfCakes}</p>
        <button onClick={buttonBuyCake} >Buy Cake</button>
    </div>
)
}

const mapStateToProps = state =>{
    return{
        noOfCakes:state.noOfCakes
    }
}
//this function gets the redux state as a parameter and returns an object

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: () =>dispatch(buyCake())
    }
}
// this function gets the redux dispatch method as a parameter and again returns an object

export default connect(mapStateToProps, mapDispatchToProps)(Home)
//using connect function/higher order component form the react-redux library
