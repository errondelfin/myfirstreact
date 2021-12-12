import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";



const Employee = () =>{

   const [employees, setEmployees] = useState([])
    useEffect(() => {


        refreshEmployeeTable();
    })
        const refreshEmployeeTable = () =>{
            EmployeeService.getEmployees()
            .then(
                response => {
                    setEmployees(response.data);
                    }
                )
                .catch(
                    err => {
                        console.log("Something went wrong.")
                    }
                )
            }
    
            
          


    const deleteEmployee = (employeeId) =>{
        EmployeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Deleted successfully!")
                refreshEmployeeTable();
            }
        )
            .catch(
                error =>{
                    console.log("Something went wrong!",error)
                }
            )
            }
    
    return (
        <div className = "container">
            <h2>List of Employees</h2>
            <div>
            <table className="table table-hover table-light">
               <thead>
                <tr className ="table-danger">
                 
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(
                        employee => (
                            <tr key={employee.employeeId}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={(e)=>deleteEmployee(employee.employeeId)}>Delete</button>
                                    </div>
                                </td>
                            
                            </tr>

                        )
                    )
                }
                </tbody>
            </table>
         </div>
    </div>
    )

}

export default Employee;