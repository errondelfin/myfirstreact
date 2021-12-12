import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () =>{
    
    const[name,setName] = useState("");
    const[location,setLocation] = useState("");
    const[department,setDepartment] = useState("");
    
    const navigate = useNavigate();
    const {employeeId} = useParams();

    const saveEmployee = (e) =>{
        e.preventDefault();
        const employee = {employeeId, name, location, department}
    
            if(employeeId){

        
            EmployeeService.putEmployee(employee)
            .then(response =>{
                console.log("employee updated!")
              navigate("/employees");
            })
            .catch(error =>{
                console.log("Something went wrong!")
            })
        }
        else{
            EmployeeService.postEmployee(employee)
            .then(response =>{
                console.log("employee added!")
              navigate("/employees");
            })
            .catch(error =>{
                console.log("Something went wrong!")
            })
    }
}

        useEffect(
            ()=>{
                if(employeeId){
                    EmployeeService.getEmployee(employeeId)
                    .then(
                        employee =>{
                            setName(employee.data.name)
                            setLocation(employee.data.location)
                            setDepartment(employee.data.department)
                        }

                    )
                    .catch(error=>{
                        console.error("Something went wrong!")
                    }
                    )
                }

            },[]
        )


    return(
        <div className = "container">
            <br></br>
                <h3><center>Add Employee</center></h3>
                            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />       
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Department</label>
                <input type="text" className="form-control" id="Department" placeholder="Department" onChange={(e) => setDepartment(e.target.value)} />      
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Location</label>
                <input type="text" className="form-control" id="Location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />     
            </div>
      
            <button type="submit" className="btn btn-primary" onClick={(e)=> saveEmployee(e)}>Save</button>
            </form>     
        </div>
    )
}

export default AddEmployee;