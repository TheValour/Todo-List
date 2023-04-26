import React from 'react'
import './OutputGoal.css'

export default function OutputGoal({goal, deleteData}) {
  return (
    <li onClick={() => deleteData(goal)}>{goal}</li>
  )
}
