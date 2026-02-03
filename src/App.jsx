import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'

function App() {

  const handler = () => console.log('fourth example')
   return ( 
      <button onClick={ () => console.log('clicked') }> 
  Click me
</button>
   )

}

export default App
