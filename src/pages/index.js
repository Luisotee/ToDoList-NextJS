import React, { useState } from "react"
import "../components/card"
import Card from "../components/card"

export default function Home() {
  const [task, setTask] = useState([])
  const [tasks, setTasks] = useState([])

  function handleAddTask(e) {
    e.preventDefault()
    let newTask = {
      id: 0,
      todo: 'coisas'
    }
    setTask(newTask)

    setTasks(prevState => [...prevState, task])
  }

  return (
    <div className="container">
      <header className="display-2 text-center">To-Do List</header>
      <form className="input-group mt-5" onSubmit={handleAddTask}>
        <input type="text" className="form-control" placeholder="Type task"></input>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        {console.log(task)}
        {
          tasks.map(task =>
            <Card
              key={task.id}
              todo={task.todo} />
          )}
      </div>
    </div>
  )
}
