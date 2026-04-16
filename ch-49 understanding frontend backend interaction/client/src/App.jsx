const env = import.meta.env
import axios from 'axios'
import { useState } from 'react'
axios.defaults.baseURL = env.VITE_SERVER

const App = ()=>{
   const [message , setMessage] = useState("your enccrypted string goes here")
  const generate = async (e)=>{
    try {
      e.preventDefault()
      const form = e.target

      const payload = {
        data: form[0].value
      }
      const {data} = await axios.post("/", payload)
      setMessage(data.data)
    }
    catch(err)
    {
      alert(err.response ? err.response.data.message : err.message)
    }
  }

  const reset = ()=>{
    const form = document.getElementById("form")
   setMessage("your enccrypted string goes here")
    form.reset()
  }

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="bg-white p-8 shadow-lg w-[400px] rounded-xl space-y-6">
        <h1 className="text-2xl font-bold">Bcrypt Generator</h1>
        <form className="flex flex-col gap-5" onSubmit={generate} id="form">
          <input 
            required
            name="data"
            placeholder="Enter string here" 
            className="border p-3 rounded border-gray-300" 
          />
          <div className='space-x-3'>
            <button className="bg-indigo-600 py-3 px-6 text-white rounded w-fit">Generate</button>
            <button type="button" className="bg-rose-600 py-3 px-6 text-white rounded w-fit" onClick={reset}>Reset</button>
          </div>
        </form>
        <div className="bg-green-500 p-3 rounded text-white break-all" >
            {message}
        </div>
      </div>
    </div>
  )
}

export default App