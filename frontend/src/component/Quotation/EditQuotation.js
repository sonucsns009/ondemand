import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditUser() {
    const [customer_id,setCustomer_Id]=useState("");
    const [customeriderror,setCustomerIdError]=useState("");

    const [call_id, setCall_Id]=useState("");
    const [calliderror, setCallIdError]=useState("");

    const [lead_id,setLead_Id]=useState("");
    const [leadiderror,setLeadIdError]=useState("");

    const [customer, setCustomer] = useState([]);
    const [call, setCall] = useState([]);
    const [lead, setLead] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
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
        getLead();
      },[])
    
      const getLead = async() => {
        let result = await fetch("http://localhost:5000/api/v1/lead");
        result = await result.json();
        setLead(result);
        }
      //console.log(lead);
    

    useEffect(()=>{
        getQuotationDeatils();
    }, [])
    const getQuotationDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/quotation/${params.id}`);
        result = await result.json();
        console.warn(result);
        setCall_Id(result[0].call_id);
        setCustomer_Id(result[0].customer_id);
        setLead_Id(result[0].lead_id);
    }
    
    const updateQuotation = async(e) =>{
        e.preventDefault();
        if(customer_id!==''){
            
        } else{
            setCustomerIdError('Customer Id is required');
        }
        if(call_id!==''){
           
        } else{
            setCallIdError('Call Id is required');
        }
        if(lead_id===''){
            setLeadIdError('Lead Id is required');
        } else{
            setCallIdError(false)
            setCustomerIdError(false)
            setLeadIdError(false)
            let result = await fetch(`http://localhost:5000/api/v1/quotation/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ call_id, customer_id, lead_id }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/quotation');
            }
        }   
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Quotation</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/quotation">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Customer :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={customer_id} onChange={(e)=>setCustomer_Id(e.target.value)} className='form-control'>
                                        {/* <option>Select Customer</option> */}
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
                                    <div className='col-sm-3'>Select Call :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={call_id} onChange={(e)=>setCall_Id(e.target.value)} className='form-control'>
                                        {/* <option>Select Call</option> */}
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
                                    <div className='col-sm-3'>Select Lead :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={lead_id} onChange={(e)=>setLead_Id(e.target.value)} className='form-control'>
                                        {/* <option>Select Lead</option> */}
                                        {
                                                lead.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.lead_id}>{item.lead_title}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {leadiderror&& <div className="error-msg" style={{color:"red"}}>{leadiderror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary' onClick={updateQuotation}>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditUser;
    