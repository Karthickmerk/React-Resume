import React, { useState } from "react";
import "../Layout/Layout.css";
import Preview from "../Preview/Preview";

const Layout = () => {
  const [formData, setFormData] = useState({
    fName: "Karthi",
    mobile: "9597629514",
    emailid: "demo@rr.com",
    address: "No 45. Kamaraj Street",
    role: "Software Engineer",
  });

  function setFormValue(value, name) {
    var control = name;
    setFormData({ ...formData, [control]: value });
  }

  return (
    <>
      <div className="col-md-3 border">
        <div className="row">
          <div className="col-md-2">
            <div className="flex-centered">
              <aside>
                <menu role="menu" id="side-menu">
                  <ul>
                    <li className="side-menu-item">
                      <div className="side-menu-item-wrapper">
                        <div className="side-menu-icon">
                          <div className="svg-icon">
                            <i className="fa-solid fa-user"></i>
                          </div>
                        </div>
                        {/* <div className="side-menu-text">
                                <a href="#">Info </a>
                            </div> */}
                      </div>
                    </li>
                    <li className="side-menu-item">
                      <div className="side-menu-item-wrapper">
                        <div className="side-menu-icon">
                          <div className="svg-icon">
                            <i className="fa-solid fa-briefcase"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="side-menu-item">
                      <div className="side-menu-item-wrapper">
                        <div className="side-menu-icon">
                          <div className="svg-icon">
                            <i className="fa-solid fa-building-columns"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="side-menu-item">
                      <div className="side-menu-item-wrapper">
                        <div className="side-menu-icon">
                          <div className="svg-icon">
                            <i className="fa-solid fa-wrench"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="side-menu-item" id="expand">
                      <div className="side-menu-item-wrapper">
                        <div className="side-menu-icon">
                          <div className="svg-icon">
                            <i className="fa-solid fa-award"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="side-menu-item">
                      <div className="side-menu-item-wrapper">
                        <div className="side-menu-icon">
                          <div className="svg-icon">
                            <i className="fa-solid fa-tag"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </menu>
              </aside>
            </div>
          </div>
          <div className="col-md-10">
            <div className="layout">
              <div className="personal">
                <h5>Personal Details</h5>
                <h6>Full name</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="formtxt"
                    value={formData.fName}
                    onChange={(e) => setFormValue(e.target.value, "fName")}
                  />
                </div>
                <h6>Email Id</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="formtxt"
                    value={formData.emailid}
                    onChange={(e) => setFormValue(e.target.value, "emailid")}
                  />
                </div>
                <h6>Address</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="formtxt"
                    value={formData.address}
                    onChange={(e) => setFormValue(e.target.value, "address")}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h6>Phone Num</h6>
                    <div className="form-group">
                      <input
                        type="text"
                        value={formData.mobile}
                        onChange={(e) => setFormValue(e.target.value, "mobile")}
                        className="formtxt"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6>Current Role</h6>
                    <div className="form-group">
                      <input
                        type="text"
                        className="formtxt"
                        value={formData.role}
                        onChange={(e) => setFormValue(e.target.value, "role")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="personal mt-4">
                <h5>Education Details</h5>
                <h6>School Name</h6>
                <div className="form-group ml">
                  <input type="text" className="formtxt" />
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h6>Year</h6>
                    <div className="form-group">
                      <input type="text" className="formtxt" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h6>Degree/Std</h6>
                    <div className="form-group">
                      <input type="text" className="formtxt" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h6>% Scored</h6>
                    <div className="form-group">
                      <input type="text" className="formtxt" />
                    </div>
                  </div>
                </div>
              </div>
              <a href="/">+ Add More</a>
              <h6>College Name</h6>
              <div className="form-group ml">
                <input type="text" className="formtxt" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h6>Year of Passing</h6>
                  <div className="form-group">
                    <input type="text" className="formtxt" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h6>% Scored</h6>
                  <div className="form-group">
                    <input type="text" className="formtxt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Preview name={formData} />
    </>
  );
};

export default Layout;
