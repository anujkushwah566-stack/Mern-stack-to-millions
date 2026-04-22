import React from 'react'
import { DangerButton, DarkButton, InfoButton, PrimaryButton, SecondaryButton, SuccessButton, WarningButton } from './components/shared/Button'

const App = () => {
  return (
    <div className='p-16 space-x-8'>
      <PrimaryButton onClick={()=>alert()} name="saurav">Register now</PrimaryButton>
      <SecondaryButton >Contact us</SecondaryButton>
      <DangerButton>Signin</DangerButton>
      <WarningButton>Hurry up!</WarningButton>
      <DarkButton>Enroll now</DarkButton>
      <SuccessButton>Limited seats</SuccessButton>
      <InfoButton name={()=>alert()}> Hi user !</InfoButton>
      <PrimaryButton />
    </div>
  )
}

export default App