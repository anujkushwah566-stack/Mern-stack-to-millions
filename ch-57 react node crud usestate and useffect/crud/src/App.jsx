import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import moment from 'moment'
import { use, useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080' // server wala port

// jab bhi http request karo axios se exptional handling jarrur karna he
// jab bhi server se data ayega na uske liye state handle karte he

const App = ()=>{
  
  const [update  , setUpdate] = useState(0)
  const [products , setProducts] = useState([])
  const [open , setOpen] = useState(false)
  const productFormModel = {
     title:'',
    price:'',
    discount:""
  }
  const [productform , setproductform] = useState(productFormModel)

  useEffect( ()=>{
     fetchProduct()
  },[update])   // ees dependenci array ke constant me jab bhi badlav hoga na to useffect ka code wapa se chal jyega

  const fetchProduct = async ()=>{
     try{
          const {data} = await axios.get('product')
          setProducts(data)
          console.log(data)
     }
     catch(err)
     {
       console.log(err)
     }
  }
   
  const  handleProductForm = (e) =>{
       const input  = e.target
       const name = input.name 
       const value = input.value 
       setproductform({
        ...productform,
        [name] : value
       })
  }

  const createProduct = async (e)=>{
   
     try{
          e.preventDefault()
          const {data} = await axios.post("/product" , productform)
          console.log(data)
          setOpen(false)
          setUpdate(update + 1)
          setproductform(productFormModel) // form reset
     }
     catch(err)
     {
        console.log(err)
     }


  }

  const deletProduct = async (id)=>{

    try
    {
        alert(id)
      const {data} = await axios.delete(`/product/${id}`)
      console.log(data)
      setUpdate(update + 1)
    }
    catch(err)
    {
       console.log(err)
    }  
   
  }

  const getAmount = (items)=>{
    const discount =  (items.price*items.discount)/100
    return items.price-discount
  }
   
  const editProduct = (items)=>{
  alert(items._id)
  }

  return(
    <div className='bg-gray-200 h-screen flex-items-end overflow-hidden'>
      <div className='overflow-auto space-y-8 py-8 bg-white w-8/12 mx-auto h-[80%] rounded-t-4xl border-t border-t-32 border-t-rose-600 shadow-xl animate__animated animate__slideInUp'>
       <h1 className='text-4xl font-bold text-center border-b border-b-gray-200 pb-8'>Product Crud</h1>
        <div className='flex justify-end'>
             <button onClick={()=>setOpen(true)} className='bg-violet-600 text-white px-6 py-2 rounded hover:bg-rose-600'>
              <i className='ri-add-line'></i>
               New Product
             </button>
        </div>

         <table className='w-full'>
          <tr className='bg-rose-600 text-left text-white'>
            <th className='py-3 pl-4'>Product</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>

          {
            products.map((items , index)=>(
               <tr key={index} className='border-b border-b-gray-200 text-zinc-500'>
            <td className='py-3 pl-4 capitalize'>{items.title}</td>
            <td>₹{items.price}</td>
            <td>{items.discount}%</td>
            <td>{getAmount(items)}</td>
            <td>{moment(items.createdAt).format('MMM DD YYYY, hh:mm A')}</td>
            <td>
              <div className='space-x-3'>
                <button onClick={()=>editProduct(items._id)} className='bg-green-100 text-green-600 w-8 h-8 rounded hover:bg-green-400 hover:text-white'>
                  <i className='ri-edit-line '></i>
                </button>
                <button onClick={()=>deletProduct(items._id)} className='bg-rose-100 text-rose-600 w-8 h-8 rounded hover:bg-rose-400 hover:text-white'>
                  <i className='ri-delete-bin-2-line '></i>
                </button>
              </div>
            </td>
          </tr>
            ))
          }
         
         </table>
            
            {
              open &&
                      <div className='space-y-4 animate__animated animate__zoomIn animate__faster p-5 w-1/2 p-8 rounded-xl fixed top-1/2 left-1/2 bg-white border border-gray-200 transform -translate-x-1/2 -trans;late-y-1/2 shadow-xl'>
            <h1 className='text-lg font-semibold'>Add a new product</h1>
           
              <form onSubmit={createProduct} className='flex flex-col gap-5' >
                <input 
                onChange={handleProductForm}
                name='title'
                placeholder='Enter a product name'
                className='border border-gray-200 px-3 py-2 rounded '
                required
                value={productform.title}  // default value bhi set kar sakte he or form bhi reset kar sakte he
                 /> 
                
                <input 
                onChange={handleProductForm}
                name='price'
                type='number'
                placeholder='Enter a product price'
                className='border border-gray-200 px-3 py-2 rounded '
                required
                value={productform.price}
                 />

                 <input 
                 onChange={handleProductForm}
                name='discount'
                type='number'
                placeholder='Enter a product discount'
                className='border border-gray-200 px-3 py-2 rounded '
                required
                value={productform.discount}
                 />

                 <button className='bg-indigo-600 text-white rounded py-2 px-8 w-fit font-medium hover:bg-blue-500'>
                  Create
                 </button>

              </form>
             <button onClick={()=>setOpen(false)} className='absolute top-3 right-3'>
              <i className='ri-close-circle-fill'></i>
             </button>
                      </div>
            }
        
        

      </div>
    </div>
  )
}

export default App