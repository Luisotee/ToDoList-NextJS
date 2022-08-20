export default function Card(props) {
    console.log("oi"+props.todo)
    return (
        <div className='card'>
            <strong>{props.todo}</strong>
        </div>
    )
}