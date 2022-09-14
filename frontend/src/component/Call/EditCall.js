import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";
//import axios from 'axios';


function EditCall() {

    const [customer_name,setCustomer_Name]=useState("");
    const [customernameerror, setCustomerNameError] = useState(false);

    const [employee_name, setEmployee_Name]= useState("");
    const [employeenameerror, setEmployeeNameError] = useState(false);

    const [lead_title, setLead_Title] = useState("");
    const [leadtitleerror, setLeadTitleError] = useState(false);

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
      const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getCallDeatils();
    }, [])

    const getCallDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/call/${params.id}`);
        result = await result.json();
        //console.warn(result);
        setCustomer_Name(result[0].customer_name);
        setEmployee_Name(result[0].employee_name);
        setLead_Title(result[0].lead_title);
        setCall_Datetime(result[0].call_datetime);
        //setNext_Datetime(result[0].next_datetime);
        setMessage(result[0].message);
        setNote(result[0].note);
        setCall_Type(result[0].call_type);
    }
    
    
    const updateCall = async(e) =>{
        e.preventDefault();
        if(customer_name!==''){
            
        } else{
            setCustomerNameError('Customer name is required');
        }
        if(employee_name!==''){

        } else{
            setEmployeeNameError('Employee name is required');
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
        if(call_datetime!==''){

        } else{
            setCallDatetimeError('Call Date is required');
        }
        // if(next_datetime!==''){

        // } else{
        //     setNextDatetimeError('Call Next Date is required');
        // }
        if(call_type===''){
            setCallTypeError('Call Type is required');
        } else{
            setCustomerNameError(false)
            setEmployeeNameError(false)
            setLeadTitleError(false)
            setCallTypeError(false)
            setCallDatetimeError(false)
            setMessageError(false)
           // setNextDatetimeError(false)
            setNoteError(false)
            let result = await fetch(`http://localhost:5000/api/v1/call/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({customer_name, employee_name, lead_title, call_datetime, call_type, note, message}),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/call');
            }
        }
    }
        return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Call</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/call">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
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
                                        <input type="text" value={next_datetime} onChange={(e)=>setNext_Datetime(e.target.value)} className='form-control'/>
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
                                <div className="row form-group"> 
                                    <div className='col-sm-2'>
                                    
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' onClick={updateCall} className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditCall;
    