import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { todosContext } from '../contexts/TodosContextProvider'
function AddtoDo() {

let [todos,addNewTodo]=useContext(todosContext)

let {register,handleSubmit,formState:{errors}}=useForm()


let formSubmit=(todoObj)=>{ // todoObj=>{newTodo:""}
    console.log(todoObj)
    addNewTodo(todoObj.newTodo)
}
  return (
    <div>
        <h1>AddToDo</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
            <div className="mb-3">
                <label htmlFor="todo">Enter New Task</label>
                <input type="text"  id="todo" className="form-control" {...register("newTodo")}/>
            </div>
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    </div>
  )
}

export default AddtoDo
