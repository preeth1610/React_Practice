import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  let navigate=useNavigate();
  let gotoTech=()=>{
    navigate("/technologies/100")
  }
  return (
    <div className="Text-center">
      <p className="display-2 text-center">Home</p>
      <button className="btn btn-primary" onClick={gotoTech}>Go to button</button>
    </div>
  )
}

export default Home