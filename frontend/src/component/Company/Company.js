import React,{useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddCompany from './AddCompany';
import EditCompany from './EditCompany';

function Company() {

  const [company, setCompany] = useState([]);

  useEffect(()=>{
    getCompany();
  },[])

  const getCompany = async() => {
    let result = await fetch("http://localhost:5000/api/v1/company");
    result = await result.json();
    setCompany(result);
    }
  //console.log(company);
  const company_delete = async(id) => {
    let company_status="delete";
    // alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/company/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ company_status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getCompany();
      })
    })
  }
let cnt=0;
  return(
    <>
<div className='col-sm-10 offset-sm-2'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Company</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addcompany">Add Company</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Company Name</th>
                  <th>Company Email</th>
                  {/* <th>Comapny Contact</th> */}
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                company.map((item, index) => {
                  cnt++;
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.company_name}</td>
                        <td>{item.company_email}</td> 
                        {/* <td>{item.company_contact}</td> */}
                        <td>{item.company_status}</td>
                        <td>
                        <Link to={"/editcompany/"+item.company_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>company_delete(item.company_id)}>
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
<Route path="/addcompany" element={<AddCompany />} />
<Route path="/editcompany" element={<EditCompany />} />

</Routes>
</div>
</>
  )
    }


export default Company;