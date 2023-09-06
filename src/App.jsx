// ! Components
import AddTask from "./Components/AddTasks/addTask"
import TaskList from "./Components/Task/taskList"

// ! Hooks
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([])

  const sendData = (task) => {
    const newTasks = [...tasks,task]
    setTasks(newTasks)
  }

  const removeTask = (index) => {
    const filteredTasks = [...tasks]
    filteredTasks.splice(index,1)
    setTasks(filteredTasks)
  }

  return (
   <>
    <AddTask send={sendData}/>
{ tasks.length>0 && <TaskList remove={removeTask} tasks = {tasks} />}
  </>
  )
}

export default App