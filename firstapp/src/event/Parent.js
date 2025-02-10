import Child from "./Child";
import { useState } from "react";
function Parent(){
    let [dataFromChild,setDataFromChild]=useState("")
    let parentData="This data from Parent"
    
    let getDataFromChild=(data)=>{
        setDataFromChild(data)
    }



    return(
        <div>
            <h2>Parent</h2>
            <h2>{dataFromChild}</h2>
            <Child parentData={parentData} getDataFromChild={getDataFromChild}/>
        </div>
    )
}
export default Parent;