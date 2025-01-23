
import { useEffect, useState } from 'react'
import './App.css'
import Addtask from './Components/Addtask'
import Todo from './Components/Todo'


function App() {

  const [task,setTask] = useState([])

  





    

  useEffect(()=> {

    const array = localStorage.getItem('task')

    if(array) {

      setTask(JSON.parse(array))
    }
  },[])
  return (
    <>
    <div>
    <h2>03 -Task Tracker</h2>

<p>Hi there !</p>
<div className='objectif'>
<p>Click</p><Addtask task={task} setTask={setTask}/><p>to Add New Task !!</p>
</div>
    </div>

   

    <div className='todo'>
    <h2 className='titely'>To Do</h2>
    <div className='todos'>
{task.map((objectif,i)=> (<Todo key={i} objectif={objectif} task = {task} setTask={setTask} i={i}/>))}
    </div>
  </div>

 

   

   
     
     
    </>
  )
}

export default App
