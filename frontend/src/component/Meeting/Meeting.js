import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
// import AssignCall from '../Call/AssignCall';
import AddMeeting from './AddMeeting';
import EditMeeting from './EditMeeting';
import {format} from 'date-fns';


function Meeting() {
  const [meeting, setMeeting] = useState([]);
  

    useEffect(()=>{
        getMeeting();
      },[])
    
      const getMeeting = async() => {
        let result = await fetch("http://localhost:5000/api/v1/meeting");
        result = await result.json();
        setMeeting(result);
        }
      //console.log(meeting);
      const meeting_delete = async(id) =>{
        let status="delete";
        alert("Do You Want to delete", id);
        await fetch (`http://localhost:5000/api/v1/meeting/${id}`, {
          method: 'DELETE',
                    body: JSON.stringify({ status}),
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                    }).then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp);
            getMeeting();
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
          <h5>Manage Meeting</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addmeeting">Add Meeting</Link>
                </div>
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  {/* <th>Call Id</th> */}
                  <th>Meeting Title</th>
                  <th width="15%">Meeting Disccussion</th>
                  <th width="25%">Meeting Datetime</th>  
                  <th width="10%">Meeting Type</th>  
                  <th width="20%">Employee Name Attend Meeting</th>
                  <th>Status</th>
                  <th width="100%">Action</th>
                  
                </tr>
                {
                  
                  meeting.map((item, index) => {
                    cnt++;

                    const d1 = new Date(item.meeting_datetime);
                    const result = format(d1, 'yyyy-MM-dd HH-mm-ss');
                    console.log(result); 
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        {/* <td>{item.call_id}</td> */}
                        <td>{item.meeting_title}</td>
                        <td>{item.meeting_disccussion}</td>
                        <td>{result}</td>
                        <td>{item.meeting_type}</td>  
                        <td>{item.attend_meeting_emp_name}</td>
                        <td>{item.status}</td>
                        <td>
                        <Link to={"/editmeeting/"+item.meeting_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> |
                        <button className='btn btn-primary' onClick={()=>meeting_delete(item.meeting_id)}>
                                <i className='fa fa-trash'></i> </button> 
                                {/* |
                        <Link to="/assigncall"><button className='btn btn-primary'><i className='fa fa-eye'></i> </button></Link>         */}
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
<Route path="/addmeeting" element={<AddMeeting />} />
<Route path="/editmeeting" element={<EditMeeting />} />
{/* <Route path="/assigncall" element={<AssignCall/>}/> */}
</Routes>
</div>
</>
  )
    }


export default Meeting;