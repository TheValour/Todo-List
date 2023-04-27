import React from 'react'
import style from './Model.module.css'

export default function Model({setFlag}) {
  return (
    <div className={style.backdrop}>
      <div className={`flex ${style.modal}`}>
        <h1>Wrong Input</h1>
        <button onClick={() => setFlag((pre) => !pre)}>Ok</button>
      </div>
    </div>
  )
}
