import "./App.css";
import AddtoDo from "./event/AddtoDo";
import TodoCount from "./event/TodoCount";
import TodoList from "./event/TodoList";

function App() {

  
  return (
    <><div className="container">

      <div className="row">

        <div className="col-sm-4 text-info ">
          <AddtoDo />
        </div>
        <div className="col-sm-4 text-info">
          <TodoList />
        </div>
        <div className="col-sm-4 text-info">
          <TodoCount />
        </div>
      </div>    
     </div></>
  );
}

export default App;


