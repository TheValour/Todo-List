import React from 'react'
import OutputGoal from './OutputGoal'

export default function Output({goals, deleteData}) {
    const arr = goals.map((goal) => {
        return (
            <OutputGoal goal={goal} deleteData={deleteData}/>
        )
    })
    
  return (
    <div style={{width : '28vw', background: 'light-blue'}}>{arr}</div>
  )
}
