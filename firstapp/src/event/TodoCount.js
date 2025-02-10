import { useContext } from 'react'
import { todosContext } from '../contexts/TodosContextProvider'
function TodoCount() {

  let [todos,addNewTodo]=useContext(todosContext)
  return (
    <div className="text-center">
        <h1>ToDo count</h1>
        <p className="display-3 text-danger ">{todos.length}</p>
    </div>
  );
}

export default TodoCount;