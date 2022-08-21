export default function Card(props) {
    console.log(props)
    return (
        <div className='card'>
            <strong>{props.todo}</strong>
            <small>{props.time}</small>
        </div>
    )
}