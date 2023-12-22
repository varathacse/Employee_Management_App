import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

let ListSearchEmployee = (props) => {
  const { search, value } = props;
  const Navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const find = (a) => {
    if (a === "firstName") {
      return "Name";
    } else if (a === "emailId") {
      return "Email Id";
    } else if (a === "id") {
      return "Id";
    }
  };

  const find1 = (a) => {
    const attri = ["id", "firstName", "lastName", "dept"];
    if (attri.includes(a)) {
      return "dept";
    } else {
      return a;
    }
  };

  const find2 = (a) => {
    const attri = ["id", "firstName", "lastName", "dept"];
    const attri1 = ["dob", "phone", "emailId", "city"];
    if (attri.includes(a)) {
      return "Department";
    } else if (attri1.includes(a)) {
      const val = {
        dob: "Date of Birth",
        city: "City",
        phone: "Phone No",
        emailId: "Email Id",
      };

      return val[a];
    }
  };

  let filteredEmployees = [];
  if (value === "firstName") {
    filteredEmployees = employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(search) ||
        employee.lastName.toLowerCase().includes(search)
    );
  } else if (value === "id") {
    filteredEmployees = employees.filter((employee) =>
      String(employee.id).includes(search)
    );
  } else if (value === "emailId") {
    filteredEmployees = employees.filter((employee) =>
      employee.emailId.toLowerCase().includes(search)
    );
  } else if (value === "city") {
    filteredEmployees = employees.filter((employee) =>
      employee.city.toLowerCase().includes(search)
    );
  } else if (value === "phone") {
    filteredEmployees = employees.filter((employee) =>
      String(employee.phone).includes(search)
    );
  } else if (value === "dept") {
    filteredEmployees = employees.filter((employee) =>
      employee.dept.toLowerCase().includes(search)
    );
  } else if (value === "dob") {
    filteredEmployees = employees.filter((employee) =>
      String(employee.dob).includes(search)
    );
  }

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });

    alert("Employee " + id + " Deleted successfully");
  };

  const viewEmployee = (id) => {
    Navigate(`/view-employee/${id}`);
  };

  const editEmployee = (id) => {
    Navigate(`/update-employee/${id}`);
  };

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <div>
      <div className="main">
        <h2 className="text-center">Search List By {find(value)}</h2>

        <div className="row">
          <table className="table table-bordered custom-table">
            <thead className="thead-light">
              <tr>
                <th> Employee ID</th>
                <th> Employee Name</th>
                <th> {find2(value)}</th>
                <th className="narrow-column"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.id} </td>
                  <td> {employee.firstName + " " + employee.lastName} </td>
                  <td> {employee[find1(value)]}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ListSearchEmployee;
