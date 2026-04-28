import React from 'react'
import Card from './components/shared/Card'
import Button from './components/shared/Button'
import Form from './components/shared/Form'
import Input from './components/shared/Input'

const App = () => {
  const signup = (value)=>{
    console.log(value)
  }
  
  return (
    <div className='bg-gray-300 flex items-center justify-center h-screen'>
      <div className='w-4/12'>
        <Card title='Register now'>
            <Form onValue={signup}>
              <div className='space-y-6 mt-4'>
                <Input 
                  name="firstname"
                  placeholder="Firstname"
                />

                <Input 
                  name="lastname"
                  placeholder="Lastname"
                />

                <Input 
                  name="email"
                  placeholder="Email id"
                  type="email"
                />

                <Input 
                  name="password"
                  placeholder="Password"
                  type="password"
                />

                <Button type='danger' icon="arrow-right-up-line">Sign up</Button>
              </div>
            </Form>
        </Card>
      </div>
    </div>
  )
}

export default App

// import React from 'react'

// const App = () => {
//   let x = "saurav"
//   x = 123

//   return (
//     <div>{x}</div>
//   )
// }

// export default App