import { useState } from 'react'
import logo from './assets/icon.png'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">

      <Alert status='info'>
        <AlertIcon />
        <AlertTitle>Edvisor is coming soon!</AlertTitle>
        <AlertDescription>Make sure to enter your email for the newletter.</AlertDescription>
      </Alert>

      <img src={logo} className='block mx-auto w-1/4' />

      <div className='p-5'>
        <Input focusBorderColor='blue.400' placeholder='Email' size='lg'/>
      </div>
    </div>
  )
}

export default App
