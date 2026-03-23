// user ko verify karne ka code
const getSession = async () => {
  try {
    const session = localStorage.getItem('authToken')

    // kya token nhi he
    if (!session) {
      return null
    }

    const payload = {
      token: session
    }

    const { data } = await axios.post('http://localhost:8080/token/verify', payload )
     return data
  } 
  catch(err)
  {
       return null
  }
}


// logout ka code
const logout = ()=>{
  localStorage.clear()
  location.href = '../index.html'
}