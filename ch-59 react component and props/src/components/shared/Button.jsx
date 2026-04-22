export const PrimaryButton = ({children="Primary button", onClick, onMouseOver, name})=>{
    return (
        <button onMouseOver={onMouseOver} onClick={onClick} className="bg-blue-500 hover:bg-blue-600 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}

export const SecondaryButton = ({children} , onClick)=>{
    return (
        <button  className="bg-indigo-500 hover:bg-indigo-600 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}

export const DangerButton = ({children})=>{
    return (
        <button className="bg-rose-500 hover:bg-rose-600 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}

export const WarningButton = ({children})=>{
    return (
        <button className="bg-amber-500 hover:bg-amber-600 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}

export const DarkButton = ({children})=>{
    return (
        <button className="bg-zinc-500 hover:bg-zinc-600 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}

export const SuccessButton = ({children})=>{
    return (
        <button className="bg-green-400 hover:bg-green-500 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}

export const InfoButton = ({children , name} )=>{
    return (
        <button onClick={name} className="bg-cyan-500 hover:bg-cyan-600 rounded font-medium text-white px-6 py-2">
            {children}
        </button>
    )
}