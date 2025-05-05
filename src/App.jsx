import { useState } from 'react'

import './App.css'
import ColorSelector from './ColorSelector'
import ColorBox from './ColorBox'

function App() {

  const [color, setColor] = useState('blue')

 
  return (
    <>
    <div id="main">
      <ColorSelector setColor={setColor}/>
      <ColorBox color={color}/>
    </div>
    
    </>
  )
}

export default App
