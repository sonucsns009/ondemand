import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditRequirement_Details() {
    const [requirement_id,setRequirement_Id]=useState("");
    const [requirementiderror,setRequirementIdError]=useState(false);

    const [requirement_point, setRequirement_Point]=useState("");
    const [requirementpointerror, setRequirementPointError]=useState(false);

    const params = useParams();
    const navigate = useNavigate();
    const [requirement, setRequirement] = useState([]);
      useEffect(()=>{
        getRequirement();
      },[])
    
      const getRequirement = async() => {
        let result = await fetch("http://localhost:5000/api/v1/requirement");
        result = await result.json();
        setRequirement(result);
        }
      //console.log(requirement);
    
      
    useEffect(()=>{
        getRequirementDeatils();
    }, [])
    const getRequirementDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/requirementdetails/${params.id}`);
        result = await result.json();
        console.warn(result);
        setRequirement_Id(result[0].requirement_id);
        setRequirement_Point(result[0].requirement_point);
    }
    
    const updateRequirementDetails = async(e) =>{
        e.preventDefault();
        if(requirement_id!==''){
        } else{
            setRequirementIdError('Requirement Id is required');
        }
        if(requirement_point===''){
        setRequirementPointError('Requirement Point is required');
        } 
         else{
            setRequirementIdError(false)
            setRequirementPointError(false)
            let result = await fetch(`http://localhost:5000/api/v1/requirementdetails/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ requirement_id, requirement_point }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/requirementdetails');
            }
        }   
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Requirement Details</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/requirementdetails">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">                
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Requirement :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={requirement_id} onChange={(e)=>setRequirement_Id(e.target.value)} className='form-control'>
                                        <option>Select Customer</option>
                                        {
                                                requirement.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.requirement_id}>{item.requirement_id}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {requirementiderror&& <div className="error-msg" style={{color:"red"}}>{requirementiderror}</div>}
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
                                        <button type='submit' className='btn btn-primary' onClick={updateRequirementDetails}>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditRequirement_Details;
    