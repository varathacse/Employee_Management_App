import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';



    function ListEmployeeComponent(props){

        const [employees, setEmployees] = useState([]);
       
      

        const deleteEmployee = (id) => {
            EmployeeService.deleteEmployee(id).then((res) => {
                setEmployees(employees.filter((employee) => employee.id !== id));
            });

            alert("Employee "+ id + " Deleted successfully")
        };
        
        const viewEmployee = (id) => {
            props.history.push(`/view-employee/${id}`);
        };
    
        const editEmployee = (id) => {
            props.history.push(`/update-employee/${id}`);
        };
    
        useEffect(() => {
            EmployeeService.getEmployees().then((res) => {
                setEmployees(res.data);
            });
        }, []);
    
       
    
   
        return (
            
            <div>
                <div className="main">
                
                <br></br><br></br><br></br>
                 <h2 className="text-center">Employees List</h2>
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-bordered custom-table">
                            <thead className="thead-light">
                                <tr>
                                    <th> Employee ID</th>
                                    <th> Employee Name</th>
                                    <th> Department</th>
                                    <th className="narrow-column"> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.id} </td>
                                             <td> { employee.firstName +" "+ employee.lastName} </td>   
                                             <td> {employee.dept}</td>
                                             <td>
                                                 <button onClick={ () => editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 
                 <br></br><br></br>
                 </div>
            </div>
        )
    
}

export default ListEmployeeComponent;
