import React, { useState } from "react";
import "../Layout/Layout.css";
import Preview from "../Preview/Preview";

const layout = () => {
 
  //const [sname,setName] =useState("false");

  return (
    
    <>
    <div className="col-md-3 border" >
      <div className="layout">
        <div className="personal">
          <h5>Personal Details</h5>
          <h6>Full name</h6>
          <div className="form-group">
            <input type="text" className="formtxt" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <h6>Phone Num</h6>
              <div className="form-group">
                <input type="text" className="formtxt" />
              </div>
            </div>
            <div className="col-md-6">
              <h6>D.O.B</h6>
              <div className="form-group">
                <input type="date" className="formtxt" />
              </div>
            </div>
          </div>
        </div>
        <div className="personal">
          <h5>Personal Details</h5>
          <h6>Full name</h6>
          <div className="form-group ml">
            <input type="text" className="formtxt" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <h6>Phone Num</h6>
              <div className="form-group">
                <input type="text" className="formtxt" />
              </div>
            </div>
            <div className="col-md-6">
              <h6>D.O.B</h6>
              <div className="form-group">
                <input type="date" className="formtxt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default layout;
