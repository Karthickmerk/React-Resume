import React from 'react'

const ProgressBar = (props) => {
  return (
    <div>
        <h6>{props.title}</h6>
        <progress style={{width:'200px'}} value={props.percent} max={100}>Progress</progress>
    </div>
  )
}

export default ProgressBar