import React, { useState } from "react"
import "../components/table"
import Table from "../components/table"
import { v4 as uuidv4 } from 'uuid'

export default function Home() {
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])
  const [todo, setTodo] = useState('')

  function handleAddTask(e) {
    e.preventDefault()
    let newTask = {
      id: uuidv4(),
      todo: todo,
      status: 'In progress', //Provisório
      time: new Date().toLocaleTimeString("pt-br", {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    setTask(newTask)
    setTasks(prevState => [...prevState, newTask])
    setTodo('')
  }

  return (
    <div className="container">
      <div className="mt-5 card rounded-3 p-5 align-items-center">
        <header className="display-3">To-Do List</header>
        <form className="input-group mt-5" onSubmit={handleAddTask}>
          <input type="text" className="form-control" value={todo} placeholder="Type task" onChange={e => setTodo(e.target.value)}></input>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
        <div className="mt-5">
          {
            tasks.map(task =>
              <Table
                key={task.id}
                todo={task.todo}
                status={task.status}
                time={task.time} />
            )}
        </div>
      </div>
    </div>
  )
}
