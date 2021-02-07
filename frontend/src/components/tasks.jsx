import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import { AuthContext } from '../contexts/auth';
import TasksService from '../services/tasks';


const Tasks = () => {
  // context
  const { auth } = useContext(AuthContext)

  // params
  const { idList } = useParams()

  // events
  const [tasks, setTasks] = useState([])

  // effects
  useEffect(() => {
    TasksService.list(auth.token, idList)
      .then(suc => {
        setTasks(suc.tasks)
      })
  }, [])

  // render
  return (
    <div className="container">
      <div className="row">
        <ul className="col-8 list-group">
          {tasks.map(task => <TaskItem key={task.id_task} idTask={task.id_task} completed={task.completed} description={task.description} />)}
        </ul>
      </div>
    </div>
  )
}

const TaskItem = ({ idTask, completed, description }) => {
  console.log(completed)
  //render
  return (
    <li className={"list-group-item " + (completed ? "disabled" : "")} style={completed ? { textDecoration: "Line-Through" } : {}}>{description}</li>
  )

}


export default Tasks