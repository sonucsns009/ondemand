import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditUser() {
    const [call_id, setCall_Id]=useState("");
    const [calliderror, setCallIdError]=useState(false);

    const [call, setCall] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    
      
    useEffect(()=>{
        getRequirementDeatils();
    }, [])
    const getRequirementDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/reminder/${params.id}`);
        result = await result.json();
        console.warn(result);
        setCall_Id(result[0].call_id);
    }

    useEffect(()=>{
        getCall();
      },[])
    
      const getCall = async() => {
        let result = await fetch("http://localhost:5000/api/v1/call");
        result = await result.json();
        setCall(result);
        }
      //console.log(call);
    
    const updateReminder = async(e) =>{
        e.preventDefault();
        if(call_id===''){
            setCallIdError('Call Id is required');
        } 
         else{
            setCallIdError(false)
            let result = await fetch(`http://localhost:5000/api/v1/reminder/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ call_id }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/reminder');
            }
        }   
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Reminder</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/reminder">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
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
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary' onClick={updateReminder}>Add </button>
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
    