
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
    
    
   <UserContextProvider classname="place-content-center place-items-center">
     <h1 className='prose-2xl'>
      Context API and Redux Tool Kit Use Demo 
    </h1>

    <br/>
    <br/>
    <Login/>
    <Profile/>
    
   </UserContextProvider> 
   
  )
}

export default App
