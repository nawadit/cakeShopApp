import './App.css'
import  Home  from './pages/home'
import{Provider} from 'react-redux'
//importing the Provider component from 'react-redux'
import  store  from './redux/cake/store'
import HomeTwo from './pages/homeUsingHooks'


function App() {

  return (
    <Provider store={store}>
			 {/* passing our application store as a prop to the Provider component so that it can provide our store to all the components it wraps around */}
      <div>
        {/* <Home/> */}
        <HomeTwo/>
      </div>
    </Provider>
  )
}

export default App