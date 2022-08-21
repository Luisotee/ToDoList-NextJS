import React, { useState } from "react"
import "../components/card"
import Card from "../components/card"
import { v4 as uuidv4 } from 'uuid'

export default function Home() {
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])

  function handleAddTask(e) {
    e.preventDefault()
    let newTask = {
      id: uuidv4(),
      todo: e.target.inputTodo.value,
      time: new Date().toLocaleTimeString("pt-br", {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    setTask(newTask)

    setTasks(prevState => [...prevState, newTask])
  }

  return (
    <div className="container">
      <header className="display-2 text-center">To-Do List</header>
      <form className="input-group mt-5" onSubmit={handleAddTask}>
        <input type="text" className="form-control" placeholder="Type task" name="inputTodo"></input>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        {console.log(task.id) }
        {
          tasks.map(task =>
            <Card
              key={task.id}
              todo={task.todo}
              time={task.time} />
          )}
      </div>
    </div>
  )
}
