import './components/Example/todo.css';
import { useState } from "react";
import TodoData from './components/Example/TodoData';
import TodoNew from './components/Example/TodoNew';


const App = () => {
  const [listTasks, setListTasks] = useState([]);
  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const addTask = (task) => {
    const newTask = {
      id: randomId(1, 10000),
      name: task
    }
    setListTasks([...listTasks, newTask]);
  }

  return (
    <div className='todo-wrapper'>
      <div className="todo-container">  
        <div className="todo-title">Todo list</div>
        <TodoNew 
          addTask={addTask}
        />
        <TodoData 
          listTasks={listTasks}
        />
      </div>
    </div>
  )
}

export default App;