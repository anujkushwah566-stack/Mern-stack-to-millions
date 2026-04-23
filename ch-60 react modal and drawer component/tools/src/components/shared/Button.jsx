// export const PrimaryButton = ({children="Primary button", onClick, onMouseOver, name})=>{
//     return (
//         <button onMouseOver={onMouseOver} onClick={onClick} className="bg-blue-500 hover:bg-blue-600 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }

// export const SecondaryButton = ({children})=>{
//     return (
//         <button className="bg-indigo-500 hover:bg-indigo-600 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }

// export const DangerButton = ({children})=>{
//     return (
//         <button className="bg-rose-500 hover:bg-rose-600 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }

// export const WarningButton = ({children})=>{
//     return (
//         <button className="bg-amber-500 hover:bg-amber-600 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }

// export const DarkButton = ({children})=>{
//     return (
//         <button className="bg-zinc-500 hover:bg-zinc-600 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }

// export const SuccessButton = ({children})=>{
//     return (
//         <button className="bg-green-400 hover:bg-green-500 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }

// export const InfoButton = ({children})=>{
//     return (
//         <button className="bg-cyan-500 hover:bg-cyan-600 rounded font-medium text-white px-6 py-2">
//             {children}
//         </button>
//     )
// }
import 'remixicon/fonts/remixicon.css'
const ButtonModel = {
   
        primary : 'bg-blue-500 hover:bg-blue-600 rounded font-medium text-white px-6 py-2',
        secondary : 'bg-indigo-500 hover:bg-indigo-600 rounded font-medium text-white px-6 py-2',
        danger :'bg-rose-500 hover:bg-rose-600 rounded font-medium text-white px-6 py-2',
        warning:'bg-amber-500 hover:bg-amber-600 rounded font-medium text-white px-6 py-2',
        dark:'bg-zinc-500 hover:bg-zinc-600 rounded font-medium text-white px-6 py-2',
        success:'bg-green-400 hover:bg-green-500 rounded font-medium text-white px-6 py-2',
        info:'bg-cyan-500 hover:bg-cyan-600 rounded font-medium text-white px-6 py-2'
    
}

const Button = ({children , type='primary' , onClick , icon}) =>{
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