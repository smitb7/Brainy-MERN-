import { useState } from 'react'
import './App.css'
// import { Input } from 'postcss'

function App() {
    
      // our input state 
      const [input, setInput] = useState("")

      // to get the value from the user input
      const handleChange =(input)=>{
        setInput(input.target.value)
      }

  return (
    <>

        <label htmlFor=""> Text Input :  </label>
        <input 
        type="password"
        value={input}
        onChange={handleChange}
        style={{padding:"5px",width:"500px" }} />
        

        
        <p style={{fontSize: "18px"}}>
          
          and the Password is : {input} 

        </p>

      <p></p>
    </>
  )
}

export default App
