import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

let ViewEmployeeComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, [id]);

  const editEmployee = () => {
    navigate(`/update-employee/${id}`);
  };

  const deleteEmployee = () => {
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        alert(`Employee ${id} Deleted successfully`);
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error deleting employee: ", error);
      });
  };

  const cancel = () => {
    navigate("/employees");
  };

  return (
    <div className="main2">
      <br></br>
      <br></br>
      <br></br>
      <div>
        <table className="table table-bordered">
          <thead className="thead-light text-center">
            <tr>
              <th colspan="2">Employee Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Employee Id</th>
              <td>{employee.id}</td>
            </tr>
            <tr>
              <th scope="row">First Name</th>
              <td>{employee.firstName}</td>
            </tr>
            <tr>
              <th scope="row">Last Name</th>
              <td>{employee.lastName}</td>
            </tr>
            <tr>
              <th scope="row">Date of Birth</th>
              <td>{employee.dob}</td>
            </tr>
            <tr>
              <th scope="row">Department</th>
              <td>{employee.dept}</td>
            </tr>
            <tr>
              <th scope="row">City</th>
              <td>{employee.city}</td>
            </tr>
            <tr>
              <th scope="row">Phone</th>
              <td>{employee.phone}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{employee.emailId}</td>
            </tr>
            <tr>
              <th colspan="2">
                <button
                  onClick={() => editEmployee(employee.id)}
                  className="btn btn-info"
                  style={{ marginLeft: "27%" }}
                >
                  Update{" "}
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default ViewEmployeeComponent;
