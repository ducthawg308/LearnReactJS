import reactLogo from '../../assets/react.svg';

const TodoData = (props) => {
  const { listTasks } = props;

  return (
    <div className='todo-data'>
      {listTasks && listTasks.length > 0 ? (
        listTasks.map((task,index) => (
          <div className="todo-item" key={index}>
            <div>{task.name}</div>
            <button>Delete</button>
          </div>
        ))
      ) : (
        <div className="todo-image">
          <img className='logo' src={reactLogo} alt="todo" />
        </div>
      )}
    </div>
  );
}

export default TodoData;
