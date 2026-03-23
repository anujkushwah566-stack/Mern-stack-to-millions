axios.defaults.baseURL = SERVER // axois base url provide karta he

const toast = new Notyf({
    position: {x: 'center' , y: 'top'}
})

// agare user already login he to sign up bhi nhi khulna chaiye
 const checkSession = async ()=>{
    const session   =   await getSession()
    
     if(session)
        location.href = "/dashboard"
 }
 checkSession()

const signup = async (e)=>{
    try{
        e.preventDefault()
        const form = e.target
        const elements = form.elements

        const payload  =  {
            fullname : elements.fullname.value,
            email : elements.email.value,
            mobile : elements.mobile.value,
            password : elements.password.value
        }

        const response = await axios.post("/api/signup", payload)
        form.reset()
        toast.success(response.data.message)
        setTimeout(()=>{
            location.href = "/login"
        } , 2000)
        
    }
    catch(err)
    {
         toast.error(err.response ? err.response.data.message : err.message)
    }
}