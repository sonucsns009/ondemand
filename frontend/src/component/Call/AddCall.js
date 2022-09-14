import React,{ useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';


function AddCall() {
    const [customer_name,setCustomer_Name]=useState("");
    const [customernameerror, setCustomerNameError] = useState(false);

    const [employee_name, setEmployee_Name]= useState("");
    const [employeenameerror, setEmployeeNameError] = useState(false);

    const [lead_title, setLead_Title] = useState("");
    const [leadtitleerror, setLeadTitleError] = useState("");

    const [call_datetime,setCall_Datetime]=useState("");
    const [calldatetimeerror, setCallDatetimeError] = useState(false);

    const [message, setMessage] = useState("");
    const [messageerror, setMessageError] = useState("");

    const [note,setNote]=useState("");
    const [noteerror, setNoteError] = useState(false);
    
    // const [next_datetime,setNext_Datetime]=useState("");
    // const [nextdatetimeerror, setNextDatetimeError] = useState(false);

    const [call_type, setCall_Type] = useState("");
    const [calltypeerror, setCallTypeError] = useState("");

    const [customer, setCustomer] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [lead, setLead] = useState([]);
    // const [calltypett,setCallTypett]=useState("");

    // const [attend_meeting_emp_name, setAttend_Meeting_Emp_Name] = useState("");
    // const [attendmeetingempnameerror, setAttendMeetingEmpNameError] = useState(false);

    // const [meeting_title, setMeeting_Title] = useState("");
    // const [meetingtitleerror, setMeetingTitleError] = useState(false);

    // const [meeting_datetime, setMeeting_Datetime] = useState("");
    // const [meetingdatetimeerror, setMeetingDatetimeError] = useState(false);

    // const [meeting_disccussion, setMeeting_Disccussion] = useState("");
    // const [meetingdisccussionerror, setMeetingDisccussionError] = useState(false);

    // const [meeting_type, setMeeting_Type] = useState("");
    // const [meetingtypeerror, setMeetingTypeError] = useState(false);

    // const [call_id,setCall_Id] = useState("");
    // const [calliderror, setCallIdError] = useState(false);
    // const [call, setCall] = useState([]);

    // useEffect(()=>{
    //     getCall();
    //   },[])
    
    //   const getCall = async() => {
    //     let result = await fetch("http://localhost:5000/api/v1/call");
    //     result = await result.json();
    //     setCall(result);
    //     }
      //console.log(call);

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
        getEmployee();
      },[])
    
      const getEmployee = async() => {
        let result = await fetch("http://localhost:5000/api/v1/employee");
        result = await result.json();
        setEmployee(result);
        }
      //console.log(employee);
      
      useEffect(()=>{
        getLead();
      },[])
    
      const getLead = async() => {
        let result = await fetch("http://localhost:5000/api/v1/lead");
        result = await result.json();
        setLead(result);
        }
      //console.log(lead);

    //   const handleCallTypeChange = (e) =>{
        
    //     let call_type=e.target.value;
    //     setCallTypeError('');
    //     setCall_Type(e.target.value);
       
    //     console.warn(call_type);

    //     if(call_type==="Call")
    //     {
    //         setCallTypett(call_type);
    //     }
    //     else if(call_type==="Meeting")
    //     {
    //         setCallTypett(call_type);
    //     }
    //     else
    //     {
    //         setCallTypett(false);
    //     }
    // }
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(customer_name!==''){
            
        } else{
            setCustomerNameError('Customer Id is required');
        }
        if(employee_name!==''){

        } else{
            setEmployeeNameError('Employee Id is required');
        }
        if(lead_title!==''){

        } else {
            setLeadTitleError('Select the Lead Id');
        }
        if(message!==''){
            if (!/^[A-Za-z]+/.test(message.trim())) {
                setMessageError('Enter a valid message');
            }
        } else{
            setMessageError('Call Message is required');
        }
        if(note!==''){

        } else{
            setNoteError('Call Note is required');
        }
         
       if(call_type!==''){
        setCall_Type('Call type required')
       }
       
        if(call_datetime===''){
            setCallDatetimeError('Call Date is required');
        } else{
            setCustomerNameError(false)
            setEmployeeNameError(false)
            setLeadTitleError(false)
            setCallTypeError(false)
            setCallDatetimeError(false)
            setMessageError(false)
            //setNextDatetimeError(false)
            setNoteError(false)
            // setMeetingDatetimeError(false)
            // setMeetingDisccussionError(false)
            // setMeetingTitleError(false)
            // setAttendMeetingEmpNameError(false)
            // setMeetingTypeError(false)
            // setCallIdError(false)
            axios.post("http://localhost:5000/api/v1/call", 
            { customer_name: customer_name, employee_name: employee_name, lead_title: lead_title, call_datetime:call_datetime, call_type:call_type, note:note, message:message,
             method: "Post",
            body: JSON.stringify({customer_name, employee_name, lead_title, call_datetime, call_type, note, message}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                return respone.json();
               
            }).catch((error)=>{
                console.log(error);
            });
            setCustomer_Name("");
            setEmployee_Name("");
            setLead_Title("");
            setMessage("");
            //setNext_Datetime("")
            setNote("");
            setCall_Datetime("");
            setCall_Type("");
           // setAttend_Meeting_Emp_Name("");
            // setMeeting_Disccussion("");
            // setMeeting_Datetime("");
            // setMeeting_Title("");
            // setMeeting_Type("");
            // setCall_Id("");
        }
    }
    
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Call</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/call">Back</Link>
                                    </div>
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <form onSubmit={handleSubmit}>  
                            <div className="row form-group">     
                                    <div className='col-sm-3'>Select Lead :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" value={lead_title} onChange={(e)=>setLead_Title(e.target.value)} className='form-control'>
                                            <option>Select Lead</option>
                                            {
                                                lead.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.lead_title}>{item.lead_title}</option>
                                                    )
                                                })
                                            }
                                            
                                        </select>
                                        {leadtitleerror&& <div className="error-msg" style={{color:"red"}}>{leadtitleerror}</div>}
                                    </div>
                                </div>
                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Customer :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" value={customer_name} onChange={(e)=>setCustomer_Name(e.target.value)} className='form-control'>
                                            <option>Select Customer</option>
                                            {
                                                customer.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.customer_name}>{item.customer_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {customernameerror&& <div className="error-msg" style={{color:"red"}}>{customernameerror}</div>}
                                    </div>
                                </div>    
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Employee :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" value={employee_name} onChange={(e)=>setEmployee_Name(e.target.value)} className='form-control'>
                                            <option>Select Employee</option>
                                            {
                                                employee.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.employee_name}>{item.employee_name}</option>
                                                    )
                                                })
                                            }  
                                        </select>
                                        {employeenameerror&& <div className="error-msg" style={{color:"red"}}>{employeenameerror}</div>}
                                    </div>
                                </div>           
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Message :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} className='form-control'/>
                                        {messageerror&& <div className="error-msg" style={{color:"red"}}>{messageerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Note :- </div>
                                    <div className='col-sm-6'>
                                        <textarea type="text" value={note} row="6" onChange={(e)=>setNote(e.target.value)} className='form-control'></textarea>
                                        {noteerror&& <div className="error-msg" style={{color:"red"}}>{noteerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Datetime :- </div>
                                    <div className='col-sm-6'>
                                        <input type="datetime-local" value={call_datetime} onChange={(e)=>setCall_Datetime(e.target.value)} className='form-control'/>
                                        {calldatetimeerror&& <div className="error-msg" style={{color:"red"}}>{calldatetimeerror}</div>}
                                    </div>
                                </div>
                                {/* <div className="row form-group">     
                                    <div className='col-sm-3'>Call NextDatetime :- </div>
                                    <div className='col-sm-6'>
                                        <input type="datetime-local" value={next_datetime} onChange={(e)=>setNext_Datetime(e.target.value)} className='form-control'/>
                                        {nextdatetimeerror&& <div className="error-msg" style={{color:"red"}}>{nextdatetimeerror}</div>}
                                    </div>
                                </div> */}

                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Call Type :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={call_type} onChange={(e)=>setCall_Type(e.target.value)} className='form-control'>
                                        <option>Select Call Type</option>
                                            <option value="Call">Call</option>
                                            <option value="Meeting">Meeting</option>
                                        </select>
                                        {calltypeerror&& <div className="error-msg" style={{color:"red"}}>{calltypeerror}</div>}
                                    </div>
                                </div>
                                {/* {
                                    calltypett==="Meeting"?
                                    <div> 
                                        <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Employee :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" value={attend_meeting_emp_name} onChange={(e)=>setAttend_Meeting_Emp_Name(e.target.value)} className='form-control'>
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
                                        <select type="text" value={meeting_type} onChange={(e)=>setMeeting_Type(e.target.value)} className='form-control'>
                                        <option>Select Meeting Type</option>
                                            <option value="Call">Call</option>
                                            <option value="Meeting">Meeting</option>
                                        </select>
                                        {meetingtypeerror&& <div className="error-msg" style={{color:"red"}}>{meetingtypeerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Call :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={call_id} onChange={(e)=>setCall_Id(e.target.value)} className='form-control'>
                                        <option>Select Call</option>
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
                                    </div>
                                    :calltypett==="Call"?
                                        "":""
                                } */}
                                <div className="row form-group"> 
                                    <div className='col-sm-2'>
                                    
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary'>Add </button>
                                    </div>
                                </div>

                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default AddCall;