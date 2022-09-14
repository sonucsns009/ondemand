//import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
function Employee() {

  const [employee, setEmployee] = useState([]);
  //const params = useParams();
  
  useEffect(()=>{
    getEmployees();
  },[])

  const getEmployees = async() => {
    let result = await fetch("http://localhost:5000/api/v1/employee");
    result = await result.json();
    setEmployee(result);
    }

    //console.warn(employee);

  const employee_delete = async(id) => {
    let emp_status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/employee/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ emp_status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getEmployees();
      })
    })
  }
     

  return(
    <>
<div className='col-sm-9 offset-sm-3'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Employee</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addemployee">Add Employee</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Department Id</th>
                  <th>Report To</th>
                  <th>Employee Profile</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  employee.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.employee_id}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.department_id}</td> 
                        <td>{item.report_to}</td>
                        <td>{item.employee_profile}</td>
                        <td>{item.emp_status}</td>
                        <td>
                        <Link to={"/editemployee/"+item.employee_id}><button className='btn btn-primary'>
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>employee_delete(item.employee_id)}>
                                <i className='fa fa-trash'></i> </button>
                        </td> 
                    </tr>
                    )
                  })
                }
                </table>
            </div>
            
        
        </div>
    </div>
</div>
</div>
<Routes>
<Route path="/addemployee" element={<AddEmployee  />} />
<Route path="/editemployee" element={<EditEmployee />} />

</Routes>
</div>
</>
  )
    }


export default Employee;