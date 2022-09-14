import React, { useState , useEffect} from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";
//import axios from 'axios';


function EditEmployee() {
    
    const [employee_name,setEmployee_Name]=useState("");
    const [employeenameerror, setEmployeeNameError] = useState(false);
    const [department_name,setDepartment_Name]=useState("");
    const [departmentnameerror, setDepartmentNameError] = useState(false);
    const [report_to,setReport_To]=useState("");
    const [reporttoerror, setReportToError] = useState(false);
    // const [employee_profile, setEmployee_Profile] = useState("");
    // const [employeeprofileerror, setEmployeeProfileError] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const [department, setDepartment] = useState([]);

    useEffect(()=>{
        getDepartment();
      },[])
    
      const getDepartment = async() => {
        let result = await fetch("http://localhost:5000/api/v1/department");
        result = await result.json();
        setDepartment(result);
        }
      //console.log(department);

      const [employee, setEmployee] = useState([]);

    useEffect(()=>{
        getEmployee();
      },[])
    
      const getEmployee = async() => {
        let result = await fetch("http://localhost:5000/api/v1/employee");
        result = await result.json();
        setEmployee(result);
        }
      //console.log(employee);

    useEffect(()=>{
        getEmployeeDetails();
    }, [])

    const getEmployeeDetails = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/employee/${params.id}`);
        result = await result.json();
        console.warn(result);
        setEmployee_Name(result[0].employee_name);
        setDepartment_Name(result[0].department_name);
        setReport_To(result[0].report_to);
        // setEmployee_Profile(result[0].employee_profile);
    }

    const updateemployee =async(e) =>{
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
        if(report_to===''){
            setReportToError('Report to is required');
        } 
        else {
            // console.log(employee_profile);
            // process.exit();
            setReportToError(false)
            setDepartmentNameError(false)
            setEmployeeNameError(false)
            // setEmployeeProfileError(false)
            let result = await fetch(`http://localhost:5000/api/v1/employee/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ employee_name, employee_profile, department_name, report_to }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/employee');
            }

        }
}
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Employee</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/employee">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                                        
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
                                    <div className='col-sm-2'>Department Name :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" 
                                        value={department_name}
                                         onChange={(e)=>setDepartment_Name(e.target.value)} 
                                         className='form-control'>
                                        {/* <option>Select Department</option> */}
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
                                        {/* <option>Select Employee</option> */}
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
                                    <div className='col-sm-2 '>Employee Profile:- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"
                                         value={employee_profile} 
                                         onChange={(e)=>setEmployee_Profile(e.target.value)} 
                                         className='form-control'/>
                                        {employeeprofileerror&& <div className="error-msg" style={{color:"red"}}>{employeeprofileerror}</div>}
                                    </div>
                                </div>
                            
                                
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' onClick={updateemployee} className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditEmployee;
    