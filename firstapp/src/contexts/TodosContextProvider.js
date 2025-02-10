import { createContext,useState} from "react";

//create context
export let todosContext=createContext()

//create context provider
function TodosContextProvider({children}){

    //state
    let [todos,setTodos]=useState([])
    
    
    
    let addNewTodo=(todo)=>{

        setTodos([...todos,todo])
    }    
    return(
        <todosContext.Provider value={[todos,addNewTodo]}>
            {children}
        </todosContext.Provider>
    );
}
export default TodosContextProvider;