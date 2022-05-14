import React from 'react'
import Template1 from '../../templates/template_1/Template_1'

 const Preview = (props) => {   
  return (
    <div className="col-md-6">     
        <Template1  name={props}/>
    </div>
  )
}

export default Preview