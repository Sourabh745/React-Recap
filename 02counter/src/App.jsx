import { useState } from 'react'
import './App.css'
function App() {

  const [counter, setCounter] = useState(0)
  // const [ variable, function ] = useState() remember it
  
  //adding value using arrow function
  const addValue = () => {
    //you can use callback to avoid batch and it is depending on  the  prev counter so its not the same 
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
  }

  //removing value  using function
   const removeValue = () => {
    setCounter( counter - 1)
  }
  return (
    <>
      <h1>React with me {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addValue}> Add value </button>{" "}
      <button onClick = {removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

// state is mainly designed for UI to monitor changes , when any change happen in the state is it will re-rendered the web page 

// const addValue = () => {
//   setCounter(counter + 1)
//   setCounter(counter + 2)
//   setCounter(counter + 3)
//   // here use the concept of batching like it first collect all method in the function then going to execute them , but here it see 1 one method is call multiple time so just calling last one to save memory fast execution
// }