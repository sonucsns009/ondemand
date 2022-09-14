import React, { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';


function AddRequirement_Details() {
    const [requirement_id,setRequirement_Id]=useState("");
    const [requirementiderror,setRequirementIdError]=useState(false);

    const [requirement_point, setRequirement_Point]=useState("");
    const [requirementpointerror, setRequirementPointError]=useState(false);

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
      
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        if(requirement_id!==''){
        } else{
            setRequirementIdError('Requirement Id is required');
        }
        if(requirement_point===''){
        setRequirementPointError('Requirement Point is required');
        } else{
            setRequirementIdError(false)
            setRequirementPointError(false)
            axios.post("http://localhost:5000/api/v1/requirementdetails", 
            { requirement_id: requirement_id, requirement_point: requirement_point,
             method: "Post",
            body: JSON.stringify({requirement_id, requirement_point}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                return respone.json();
               
            }).catch((error)=>{
                console.log(error);
            });
            setRequirement_Id("")
            setRequirement_Point("")
        }   
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">   
                            <h5>Add Requirement Details</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/requirementdetails">Back</Link>
                                    </div>
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <form onSubmit={handleSubmit}>             
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

export default AddRequirement_Details;