// - sabse pehle state banayenge propert jis name se input he uss nam se
// - ek  funnction bana na  or usko call karna in put me onchnage
// - 

import {  useState } from "react"

const Home = ()=>{
    const [signupForm , setSignupForm] = useState({
        fullname:'',
        Email :'',        // input me jo name nam se property he ussi nam pe rakha he
        password:''
    })
     
    const handleSignUpForm = (e)=>{
        const input = e.target
        const name = input.name
        const value = input.value
        setSignupForm({
            ...signupForm, // jo purana data he usko rok ne k liye he
            [name] : value
        })
    }
    
    const signup = (e)=>{
     e.preventDefault()
     console.log(signupForm)
    }
     
    return(
        <div className="bg-gray-100 h-screen flex items-center justify-center">
           <div className="bg-white p-12 rounded w-[450px] shadow-lg space-y"> 
              <h1 className="text-3xl font-semibold"> Register now</h1>
               <form className="flex flex-col gap-6" onSubmit={signup}>
                 <input className="border border-gray-300 rounded p-3"
                         placeholder="Enter name" 
                         name="fullname"
                        onChange={handleSignUpForm}/>
                  

                 <input className="border border-gray-300 rounded p-3"
                         placeholder="Email id" 
                         name="Email"
                        onChange={handleSignUpForm}/>
                    

                  <input className="border border-gray-300 rounded p-3"
                         placeholder="password" 
                         name="password"
                        onChange={handleSignUpForm}/>
                    
                     
                     <button className="bg-green-500 px-8 py-3 text-white rounded hover:bg-indigo-500">Sign Up</button>
               </form>
               {
                JSON.stringify(signupForm)
               }
           </div>
        </div>
    )
}

export default Home