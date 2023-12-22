import axios from "axios";

const apiURL = "http://localhost:8080/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(apiURL);
  }

  createEmployee(employee) {
    return axios.post(apiURL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(apiURL + "/" + employeeId);
  }

  updateEmployee(employee, employeeId) {
    return axios.put(apiURL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(apiURL + "/" + employeeId);
  }
}

const employeeService = new EmployeeService();

export default employeeService;
