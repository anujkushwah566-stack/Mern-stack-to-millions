import axios from "axios"
axios.defaults.baseURL = "http://localhost:8080" // ye server ka url h

const App = ()=>{
  
  const genrate = async (e)=>{
    try{
       e.preventDefault()  // reload nhi hoga ees se
       const form = e.target  
       const result = document.getElementById('result')
       const payload = {
       data:  form[0].value         // ek hi input field to hi aise value lenge
    }
       const {data} = await axios.post("/" , payload)
       result.innerHTML = data.data
    }
    catch(err)
    {
       alert(err ? err.response.data.message : err.message)
    }
  
  }
   
   const reset = ()=>{
    const result = document.getElementById('result')
    const form = document.getElementById('form')
    result.innerHTML = 'Your encrypted string goes here'
    form.reset()
   }
   
  return(
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="bg-white p-8 shadow-lg w-[400px] rounded-xl space-y-6">
        <h1 className="text-2xl font-bold">Bcrypt Genrator</h1>
          <form className="flex flex-col gap-5" onSubmit={genrate} id='form'>
            <input
            required 
             name="data"
             placeholder="Enter string here"
             className="border p-3 rounded border-gray-300" />
             <div className="space-x-3">
               <button className="bg-indigo-600 py-3 text-white rounded w-fit">Genrate</button>
               <button type="button" className="bg-rose-600 py-3 text-white rounded w-fit" onClick={reset}>Reset</button>
             </div>
          </form>
          <div className="bg-green-500 p-3 rounded text-white break-all " id="result">
           Your encrypted string goes here
          </div>
      </div>
    </div>
  )
}
export default App
