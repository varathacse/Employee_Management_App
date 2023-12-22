import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

let CreateEmployeeComponent = () => {
  const Navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [dept, setDept] = useState("HR");
  const [city, setCity] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phone, setPhone] = useState("");

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, dob, dept, city, emailId, phone };

    EmployeeService.createEmployee(employee)
      .then((res) => {
        alert(
          "Employee " +
            employee.firstName +
            " " +
            employee.lastName +
            " saved successfully"
        );
        Navigate("/employees");
      })
      .catch((error) => {
        console.error("Error saving employee: ", error);
        alert("Please Provided valid information");
        Navigate("/employees");
      });
  };

  const cancel = () => {
    Navigate("/employees");
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="main1">
        <br></br>
        <div>
          <div>
            <h3 className="text-center">Add Employee</h3>
            <div>
              <form onSubmit={saveEmployee}>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="Enter First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Date of Birth: </label>
                  <input
                    type="date"
                    placeholder="Enter DOB YYYY-MM-DD"
                    name="dob"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Department: </label>
                  <select
                    name="dept"
                    className="form-control"
                    placeholder="Enter City"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    required
                  >
                    <option value="HR" selected>
                      HR
                    </option>
                    <option value="Manager">Manager</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Developer">Developer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label> City: </label>
                  <input
                    placeholder="Enter City"
                    name="city"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Enter Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label> Phone No: </label>
                  <input
                    placeholder="Enter Phone No"
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default CreateEmployeeComponent;
