import { useState } from "react"
// form waLA LECTURE OR STYLE KESE USE KARE VO REVISE KARA EES LECTURE ME
const App = () => {
  
   const [form , setForm] = useState({
    email:'',
    password:'',
    fullname:''
   }) 

   const formHandler = (e)=>{
     const input = e.target 
     const name = input.name 
     const value = input.value 
   
     setForm({
      ...form,
      [name] : value
     })
   }
  
   // reusing input design
   const inputDesign = {
    border: '1px soldi #ccc',
    padding: 16,
    borderRadius : 8
   }
   
   const login = (e)=>{
   e.preventDefault()
   console.log(form)
   }
   

  return (
    <div style={{
      width: '60%',
      background:'#ddd',
      borderRadius: 24,
      padding : 24
    }}>
       <form style={{
        display: 'flex',
        flexDirection:'column',
        gap: 16
       }} onSubmit={login}>

        <input style={inputDesign}
         placeholder="email"
          name="email" 
          onChange={formHandler} />

        <input style={inputDesign}
         placeholder="password"
          name="password"
           onChange={formHandler} />

        <input style={inputDesign}
         placeholder="fullname"
          name="fullname"
           onChange={formHandler} />

        <button>login</button>

       </form>
  
    </div>
    
  )
}

export default App