import React,{useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddRequirementDetails from './AddRequirementDetails';
import EditRequirementDetails from './EditRequirementDetails';

function Requirement_Details() {

  const [requirementdetails, setRequirementDetails] = useState([]);

  useEffect(()=>{
    getRequirement_Details();
  },[])

  const getRequirement_Details = async() => {
    let result = await fetch("http://localhost:5000/api/v1/requirementdetails");
    result = await result.json();
    setRequirementDetails(result);
    }
  //console.log(requirement_details);
  const requirement_details_delete = async(id) =>{
    let status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/requirementdetails/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getRequirement_Details();
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
          <h5>Manage Requirement Details</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addrequirementdetails">Add Requirement Details</Link>
                </div>
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Detail Id</th>
                  <th>Requirement Id</th>
                  <th>Requirement Ponit</th>  
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  requirementdetails.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.detail_id}</td>
                        <td>{item.requirement_id}</td>
                        <td>{item.requirement_point}</td>
                        <td>{item.status}</td>
                        <td>
                        <Link to={"/editrequirementdetails/"+item.detail_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>requirement_details_delete(item.detail_id)}>
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
<Route path="/addrequirementdetails" element={<AddRequirementDetails />} />
<Route path="/editrequirementdetails" element={<EditRequirementDetails />} />

</Routes>
</div>
</>
  )
    }


export default Requirement_Details;