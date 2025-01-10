import reactLogo from '../../assets/react.svg';

const TodoData = (props) => {
  const { listTasks } = props;

  return (
    <div className='todo-data'>
      {listTasks.map((task,index) => (
        <div className="todo-item" key={index}>
          <div>{task.name}</div>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoData;