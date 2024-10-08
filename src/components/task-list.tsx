import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './task';
import { useSelector } from 'react-redux';


const TaskList = () => {
  const { tasks } = useContext(ApplicationContext);

  const allTasks = useSelector((state:{tasks:{
    entities:Task[]
  }}) => state?.tasks?.entities )

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
