import React from 'react'

const BlockContent = (props) => {
  return (
    <div>

      <h6 className='pad-top-20 block-title' >
        {props.title}
      </h6>
      <p style={{color:'rgb(209 174 3)'}}> {props.institute}</p>
      <p></p>
        {props.desc}
    </div>
  )
}

export default BlockContent