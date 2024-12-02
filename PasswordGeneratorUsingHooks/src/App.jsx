import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //===============================================================
// using useCallback()
  const generatePassword = useCallback(() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // string consist of alphabets
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()_+"
    }
    // using for loop to create pass after checking Num and char 
    for(let i=0; i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1) // return random number 
      pass += str.charAt(char) 
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed]) // so as long as these dependencies don't change to frequesntly
//=============================================================================

  //useEffect 
  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])// as soon as these change it re-rendeer the page
//=========================================================================

//copy password to clipboard
const copyPassword = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
}
// ===================================================================

// useRef hook 
const passwordRef = useRef(null)

//====================================================================
  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password}
      className='outline-noone w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPassword} 
      className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        name=''
        id=''
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked = {numberAllowed}
        onChange={() => {
          setNumberAllowed( (prev) => !prev  ) // Reactjs could react when user is clicking continuosly on checkbox 
        }}
        name=''
        id=''
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
        defaultChecked = {charAllowed}
        onChange={() => {
          setCharAllowed( (prev) => !prev  ) // Reactjs could react when user is clicking continuosly on checkbox mainly it reversing the value
        }}
        name=''
        id=''
        />
        <label htmlFor="character">Characters</label>
      </div>
    </div>
   </div>
  )
}

export default App
