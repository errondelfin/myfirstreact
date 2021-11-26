import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
const Employee = () =>{

   const [employees, setEmployees] = useState([])
    useEffect(() => {
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
        })
    return (
        <div>
            <h2>List of Employees</h2>
            <div>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                </tr>
                {
                    employees.map(
                        employee => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                            </tr>

                        )
                    )
                }
            </table>
         </div>
    </div>
    )

}

export default Employee;