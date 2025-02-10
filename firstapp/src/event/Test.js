import { useState } from "react";
function Test(){
let [condition,setCondition]=useState(true)
let [name,setName]=useState("Preeth")
let ChangeCondition=()=>{
    setCondition(!condition)
}
    return(
        <div>
        <h1>Demo of rendering</h1>
        <button className="btn btn-warning" onClick={ChangeCondition}>{condition==true ? ("Give send off") :( "Give a wish")}</button>
         {condition==true ? (
         <h2 className="text-info">Hello</h2>
         ) :( 
         <h2 className="text-info">Good bye</h2>
         )}
         
        {condition==true ? <h2>{name}</h2> : <input type="text" value={name}/>}
            <button className="btn btn-success" onClick={ChangeCondition}>Edit</button>


         </div>
    );
}
export default Test;