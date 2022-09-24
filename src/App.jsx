import { useState } from 'react'
import logo from './assets/front.png'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  useToast,
  Button,
  Image
} from '@chakra-ui/react'

function App() {  
  const toast = useToast()

  return (
    <div className="App">
      <div className='flex align-middle justify-center p-10 pb-2'>
        <h1 className='text-3xl md:text-4xl font-bold'>Coming Soon!</h1>
      </div>
      <div className='flex align-middle justify-center p-1'>
        <h2 className='text-sm md:text-1xl'>Streamline your college transfer and graduation process.</h2>        
      </div>

      <div className='grid place-items-center'>
        <Image src={logo}  
          boxSize='500px'
          objectFit='cover'
        />
      </div>

      <div className='fixed bottom-0 left-0 right-0 pl-10 pb-10 pr-10 flex items-baseline'>
        <Input 
          focusBorderColor='blue.400' 
          variant='flushed' 
          placeholder='Enter your Email for Updates!' 
          size='lg'
        />
        <div className='ml-5'>
        <Button
            variant='outline'
            colorScheme='blue'
            onClick={() =>
              toast({
                title: 'You have been added to our newsletter.',
                status: 'info',
                position: 'top',
                variant: 'subtle',
                duration: 3000,
                isClosable: true,
              })
            }
          >
            Submit
        </Button>
        </div>
      </div>
    </div>
  )
}

export default App
