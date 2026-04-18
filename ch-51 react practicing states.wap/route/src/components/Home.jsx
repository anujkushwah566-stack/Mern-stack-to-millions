




// const Home = ()=>{



      
//     const [type , setType] = useState('password')

//     return(
//         <div>
//              <div className="border border-gary-500 w-[300px] flex items-center p-3 m-12 rounded">
//               <input type={type} className="w-full focus:outline-none" placeholder="Enter password" />
//               {
//                  type == 'password' ?
//                  <i className="fa fa-eye" onClick={()=>setType("text")}></i> 
//                  :
//                   <i className="fa fa-eye-slash" onClick={()=>setType("text")}></i>
//               }
              
             
         
//             </div>
//         </div>
//     )
// }
// export default Home

// import { useState } from "react"
// const Home = ()=>{
//     const [loader , setloader] = useState(false)
    
//     const handleLoader = ()=>{
//         setloader(!loader)
//         setTimeout(()=>{
//             setloader(false)
//         },5000)
//     }

//     return(
//           <div>
//               {
//                 loader &&
//                 <i className="fa fa-spinner fa-spin !text-4xl"></i>
//               }
//              <br />
//              <br />
//             <button className="px-16 py-2 rounded-lg bg-indigo-600 text-white" onClick={handleLoader}>toggle</button>
//           </div>
//     )
// }
// export default Home


// import { useState } from "react"

// const Home = ()=>{
//     const [count ,  setCount] = useState(0)
    
//     const add = ()=>{
//         setCount((c)=> c+1)
//     }
    
//     const sub = ()=>{
//         setCount((c)=> c-1)
//     }

//     return(
//         <div className="p-16">
//             <h1 className="text-6xl font-bold">{count}</h1>
//             <button className="bg-rose-600 text-white px-8 py-2.5 rounded" onClick={add}>Add</button>
//             <button className="ml-4 bg-blue-600 text-white px-8 py-2.5 rounded" onClick={sub}>subtract</button>
//         </div>
//     )
// }

// export default Home

// import { useState } from "react"
// const Home = ()=>{
     
//     const[value , setValue] = useState('')

//     const getvalue =  (e)=>{
//         const input = e.target
//         setValue(input.value)
//     }

//     const show = ()=>{
//         alert(value)
//     }

//     return(
//        <div>
//           <input className="p-3 rounded border" placeholder="Enter text " onChange={getvalue} />
//           <h1 className="text-4xl font-bold">{value}</h1>
//           <button onClick={show} >show</button>
//        </div>
//     )
// }

// export default Home

import { useState } from "react"

const Home = ()=>{
    
    const [fullname , setfullname] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
     
    const handleChange = (e)=>{
        const input = e.target
        const name = input.name
        const value = input.value

        if(name === "fullname") setfullname(value) 
        if(name === "Email id") setEmail(value) 
        if(name === "password") setPassword(value) 
    }

    const signup = (e) =>{
        e.preventDefault()
        const payload = {
        fullname : fullname,
        email : email ,
        password : password
        }
        console.log(payload)
    }
     
    return(
        <div className="bg-gray-100 h-screen flex items-center justify-center">
           <div className="bg-white p-12 rounded w-[450px] shadow-lg space-y"> 
              <h1 className="text-3xl font-semibold"> Register now</h1>
               <form className="flex flex-col gap-6" onSubmit={signup}>
                 <input className="border border-gray-300 rounded p-3"
                         placeholder="Enter name" 
                         name="fullname"
                         onChange={handleChange}/>
                    <small className="text-gary-500">{fullname}</small>

                 <input className="border border-gray-300 rounded p-3"
                         placeholder="Email id" 
                         name="Email id"
                         onChange={handleChange}/>
                    <small className="text-gary-500">{email}</small>

                  <input className="border border-gray-300 rounded p-3"
                         placeholder="password" 
                         name="password"
                         onChange={handleChange}/>
                    <small className="text-gary-500">{password}</small>
                     
                     <button className="bg-green-500 px-8 py-3 text-white rounded hover:bg-indigo-500">Sign Up</button>
               </form>
           </div>
        </div>
    )
}

export default Home