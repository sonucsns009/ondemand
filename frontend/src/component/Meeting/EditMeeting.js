import React,{ useEffect, useState } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditMeeting() {
    const [customer_id,setCustomer_Id] = useState("");
    const [customeriderror, setCustomerIdError] = useState(false);

    const [call_id,setCall_Id] = useState("");
    const [calliderror, setCallidError] = useState(false);

    const [attend_meeting_emp_name, setAttend_Meeting_Emp_Name] = useState("");
    const [attendmeetingempnameerror, setAttendMeetingEmpNameError] = useState(false);

    const [meeting_title, setMeeting_Title] = useState("");
    const [meetingtitleerror, setMeetingTitleError] = useState(false);

    const [meeting_datetime, setMeeting_Datetime] = useState("");
    const [meetingdatetimeerror, setMeetingDatetimeError] = useState(false);

    const [meeting_disccussion, setMeeting_Disccussion] = useState("");
    const [meetingdisccussionerror, setMeetingDisccussionError] = useState(false);

    const [meeting_type, setMeeting_Type] = useState("");
    const [meetingtypeerror, setMeetingTypeError] = useState(false);

    const [customer, setCustomer] = useState([]);
    const [call, setCall] = useState([]);
    const [employee, setEmployee] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getmeetingDeatils();
    }, [])

    const getmeetingDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/meeting/${params.id}`);
        result = await result.json();
        //console.warn(result);
        setCall_Id(result[0].call_id);
        setCustomer_Id(result[0].customer_id);
        setAttend_Meeting_Emp_Name(result[0].attend_meeting_emp_name);
        setMeeting_Title(result[0].meeting_title);
        setMeeting_Disccussion(result[0].meeting_disccussion);
        setMeeting_Datetime(result[0].meeting_datetime);
        setMeeting_Type(result[0].meeting_type);
    }

    useEffect(()=>{
        getCustomer();
      },[])
    
      const getCustomer = async() => {
        let result = await fetch("http://localhost:5000/api/v1/customer");
        result = await result.json();
        setCustomer(result);
        }
      //console.log(customer);

      useEffect(()=>{
          getCall();
        },[])
      
        const getCall = async() => {
          let result = await fetch("http://localhost:5000/api/v1/call");
          result = await result.json();
          setCall(result);
          }
        //console.log(call);
    
      useEffect(()=>{
          getEmployee();
        },[])
      
        const getEmployee = async() => {
          let result = await fetch("http://localhost:5000/api/v1/employee");
          result = await result.json();
          setEmployee(result);
          }
        //console.log(employee);

    const updateMeeting = async(e) =>{
        e.preventDefault();
        if(customer_id!==''){
           
        } else{
            setCustomerIdError('Customer Id is required');
        }
        if(attend_meeting_emp_name!==''){
           
        } else{
            setAttendMeetingEmpNameError('Employee Name is required');
        }
        if(meeting_title!==''){
           
        } else{
            setMeetingTitleError('Meeting Title is required');
        }
        if(meeting_datetime!==''){
           
        } else{
            setMeetingDatetimeError('Meeting Datetime is required');
        }
        if(meeting_type!==''){
           
        } else{
            setMeetingTypeError('Meeting Type is required');
        }
        if(meeting_disccussion!==''){
           
        } else{
            setMeetingDisccussionError('Meeting Disccussion is required');
        }
        if(call_id===''){
            setCallidError('CallId is required');
        } else{
            setCustomerIdError(false)
            setAttendMeetingEmpNameError(false)
            setCallidError(false)
            setMeetingTitleError(false)
            setMeetingDatetimeError(false)
            setMeetingDisccussionError(false)
            setMeetingTypeError(false)
            let result = await fetch(`http://localhost:5000/api/v1/meeting/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ call_id, attend_meeting_emp_name, customer_id, meeting_datetime, meeting_disccussion, meeting_title, meeting_type }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/meeting');
            }
        }
    }

    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Meeting</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/meeting">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Customer :- </div>
                                    <div className='col-sm-6'>
                                    <select type="number" value={customer_id} onChange={(e)=>setCustomer_Id(e.target.value)} className='form-control'>
                                        <option>Select Customer</option>
                                           {
                                               customer.map((item, index)=>{
                                                   return(
                                                    <option key={index} value={item.customer_id}>{item.customer_name}</option>
                                                   )
                                               })
                                           }
                                        </select>
                                        {customeriderror&& <div className="error-msg" style={{color:"red"}}>{customeriderror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Call :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={call_id} onChange={(e)=>setCall_Id(e.target.value)} className='form-control'>
                                        <option>Select Company</option>
                                        {
                                            call.map((item, index)=>{
                                                return(
                                                    <option key={index} value={item.call_id}>{item.call_id}</option>
                                                )
                                            })
                                        }
                                        </select>
                                        {calliderror&& <div className="error-msg" style={{color:"red"}}>{calliderror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Employee :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={attend_meeting_emp_name} onChange={(e)=>setAttend_Meeting_Emp_Name(e.target.value)} className='form-control'>
                                        <option>Select Employee</option>
                                        {
                                               employee.map((item, index)=>{
                                                   return(
                                                    <option key={index} value={item.employee_name}>{item.employee_name}</option>
                                                   )
                                               })
                                           }
                                        </select>
                                        {attendmeetingempnameerror&& <div className="error-msg" style={{color:"red"}}>{attendmeetingempnameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Meeting Title :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={meeting_title} onChange={(e)=>setMeeting_Title(e.target.value)} className='form-control'/>
                                        {meetingtitleerror&& <div className="error-msg" style={{color:"red"}}>{meetingtitleerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Meeting Datetime :- </div>
                                    <div className='col-sm-6'>
                                        <input type="datetime-local" value={meeting_datetime} onChange={(e)=>setMeeting_Datetime(e.target.value)} className='form-control'/>
                                        {meetingdatetimeerror&& <div className="error-msg" style={{color:"red"}}>{meetingdatetimeerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Meeting Disccussion :- </div>
                                    <div className='col-sm-6'>
                                        <textarea type="text" value={meeting_disccussion} onChange={(e)=>setMeeting_Disccussion(e.target.value)} className='form-control'></textarea>
                                        {meetingdisccussionerror&& <div className="error-msg" style={{color:"red"}}>{meetingdisccussionerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Meeting Type :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={meeting_type} onChange={(e)=>setMeeting_Type(e.target.value)} className='form-control'>
                                        <option>Select Meeting Type</option>
                                            <option value="Call">Call</option>
                                            <option value="Meeting">Meeting</option>
                                        </select>
                                        {meetingtypeerror&& <div className="error-msg" style={{color:"red"}}>{meetingtypeerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary' onClick={updateMeeting}>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditMeeting;
    