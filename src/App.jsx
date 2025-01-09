import './components/Example/todo.css';
import TodoData from './components/Example/TodoData';
import TodoNew from './components/Example/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
  return (
    <div className='todo-wrapper'>
      <div className="todo-container">  
        <div className="todo-title">Todo list</div>
        <TodoNew />
        <TodoData />
        <div className="todo-image">
          <img className='logo' src={reactLogo} alt="todo" />
        </div>
      </div>
    </div>
  )
}

export default App;