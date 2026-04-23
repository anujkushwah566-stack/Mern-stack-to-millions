const Card = ({children , title , footer}) =>{
    return(
     <div className='shadow-lg p-8 rounded-lg border-gray-100'>
        <h1 className='text-lg font semi-bold'>{title}</h1>
        <div>
          {children}
        </div>
        {
            footer &&
            <div className="mt-4">
                {footer}
            </div>
        }
    </div>
    )
}

export default Card