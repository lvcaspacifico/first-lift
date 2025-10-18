import { useState } from 'react'
import { IndexRoutes } from './routes/IndexRoutes'

function App() {
  const [count, setCount] = useState(0)

  return ( 
     <IndexRoutes/> 
  )
}

export default App
