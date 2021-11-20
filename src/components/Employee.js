import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";


const Employee = () =>{

    //function hooks
    const [employees, setEmployees] =  useState([])

    //hooks
    useEffect(() => {
        EmployeeService.getEmployees() //promises  
        .then(
        response => {
            setEmployees(response.data);
        }
        )
        .catch(
            err => {
                console.log("something went wrong")
            }
        )
    })
    return (
        <div>
            <h3>List of Employees</h3>
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