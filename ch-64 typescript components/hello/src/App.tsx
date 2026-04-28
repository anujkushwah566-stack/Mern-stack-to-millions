import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Button from './components/shared/Button';
import Drawer from './components/shared/Drawer';
import Input from './components/shared/Input';
import Modal from './components/shared/Modal';
import { useState } from 'react';

const App = ()=>{
  
   const [open , setOpen] = useState(false)

  return (
    <div className='w-6.12 m-16'>
     

     {/* <Button icon='folder-open-line' onClick={()=>setOpen(true)}>
      Open
     </Button>

    <Drawer open={open} close={()=>setOpen(false)} title='Gaming Content'>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem pariatur nisi, cupiditate adipisci repellat quo aliquid. Officiis sunt, totam voluptatum eius dicta modi neque quidem at, laudantium cupiditate vitae tenetur.
    </Drawer> */}
      
   {/* <Input name="title" placeholder='Enter Title' type='text'/> */}
      <Button onClick={()=>setOpen(true)}></Button>
     <Modal open={open} title='gaming' close={()=>setOpen(false)}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, labore ipsam. Omnis iusto facilis quam. Minus animi ipsam impedit, perferendis aspernatur neque officiis repellat consectetur ab tempora explicabo esse quae.
     </Modal>

    </div>
  )
}

export default App