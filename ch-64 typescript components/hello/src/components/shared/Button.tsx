import 'remixicon/fonts/remixicon.css'
import {  FC } from 'react'

const ButtonModel = {
   
        primary : 'bg-blue-500 hover:bg-blue-600 rounded font-medium text-white px-6 py-2',
        secondary : 'bg-indigo-500 hover:bg-indigo-600 rounded font-medium text-white px-6 py-2',
        danger :'bg-rose-500 hover:bg-rose-600 rounded font-medium text-white px-6 py-2',
        warning:'bg-amber-500 hover:bg-amber-600 rounded font-medium text-white px-6 py-2',
        dark:'bg-zinc-500 hover:bg-zinc-600 rounded font-medium text-white px-6 py-2',
        success:'bg-green-400 hover:bg-green-500 rounded font-medium text-white px-6 py-2',
        info:'bg-cyan-500 hover:bg-cyan-600 rounded font-medium text-white px-6 py-2'
    
}

interface ButtonInterface {
    children?: string
    type?: "primary" | "secondary" | "danger" | "warning" | "dark" | "success" | "info"
    onClick? : ()=>void // mtlb function de hoga
    icon?: string
}

const Button: FC<ButtonInterface> = ({children="Submit" , type='primary' , onClick , icon}) =>{
    return(
        <button onClick={onClick} className={ButtonModel[type]}>
            {
                icon
                 &&
                 <i className={`ri-${icon} mr-1`}></i>
            } 
            {children}
        </button>
    )
}
export default Button