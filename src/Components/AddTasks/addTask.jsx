// ! Hooks
import { useState } from "react" 
// ! Styles
import "./addTask.css"
// ! Component
import Button from "../button/button"



const AddTask = (props) => { 
  const [task,setTask] =useState("")

  const addTasks = (e) => {
    setTask(e.target.value)
  }


  const sumbitFrom = (e) => {
    e.preventDefault()
    if(!task) return
    
    props.send(task)
    setTask("")
  }
    return (
        <div className="addTask">
        <form onSubmit={sumbitFrom}>
          <input value={task} onChange={addTasks} type="text" placeholder="Add your task" />
           <Button>Add Task</Button>
        </form>
      </div>
    )
}
 
export default AddTask 