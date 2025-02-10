import { useState } from "react";
function Eventdemo(){
    //state
    
    let [count,setCounter]=useState(10);


    let incrementCount=()=>{
        setCounter(count+1)
    } 
    let decrementCount=()=>{
        setCounter(count-1)
    }
    
//return react element
    return(
        <div>
            <h1>Counter Demo</h1>
            <button onClick={incrementCount}>+</button>
            <h2>{count}</h2>
            <button onClick={decrementCount}>-</button>
        </div>
        )
}
export default Eventdemo;