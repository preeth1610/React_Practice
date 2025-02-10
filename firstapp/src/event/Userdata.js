import { useState } from "react";
function Userdata(){
    //state
    let [user,setUser]=useState({name:"Preeth",age:19,city:"Hyderabad"})

    let changeUser=()=>{
        setUser({...user,name:"Rishab"})
    }
    return(
     <div>
        <h2>Name - {user.name} </h2>
        <h2>Age - {user.age}</h2>
        <h2>City - {user.city}</h2>
        <button onClick={changeUser}>Change user</button>
        
        </div>
    
    )
    
}
export default Userdata;