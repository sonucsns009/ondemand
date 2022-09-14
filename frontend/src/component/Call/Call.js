import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddCall from './AddCall';
import EditCall from './EditCall';
// import AssignCall from './AssignCall';
import { format } from "date-fns";

function Call() {

  const [call, setCall] = useState([]);

  useEffect(()=>{
    getCall();
  },[])

  const getCall = async() => {
    let result = await fetch("http://localhost:5000/api/v1/call");
    result = await result.json();
    setCall(result);
    }
  //console.log(call);
  const call_delete = async(id) => {
    let status="delete";
   
    await fetch (`http://localhost:5000/api/v1/call/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getCall();
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
          <h5>Manage Call</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addcall">Add Call</Link>
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
                  <th>Customer Name</th>
                  <th>Employee Name</th>
                  <th>Message</th>
                  <th>Note</th>
                  <th>Call Type</th>
                  <th>Call Datetime</th>
                  {/* <th>Datetime</th>
                  <th>Next Datetime</th> */}
                  <th>Action</th>
                </tr>
                {
                call.map((item, index) => {
                  cnt++;
                  const d1 = new Date(item.call_datetime);
                  const result = format(d1, 'yyyy-MM-dd HH-mm-ss');
                  console.log(result);
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.lead_title}</td>
                        <td>{item.customer_name}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.message}</td>
                        <td>{item.note}</td>
                        <td>{item.call_type}</td> 
                        <td>{result}</td>
                        {/* <td>{item.call_datetime}</td>
                        <td>{item.next_datetime}</td> */}
                        <td>
                        <Link to={"/editCall/"+item.call_id}><button className='btn btn-primary'><i className='fa fa-edit'></i> </button></Link> | 
                        <button className='btn btn-primary' onClick={(e)=>call_delete(item.call_id)}><i className='fa fa-trash'></i> </button> 
                        {/* <Link to="/assigncall"><button className='btn btn-primary'><i className='fa fa-eye'></i> </button></Link> */}
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
<Route path="/addcall" element={<AddCall />} />
<Route path="/editcall" element={<EditCall />} />
{/* <Route path="/assigncall" element={<AssignCall />} /> */}
</Routes>
</div>
</>
  )
    }


export default Call;