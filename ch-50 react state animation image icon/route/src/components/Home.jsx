import { useState } from "react"


const Home = ()=>{
      
    const [show , setShow] = useState(true)

    return(
        <div>
            <h1>Home</h1>
            {
                show &&
                <img src="/public/images/download.jpeg"  />
            }
            <button onClick={()=>setShow(!show)}>toggle</button>
        </div>
    )
}
export default Home