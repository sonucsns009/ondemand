import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddLead from './AddLead';
import EditLead from './EditLead';

function Lead() {

  const [lead, setLead] = useState([]);

  useEffect(()=>{
    getLead();
  },[])

  const getLead = async() => {
    let result = await fetch("http://localhost:5000/api/v1/lead");
    result = await result.json();
    setLead(result);
    }
  //console.log(lead);
  const lead_delete = async(id) =>{
    let lead_status="delete";
    
    await fetch (`http://localhost:5000/api/v1/lead/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ lead_status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getLead();
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
          <h5>Manage Lead</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addlead">Add Lead</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Lead Title</th>
                  <th>Lead ShortDescription</th>
                  <th>Addedby</th>
                  <th>Lead Type</th>
                  <th>Customer Id</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  lead.map((item, index) => {
                    cnt++;
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.lead_title}</td>
                        <td>{item.lead_shortdescription}</td>
                        <td>{item.addedby}</td>
                        <td>{item.lead_type}</td> 
                        <td>{item.customer_id}</td>
                        <td>{item.lead_status}</td>
                        <td>
                        <Link to={"/editlead/"+item.lead_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>lead_delete(item.lead_id)}>
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
<Route path="/addlead" element={<AddLead />} />
<Route path="/editlead" element={<EditLead />} />

</Routes>
</div>
</>
  )
    }


export default Lead;