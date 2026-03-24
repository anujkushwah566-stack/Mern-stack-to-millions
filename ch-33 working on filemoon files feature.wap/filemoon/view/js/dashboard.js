const logout = ()=>{
    localStorage.clear()
    location.href = "/login"
}

//jab dashboard ui interface load ho jyega to ye automatic showUserDetails function ko call krdega
window.onload = ()=>{
    showUserDetails()
}


// jo user login uske details show hoga dashbord par
const showUserDetails = async ()=>{
    const session = await getSession()
    console.log(session) 
    const fullname = document.getElementById("fullname")
    const email = document.getElementById("email")
    fullname.innerHTML = session.fullname
    email.innerHTML = session.email
}

