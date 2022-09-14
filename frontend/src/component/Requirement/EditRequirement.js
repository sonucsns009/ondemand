import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditUser() {
    const [customer_name,setCustomer_Name]=useState("");
    const [customernameerror,setCustomerNameError]=useState("");

    const [call_id, setCall_Id]=useState("");
    const [calliderror, setCallIdError]=useState("");

    const [requirement_point, setRequirement_Point]=useState("");
    const [requirementpointerror, setRequirementPointError]=useState(false);

    const [customer, setCustomer] = useState([]);
    const [call, setCall] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getRequirementDeatils();
    }, [])
    const getRequirementDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/requirement/${params.id}`);
        result = await result.json();
        console.warn(result);
        setCall_Id(result[0].call_id);
        setCustomer_Name(result[0].customer_name);
        setRequirement_Point(result[0].requirement_point);
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
    
    const updateRequirement = async(e) =>{
        e.preventDefault();
        if(customer_name!==''){
            
        } else{
            setCustomerNameError('Customer Name is required');
        }
        if(requirement_point!==''){
            
        } else{
            setRequirementPointError('Requirement Point is required');
        }
        if(call_id===''){
            setCallIdError('Call Id is required');
        } 
         else{
            setCallIdError(false)
            setCustomerNameError(false)
            setRequirementPointError(false)
            let result = await fetch(`http://localhost:5000/api/v1/requirement/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({customer_name, call_id, requirement_point }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/requirement');
            }
        }   
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Requirement</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/requirement">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Customer :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={customer_name} onChange={(e)=>setCustomer_Name(e.target.value)} className='form-control'>
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
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Requirement Point :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={requirement_point} onChange={(e)=>setRequirement_Point(e.target.value)} className='form-control'/>
                                        {requirementpointerror&& <div className="error-msg" style={{color:"red"}}>{requirementpointerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary' onClick={updateRequirement}>Add </button>
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
    