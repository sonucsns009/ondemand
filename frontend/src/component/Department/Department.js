import React,{useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddDepartment from './AddDepartment';
import EditDepartment from './EditDepartment';

function Department() {

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
  const department_delete = async(id) => {
    let department_status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/department/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({department_status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getDepartment();
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
          <h5>Manage Department</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/adddepartment">Add Department</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Department Id</th>
                  <th>Department Name</th>
                  <th>Company Id</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  department.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.department_id}</td>
                        <td>{item.department_name}</td>
                        <td>{item.company_id}</td> 
                        <td>{item.department_status}</td>
                        <td>
                        <Link to={"/editdepartment/"+item.department_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={(e)=>department_delete(item.department_id)}>
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
<Route path="/adddepartment" element={<AddDepartment />} />
<Route path="/editdepartment" element={<EditDepartment />} />

</Routes>
</div>
</>
  )
    }


export default Department;