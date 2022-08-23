import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState('');

  function handleAddTask(e) {
    e.preventDefault();
    if (!todo) {
      return Notiflix.Notify.failure('Task field must not be empty');
    }
    let newTask = {
      id: uuidv4(),
      todo: todo,
      status: 'In progress', //Provisório
      time: new Date().toLocaleTimeString('pt-br', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setTask(newTask);

    setTasks([...tasks, newTask]);
    localStorage.setItem('localTasks', JSON.stringify([...tasks, newTask]));
    setTodo('');
  }

  function handleDeleteTask(task) {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem('localTasks', JSON.stringify(deleted));
  }

  useEffect(() => {
    document.title = 'To-Dos';
    if (localStorage.getItem('localTasks')) {
      const storedList = JSON.parse(localStorage.getItem('localTasks'));
      setTasks(storedList);
    }
  }, []);

  return (
    <div className="container">
      <div className="mt-5 card rounded-3 p-5 align-items-center">
        <header className="display-3">To-Do List</header>
        <form className="input-group mt-5" onSubmit={handleAddTask}>
          <input
            type="text"
            className="form-control"
            value={todo}
            placeholder="Type task"
            onChange={(e) => setTodo(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <div className="mt-5">
          {tasks.map((task) => (
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">To-Do item</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{task.time}</th>
                    <td>{task.todo}</td>
                    <td>{task.status}</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => handleDeleteTask(task)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
