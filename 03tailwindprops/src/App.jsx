import { useState } from 'react'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Vite with Tailwind</h1>
      <Card name="Byanku"/>
      <Card name="Anand" post='America'/>
      <Card />
      <Card />
    </>
  )
}

export default App
