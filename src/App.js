import './App.css';
import {useState} from "react";
import {Task} from "./Task"
function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleNewTask = (event) => {
        setNewTask(event.target.value);
    }
    const handleAddTask = () => {
        //const newTodoList = [...todoList,newTask];
        const task ={
            id: todoList.length===0?1:todoList[todoList.length-1].id+1,
            taskName: newTask,
            completed:false
        };
        if(task.taskName!=="")
            setTodoList([...todoList, task]);
    }
    const handleDeleteTask = (id)=>{

        /*if (task === taskName)return false;else return true;*/
        //const newTodoList = todoList.filter((task)=> {return task !==taskName})
        setTodoList(todoList.filter((task)=> task.id!==id));
    };
    const handleCompleteTask = (id) =>{
        setTodoList(todoList.map((task)=> {
                if (task.id === id) {
                    return {...task,completed: true};
                }
                else {
                    return task;
                }
            }
        ))
    };
    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleNewTask}/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return <Task taskName={task.taskName} id={task.id} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} completed={task.completed}/>
                })}
            </div>
        </div>
    );
}

export default App;
