import React, { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';


function AddEmployee() {
    
    const [employee_name,setEmployee_Name]=useState("");
    const [employeenameerror, setEmployeeNameError] = useState(false);
    const [department_name,setDepartment_Name]=useState("");
    const [departmentnameerror, setDepartmentNameError] = useState(false);
    const [report_to,setReport_To]=useState("");
    const [reporttoerror, setReportToError] = useState(false);
    // const [employee_profile, setEmployee_Profile] = useState("");
    // const [employeeprofileerror, setEmployeeProfileError] = useState(false);

    const [department, setDepartment] = useState([]);
    const [employee, setEmployee] = useState([]);

  useEffect(()=>{
    getDepartment();
  },[])

  const getDepartment = async() => {
    let result = await fetch("http://localhost:5000/api/v1/department");
    result = await result.json();
    setDepartment(result);
    }
  //console.log(department);

  useEffect(()=>{
    getEmployee();
  },[])

  const getEmployee = async() => {
    let result = await fetch("http://localhost:5000/api/v1/employee");
    result = await result.json();
    setEmployee(result);
    }
  //console.log(employee);

    const handleSubmit = (e) =>{
                e.preventDefault();
        if(employee_name!==''){
            if (!/^[A-Za-z]+/.test(employee_name.trim())) {
                setEmployeeNameError('Enter a valid name');
            }
        } else{
            setEmployeeNameError('Employee Name is required');
        }
        if(department_name!==''){

        } else{
            setDepartmentNameError('Department Id is required');
        }
        // if(employee_profile!==''){

        // } else{
        //     setEmployeeProfileError('Employee Profile is required');
        // }
        if(report_to ===''){
            setReportToError('Report to is required');
        } 
        else {
            setReportToError(false)
            setDepartmentIdError(false)
            setEmployeeNameError(false)
            setEmployeeProfileError(false)
            axios.post("http://localhost:5000/api/v1/employee", 
            { employee_name: employee_name, department_name: department_name, report_to: report_to, employee_profile: employee_profile, 
             method: "Post",
            body: JSON.stringify({employee_name, report_to, department_name}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                return respone.json();
               
            }).catch((error)=>{
                console.log(error);
            });
            setDepartment_Name("");
            setReport_To("");
            setEmployee_Name("");
        
        }            
}

     return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Employee</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/employee">Back</Link>
                                    </div>
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <form onSubmit={handleSubmit}>             
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Employee Name:- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"
                                         value={employee_name} 
                                         onChange={(e)=>setEmployee_Name(e.target.value)} 
                                         className='form-control'/>
                                        {employeenameerror&& <div className="error-msg" style={{color:"red"}}>{employeenameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-2'>Select Department :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" 
                                        value={department_name}
                                         onChange={(e)=>setDepartment_Name(e.target.value)} 
                                         className='form-control'>
                                        <option>Select Department</option>
                                        {
                                                department.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.department_name}>{item.department_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {departmentnameerror&& <div className="error-msg" style={{color:"red"}}>{departmentnameerror}</div>}

                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Report To :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" 
                                        value={report_to}
                                        onChange={(e)=>setReport_To(e.target.value)}
                                        className='form-control'>
                                        <option>Select Employee</option>
                                        {
                                                employee.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.employee_name}>{item.employee_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {reporttoerror&& <div className="error-msg" style={{color:"red"}}>{reporttoerror}</div>}
                                    </div>
                                </div>
        
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default AddEmployee;