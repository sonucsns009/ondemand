import React,{useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddRequirement from './AddRequirement';
import EditRequirement from './EditRequirement';

function Requirement() {

  const [requirement, setRequirement] = useState([]);

  useEffect(()=>{
    getRequirement();
  },[])

  const getRequirement = async() => {
    let result = await fetch("http://localhost:5000/api/v1/requirement");
    result = await result.json();
    setRequirement(result);
    }
  //console.log(requirement);
  const requirement_delete = async(id) =>{
    let status="delete";
    
    await fetch (`http://localhost:5000/api/v1/requirement/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getRequirement();
      })
    })
  }
let cnt=0;
  return(
    <>
<div className='col-sm-9 offset-sm-3'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Requirement</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addrequirement">Add Requirement</Link>
                </div>
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Customer Name</th>
                  <th>Call Id</th> 
                  <th>Requirement Point</th> 
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  requirement.map((item, index) => {
                    cnt++;
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.customer_name}</td>
                        <td>{item.call_id}</td>
                        <td>{item.requirement_point}</td>
                        <td>{item.status}</td>
                        <td>
                        <Link to={"/editrequirement/"+item.requirement_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>requirement_delete(item.requirement_id)}>
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
<Route path="/addrequirement" element={<AddRequirement />} />
<Route path="/editrequirement" element={<EditRequirement />} />

</Routes>
</div>
</>
  )
    }


export default Requirement;