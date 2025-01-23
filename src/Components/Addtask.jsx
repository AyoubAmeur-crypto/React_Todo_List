/* eslint-disable react/prop-types */
import { useState } from "react"

function Addtask({ task }) {

    const [objectif,setObjectif] = useState(false)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [validInput,setValidInput] = useState("")

    const handleChange = e => {

          const name = e.target.name
          const value = e.target.value

          if(name === "projectDescription") setDescription(value)
            if(name === "projectName")  {setName(value)

              if(value === "") setValidInput("Enter a Ttile Please")
            }


             
    }

    const saveData = e => {
        e.preventDefault()
        if(name === "") { setValidInput("Enter a Ttile Please")


         }
        else {
          const array = [...task]
          array.push({
            name,description
          })

          localStorage.setItem('task',JSON.stringify(array))
          window.location.reload()
          setObjectif(false)
          setDescription("")
          setName("")
          setValidInput("")
        }
       
    }
  return (
    <>
        <button className="btn" onClick={()=> setObjectif(true)}>+New</button>

       { objectif ? <div className="card">
       <div className="start">
       <p>Add New Task</p><button onClick={()=> setObjectif(false)} >❌</button>
       </div>
       <form className="formy">
        <label >PROJECT NAME</label>
        <input name="projectName" value={name} onChange={handleChange} placeholder="project name "  id="project_name" />
        <p className="warning">{validInput}</p>
        <label>TASK DESCRIPTION</label>
        <textarea placeholder="Task Description" cols="40" value={description}  name="projectDescription"  onChange={handleChange}></textarea>
       </form>

       <div className="btn btnn"><button onClick={saveData}>ADD TASK</button></div>
        
       </div> : null}
    </>
  )
}

export default Addtask