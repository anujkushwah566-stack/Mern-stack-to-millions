import axios from "axios"
import { useState , useEffect } from "react"

const App = ()=>{
// agar data array aarha to value denge empty array
  const [products , setProducts] = useState([])
  
  useEffect(()=>{
    fetchData()
  } , [])

  const fetchData = async ()=>{
      const {data} = await axios.get("https://fakestoreapi.com/products")
      setProducts(data)
  }
  //console.log(products)

  return(
    <div className="w-10/12 mx-auto py-16">
      <div className="grid grid-cols-4 gap-8">
        {
           products.map((items , index)=>(
            <div key={index} className="border border-gray-300 rounded-lg p-8 shadow-lg">
              <img 
              src={items.image}
               className="w-full h-[220px] object-cover" 
             />
             <h1 className="text-lg font-semibold">{items.title}</h1>
             <p className="text-gray-600">{items.price}</p>
           </div>
           ))
        }
       
      </div>
      <button onClick={fetchData} className="bg-violet-600 text-white font-medium px-8 py-2 rounded"> fetch data</button>
    </div>
  )
}

export default App