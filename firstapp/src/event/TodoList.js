import { useContext } from 'react'
import { todosContext } from '../contexts/TodosContextProvider'
import { BiBox } from "react-icons/bi";
function TodoList() {

  
let [todos,addNewTodo]=useContext(todosContext)
  return (
    <div className="text-center">
        <h1>ToDO list</h1>
       {todos?.length==0 && (<p className="display-3 text-warning"><BiBox /></p>)} 
       {
          todos.map((task,idx)=> 
             <h3 key={idx} className="text-primary">
              {task}
              </h3> )
        }
    </div>
  )
}
 
export default TodoList