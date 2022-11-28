export const Task =  (props) => {
    return (<div className="task" style={{backgroundColor:props.completed?"green":"white"}}>
        <h1>{props.taskName}</h1>
        <button onClick={()=>props.handleCompleteTask(props.id)}>Complete</button>
        <button onClick={()=>props.handleDeleteTask(props.id)}>X</button>
    </div>);
}