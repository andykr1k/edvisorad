import { useState } from 'react'
import logo from './assets/front.png'
import bg from './assets/bg.png'
import { db } from './config/Firebase'
import { collection, addDoc } from "firebase/firestore"; 

import {
  Input,
  useToast,
  Button,
  Image
} from '@chakra-ui/react'

function App() {
  const toast = useToast()
  var [Email, setEmail] = useState(false)

  const writeContactData = async(e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactUs"), {
        email: Email,
      });
      console.log("Document written with ID: " + Name );
    } catch (e) {
      console.error("Error adding document: " + Name, e);
    }

    Email = '';
  }
  return (
    <div>
      <div className='fixed z-1 bg-transparent min-h-screen min-w-full'>
        <div className='flex align-middle justify-center p-10 pb-2'>
          <h1 className='text-3xl md:text-4xl font-bold text-white'>Coming Soon!</h1>
        </div>
        <div className='flex align-middle justify-center p-1'>
          <h2 className='text-sm md:text-1xl text-white'>Streamline your college transfer and graduation process.</h2>
        </div>
        <div className='grid place-items-center pt-10 md:hidden'>
          <Image src={logo}
            boxSize='500px'
            objectFit='cover'
            className='bg-none'
          />
        </div>
        <div className='place-items-center pt-10 hidden md:grid'>
          <Image src={logo}
            boxSize='600px'
            objectFit='cover'
            className='bg-none'
          />
        </div>
      </div>
    <div className='min-h-screen min-w-full z-0'>
      <img src={bg} className='min-h-screen min-w-full'/>
    </div>
      <div className='fixed z-1 bottom-0 left-0 right-0 pl-10 pb-10 pr-10 flex items-baseline bg-transparent'>
          <Input
            focusBorderColor='blue.400'
            variant='flushed'
            placeholder='Enter your Email for Updates!'
            size='md'
            color='white'
            onChange={ (e) => setEmail(e.target.value) }
          />
        <div className='ml-5'>
        <form onSubmit={writeContactData}>
          <Button
              type="submit"
              variant='outline'
              colorScheme='whiteAlpha'
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
