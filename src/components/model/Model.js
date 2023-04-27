import React from 'react'
import  ReactDOM  from 'react-dom'
import style from './Model.module.css'

const ModelPortal = (props) => {
  return (
      <div className={style.backdrop}>
        <div className={`flex ${style.modal}`}>
          <h1>Wrong Input</h1>
          <button onClick={() => props.setFlag((pre) => !pre)}>Ok</button>
        </div>
      </div>
    )
}

function Model({setFlag}) {
  return (
    <>
      { 
        ReactDOM.createPortal(
          <ModelPortal setFlag = {setFlag}/>, document.getElementById('model_backdrop')
        )
      }
    </>
  )
}
export default  Model;
