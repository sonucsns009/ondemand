import React,{useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import EditReminder from './EditReminder';
import AddReminder from './AddReminder';

function Reminder() {

  const [reminder, setReminder] = useState([]);

  useEffect(()=>{
    getReminder();
  },[])

  const getReminder = async() => {
    let result = await fetch("http://localhost:5000/api/v1/reminder");
    result = await result.json();
    setReminder(result);
    }
  //console.log(reminder);
  const reminder_delete = async(id) =>{
    let status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/reminder/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getReminder();
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
          <h5>Manage reminder</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addreminder">Add reminder</Link>
                </div>
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Reminder Id</th>
                  <th>Call Id</th>  
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  reminder.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.reminder_id}</td>
                        <td>{item.call_id}</td>
                        <td>{item.status}</td>
                        <td>
                        <Link to={"/editreminder/"+item.reminder_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>reminder_delete(item.reminder_id)}>
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
<Route path="/addreminder" element={<AddReminder />} />
<Route path="/editreminder" element={<EditReminder />} />

</Routes>
</div>
</>
  )
    }


export default Reminder;