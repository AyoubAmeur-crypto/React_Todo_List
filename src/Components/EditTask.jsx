/* eslint-disable react/prop-types */
import {  useState } from "react"

function EditTask({task,i}) {

    const [editmodal,setEditmodal] = useState(false)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    
    const handleChange = e => {

          const name = e.target.name
          const value = e.target.value

          if(name === "projectDescription") setDescription(value)
            if(name === "projectName")  setName(value)

             
    }

 
    const saveData = e => {
        e.preventDefault()
        task.splice(i, 1 ,{name,description })
        

        setEditmodal(false)
        setDescription("")
        setName("")
        localStorage.setItem('task',JSON.stringify(task))
          window.location.reload()
    }
  return (
    <>
         <button onClick={()=>{setEditmodal(true)
         setName(task[i].name); 
         setDescription(task[i].description);}}>EDIT</button>
    {
        editmodal ? 
        <div className="card">
       <div className="start">
       <p>Update Task</p><button onClick={()=> setEditmodal(false)} >❌</button>
       </div>
       <form className="formy">
        <label >PROJECT NAME</label>
        <input name="projectName" value={name} onChange={handleChange} placeholder="project name " id="project_name" />
        <label>TASK DESCRIPTION</label>
        <textarea placeholder="Task Description" cols="40" value={description}  name="projectDescription"  onChange={handleChange}></textarea>
       </form>

       <div className="btn btnn"><button onClick={saveData}>Update Task</button></div>
        
       </div>
          

         : null
    }
    </>
   
  )
}

export default EditTask