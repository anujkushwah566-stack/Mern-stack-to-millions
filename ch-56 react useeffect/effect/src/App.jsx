import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import { useEffect, useState } from 'react';

const App = ()=>{

   const [open , setOpen] = useState(false)
   const [policy , setPolicy] = useState(false)

   useEffect(()=>{
    setTimeout(()=>{
        setOpen(true)
    } , 5000)
     
   } , [])                           // jese hi component render hota wese hi useEffect kam karne lagta he

   useEffect(()=>{
    setTimeout(()=>{
      setPolicy(true)
    } , 10000)
    
   },[])

  return(
    <div className='w-8/12 mx-auto py-16 space-y-8'>
      {  
      open &&
        <div className='flex justify-between  text-lg bg-green-400 py-3 px-4 rounded shadow animate__animated animate__pulse'>
         <div className='flex-gap-2'>
            <strong>Success !</strong>
             Your create opration is successfully performed
          </div>  
         <button onClick={()=>setOpen(false)} className='text-white'>
          <i className='ri-close-circle-fill'></i>
         </button>
      </div>
      } 
      <button className='bg-violet-600 text-white px-8 py-2 rounded font-medium' onClick={()=>setOpen(!open)}>Toggle Message</button>
      <button className='ml-4 bg-violet-600 text-white px-8 py-2 rounded font-medium' onClick={()=>setPolicy(true)}>Open Policy</button>
        {/* policy code */}
        {
          policy &&
                  <div className='animate__faster animate__animated animate__fadeIn fixed w-full h-full bg-zinc-900 top-0 left-0'>
            <div className='bg-white animate__animated animate__bounceIn space-y-4 w-6/12 border border-gray-200 p-8 shadow-xl rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
           <h1 className='text-xl font-semibold'>Privacy Policy</h1>
          <p className='text-gray-600'>
            Lorem. Rem deserunt vitae blanditiis id enim, doloremque illo neque provident quibusdam!voluptatibus.
          </p>
          <button onClick={()=>setPolicy(false)} className='absolute top-3 right-3'>
            <i className='ri-close-circle-fill'></i>
          </button>
          </div>
        
           </div>
        }
        
         
        
      
    </div>
  )
}
export default App