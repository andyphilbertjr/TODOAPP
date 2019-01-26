import React from 'react'

function Task(props){
  return(
    <div>
      <p>{props.createTask}</p>
      <button>Done</button>
      <button>Edit</button>
      <button>Move</button>
    </div>
  )
}

export default Task
