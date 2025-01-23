
/* eslint-disable react/prop-types */

import EditTask from "./EditTask"


function Todo({objectif,i,task,setTask}) {


 

    const deleteTask = ()=> {
        
    
        const newtaskTable = [...task]
         newtaskTable.splice(i ,1)

         setTask(newtaskTable)
         localStorage.setItem('task',JSON.stringify(newtaskTable))
         

    }

    const finshTask = ()=> {

        const newtaskTable = [...task]
        newtaskTable[i] = {
            ...newtaskTable[i], 
            done: !newtaskTable[i].done, }
        setTask(newtaskTable)
        localStorage.setItem('task',JSON.stringify(newtaskTable))


    }

  
  return (


 

    <>   
        <div className="cardy" >
        <div className="firstRow">
        <div className="title">{task[i].done ? <><p style={{ textDecoration: "line-through", color:"rgba(36, 36, 36, 0.582)" }}>{objectif.name}</p></> : <><p>{objectif.name}</p></>}
</div>
        
        <EditTask i={i} task={task} setTask={setTask}/>
        </div><p className="descripted">{objectif.description}</p>
        <div className="delete">
             <button onClick={finshTask} className="dony">
                {task[i].done ? 'UNDO' : 'DONE'}
             </button>
            <button onClick={deleteTask}>DELETE</button>
        </div>
    </div>
    </>
  
  )
}

export default Todo