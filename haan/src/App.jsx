import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Components/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Forms/>
    </div>
  )
}

export default App
