import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Login from './components/Login'
const App = ()=>{
  return(
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Login' element={<Login/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App