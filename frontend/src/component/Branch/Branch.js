import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddBranch from './AddBranch';
import EditBranch from './EditBranch';
//import Data from './Data';

function Branch() {

  const [branch, setBranch] = useState([]);

  useEffect(()=>{
    getBranch();
  },[])

  const getBranch = async() => {
    let result = await fetch("http://localhost:5000/api/v1/branch");
    result = await result.json();
    setBranch(result);
    }
  //console.log(branch);
  
  const branch_delete = async(id) => {
    let company_status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/branch/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({company_status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getBranch();
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
          <h5>Manage Branch</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addbranch">Add Branch</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Branch Id</th>
                  <th>Company Id</th>
                  <th>Company Name</th>
                  <th>Company Cin</th>
                  <th>Comapny Profile</th>
                  <th>status</th>
                  <th>Action</th>
                </tr>
                {
                  branch.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.branch_id}</td>
                        <td>{item.company_id}</td>
                        <td>{item.company_name}</td>
                        <td>{item.company_cin}</td> 
                        <td>{item.company_profile}</td>
                        <td>{item.company_status}</td>
                        <td>
                        <Link to={"/editbranch/"+item.branch_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>branch_delete(item.branch_id)}>
                                <i className='fa fa-trash' ></i> </button>
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
<Route path="/addbranch" element={<AddBranch />} />
<Route path="/editbranch" element={<EditBranch />} />

</Routes>
</div>
</>
  )
    }


export default Branch;