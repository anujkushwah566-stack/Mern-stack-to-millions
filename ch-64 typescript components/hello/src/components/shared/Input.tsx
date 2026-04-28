import { FC } from 'react'

interface InputIntefcae {
  name : string
  placeholder? : string
  type? : string
}

const Input: FC<InputIntefcae> = ({name, placeholder, type="text"}) => {
  return (
    <input 
        className='border border-gray-300 rounded px-3 py-2 w-full'
        placeholder={placeholder}
        name={name}
        type={type}
    />
  )
}

export default Input