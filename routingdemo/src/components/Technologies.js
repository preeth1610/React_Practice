import React from 'react'
import { Outlet,useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Technologies() {
  let param=useParams();
  return (
    <div>
       <p className="display-2 text-center">Technologies</p>
       <h1>Parameter is {param.id}</h1>
       <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link" to="React">ReactJs</Link>
  </li>
    <li className="nav-item">

    <Link className="nav-link" to="angular">Angular</Link>
    </li>
    <li className="nav-item">

    <Link className="nav-link" to="vue">Vue</Link>
    </li>
</ul>
    <Outlet />
    </div>
  )
}

export default Technologies