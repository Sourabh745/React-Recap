import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  // function changeColor(color) {
  //   color = setColor(color)
  // }

  return (
    <>
      <h1 className='bg-lime-600 justify-self-center text-2xl py-2'>Background changer</h1>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex - flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            
            <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor: "blue"}}  
              >Blue</button>
            <button onClick={() => setColor('Yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor: "yellow"}}  
              >Yellow</button>
            <button onClick={() => setColor('Green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor: "green"}}  
              >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
