import { handleDeleteTask } from '../pages/index';

export default function Card(props) {
  return (
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
            <th scope="row">{props.time}</th>
            <td>{props.todo}</td>
            <td>{props.status}</td>
            <td>
              <button
                type="submit"
                className="btn btn-danger"
                onSubmit={handleDeleteTask}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
