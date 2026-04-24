interface codeInterface {
  code: number
}

interface studentinterface extends codeInterface {
   name : string
   roll : number
   subject? : string
   status?: "success" | "Maths" | "progress"
}

const App  = () =>{

   const student: studentinterface   = {
    name : "Anuj",
    roll : 556 , 
    subject : 'Maths',
     code: 444
   }
   
   console.log(student)
  return(
  <div>
    App 
  </div>
  )
} 
export  default App