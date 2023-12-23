import React, { useState } from 'react'
import Buttons from './Buttons';

function Calculator(props) {
    console.log(props);
    const[input,setInput]=useState("")
    const[result, setResult] = useState("")
    // function to handle all input values from users
    const handleInput= (value) =>{
        setInput(prev=>prev+value)
    }
    const CalculateRseult = () =>{
        try{
            setResult(eval(input))
        }catch{
            setResult("Error")
        }
        
    }

    const ClearInput = () => {
        setInput("")
        setResult("")
    }
    const deleteLast = () => {
        setInput(input.slice(0,-1))
    }
  return (
    <div className='calculator'>
        <div className='input'>
            <h6>Input</h6>
            <input type="text" placeholder='0' readOnly value={input} />
            <h6>Result</h6>
            <input type="text" placeholder='0' value={result}/>
        </div>
        <div className='buttons'>
            <button onClick={ClearInput}>AC</button>
            <button onClick={deleteLast}>DEL</button>
            <Buttons handleInput = {handleInput} value={"+"}/>
            <Buttons handleInput = {handleInput} value={"-"}/>
            <Buttons handleInput = {handleInput} value={"7"}/>
            <Buttons handleInput = {handleInput} value={"8"}/>
            <Buttons handleInput = {handleInput} value={"9"}/>
            <Buttons handleInput = {handleInput} value={"/"}/>
            <Buttons handleInput = {handleInput} value={"4"}/>
            <Buttons handleInput = {handleInput} value={"5"}/>
            <Buttons handleInput = {handleInput} value={"6"}/>
            <Buttons handleInput = {handleInput} value={"*"}/>
            <Buttons handleInput = {handleInput} value={"1"}/>
            <Buttons handleInput = {handleInput} value={"2"}/>
            <Buttons handleInput = {handleInput} value={"3"}/>
            <Buttons handleInput = {handleInput} value={"."}/>
            <Buttons handleInput = {handleInput} value={"0"}/>
            <button onClick={CalculateRseult}style={{gridColumn:"span 3"}}>=</button>
        </div>
    </div>
  )
}

export default Calculator