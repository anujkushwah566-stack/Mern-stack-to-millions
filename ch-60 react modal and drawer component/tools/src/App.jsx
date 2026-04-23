import Button from './components/shared/Button'
import Drawer from './components/shared/Drawer'
import Card from './components/shared/Card'
import Modal from './components/shared/Modal'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'
import 'animate.css'
  
// button component code
// const App = () =>{
//   return(
//     <div className='p-16 space-x-8'>
//        <Button type="primary" onClick={()=>(alert())} icon='bank-line' >Register Now </Button>
//        <Button type="secondary">Register Now </Button>
//        <Button type="danger">Register Now </Button>
//        <Button type="warning">Register Now </Button>
//        <Button type="dark">Register Now </Button>
//        <Button type="success">Register Now </Button>
//        <Button type="info">Register Now </Button>
//        <Button icon='login-circle-line'>Login </Button>
       
//     </div>
    
//   )
// }

// Card component
// const App = () =>{
//   return(
//     <div className='p-16 space-x-8 grid grid-cols-2'>
//       <Card
//       title="Dashboard"
//       footer={
//         <Button onClick={()=> alert()} icon="edit-box-line"  type='info'>Edit </Button>
//       }
//       >
//         Lorem ipsumionem velit commodi facere recusandae asperiores? Nisi iste debitis non aliquid tempore facilis asperiores?
//       </Card> 


//       <Card title='Introduction' footer={<Button onClick={()=> alert()} icon="unpin-fill"  type='danger'>save </Button>}> 
//         My Name is Anuj
//       </Card>
     
//     </div>
   
    
//   )
// }

// Drawer component
// const App = () =>{
//   const [open , setOpen] = useState(false)
//   return(
//     <div className='p-16' >
//       <Button
//       onClick={()=>setOpen(true)} type='secondary' icon="mail-open-fill">Toggle</Button>
      
//        <Drawer 
//         close={()=>setOpen(false)}
//        open={open} title="Register Now">This my Drawer for register!

//        </Drawer>
//     </div>
   
    
//   )
// }



const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <img src="/demo.jpg" width="100%" />
      <Button onClick={()=>setOpen(true)}>Toggle</Button>
      <Modal title='Terms and Condition ' close={()=>setOpen(false)} open={open} />
    </div>
  )
}


export default App