import { useState,useEffect } from "react";
function FetchData(){

    let [counter,setCounter]=useState(100)
    useEffect(()=>{
        console.log("USe Effect executed")
    },[])
    let modifyCounter=()=>{
        setCounter(counter+1)
    }
    return(
        <div>
            <h2>Fetch Data</h2>
            <h3>{counter}</h3>
            <button onClick={modifyCounter}>click</button>
        </div>
    )
}
export default FetchData;