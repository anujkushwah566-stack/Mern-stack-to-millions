import {Link} from 'react-router-dom'

const Home = ()=>{
   return(
    <div>
        <h1 className="text-4xl font-bold text-blue-600">Welocome to Home</h1>
        <div>
            <Link to ='/'>Home</Link>
            <Link to='/Pricing'>Pricing</Link>
            <Link to='/Login'>Login</Link>
        </div>
    </div>
   )
}

export default Home