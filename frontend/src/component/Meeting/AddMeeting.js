import React, { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
import {useFormik} from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    customer_id: Yup.string()
    .required('Customer must be is Required'),
    call_id: Yup.string()
    .required("Call must be is required"),
    attend_meeting_emp_name: Yup.string()
    .required("Employee Name is required"),
    meeting_title:  Yup.string()
    .matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed")
    .required("Meeting Title is required"),
    meeting_datetime:  Yup.string()
    .required("Meeting Datetime is required"),
    meeting_disccussion:  Yup.string()
    .min(20, "Meeting Disccussion must be 20 characters at minimum")
    .max(50, 'Meeting Disccussion must be 50 characters or less')
    .matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed")
    .required("Meeting Disccussion is required"),
    meeting_type:  Yup.string()
    .required("Meeting Type is required"),
    
  });

function AddMeeting() {
    const [success, setSuccess] = useState(null);
    const [customer, setCustomer] = useState([]);
    const [call, setCall] = useState([]);
    const [employee, setEmployee] = useState([]);

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

    
    
    const onSubmit = async(values) => {
        const {...data} =values;

        const respone = axios.post("http://localhost:5000/api/v1/meeting",data).catch((err)=>{
            if(err && err.respone)
            console.log("Error", err);
        });
        if(respone && respone.data){
            setSuccess(respone.data.message)
        }
        formik.resetForm();
    }    
    
    const formik = useFormik({
        // initialValues:{customer_id: "", call_id: "", attend_meeting_emp_name: "", meeting_title: "", meeting_datetime: "", meeting_disccussion: "", meeting_type:""},
        validateOnBlur:true,
        onSubmit,
        validationSchema:validationSchema,
        initialValues:{customer_id:"", call_id:"", attend_meeting_emp_name:"", meeting_title:"",meeting_datetime:"", meeting_disccussion:"", meeting_type:""}
    });

    console.log("Error: ",formik.errors);
        
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Meeting</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/meeting">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">
                                <div style={{color:"#28a828"}}>{success ? success :""}</div>   
                            <form onSubmit={formik.handleSubmit}>                              
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Customer :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" 
                                        name="customer_id" 
                                        value={formik.values.customer_id} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className='form-control'>
                                            <option>Select Customer</option>
                                           {
                                               customer.map((item, index)=>{
                                                   return(
                                                    <option key={index} value={item.customer_id}>{item.customer_name}</option>
                                                   )
                                               })
                                           }
                                        </select>
                                        <div style={{color:"red"}}>{formik.touched.customer_id && formik.errors.customer_id ? formik.errors.customer_id : ""}</div>
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Select Call :- </div>
                                    <div className='col-sm-6'>
                                        <select type="email" 
                                        name="call_id" 
                                        value={formik.values.call_id} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className='form-control'>
                                            <option>Select Call</option>
                                        {
                                            call.map((item, index)=>{
                                                return(
                                                    <option key={index} value={item.call_id}>{item.call_id}</option>
                                                )
                                            })
                                        }
                                        </select>
                                        <div style={{color:"red"}}>{formik.touched.call_id && formik.errors.call_id ? formik.errors.call_id : ""}</div>
                                    </div>
                                </div>
                        
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Select Employee:- </div>
                                    <div className='col-sm-6'>
                                        <select type="number"
                                         name="attend_meeting_emp_name" 
                                         value={formik.values.attend_meeting_emp_name} 
                                         onChange={formik.handleChange} 
                                         onBlur={formik.handleBlur}
                                         className='form-control'>
                                         <option>Select Employee</option>
                                            {
                                               employee.map((item, index)=>{
                                                   return(
                                                    <option key={index} value={item.employee_name}>{item.employee_name}</option>
                                                   )
                                               })
                                           }
                                        </select>   
                                        <div style={{color:"red"}}>{formik.touched.attend_meeting_emp_name && formik.errors.attend_meeting_emp_name ? formik.errors.attend_meeting_emp_name : ""}</div>
                                    </div>
                                </div> 

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Meeting Title :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" 
                                        name="meeting_title" 
                                        value={formik.values.meeting_title} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className='form-control'/>
                                        <div style={{color:"red"}}>{formik.touched.meeting_title && formik.errors.meeting_title ? formik.errors.meeting_title : ""}</div>
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Meeting Datetime :- </div>
                                    <div className='col-sm-6'>
                                        <input type="datetime-local" 
                                        name="meeting_datetime" 
                                        value={formik.values.meeting_datetime} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className='form-control'/>
                                        <div style={{color:"red"}}>{formik.touched.meeting_datetime && formik.errors.meeting_datetime ? formik.errors.meeting_datetime : ""}</div>
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Meeting Disccussion :- </div>
                                    <div className='col-sm-6'>
                                        <textarea type="text" 
                                        name="meeting_disccussion" 
                                        value={formik.values.meeting_disccussion} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className='form-control'></textarea>
                                        <div style={{color:"red"}}>{formik.touched.meeting_disccussion && formik.errors.meeting_disccussion ? formik.errors.meeting_disccussion : ""}</div>
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Meeting Type :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" 
                                        name="meeting_type" 
                                        value={formik.values.meeting_type} 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        className='form-control'>
                                            <option>Select Meeting Type</option>
                                            <option value="Call">Call</option>
                                            <option value="Meeting">Meeting</option>
                                        </select>
                                        <div style={{color:"red"}}>{formik.touched.meeting_type && formik.errors.meeting_type ? formik.errors.meeting_type : ""}</div>
                                    </div>
                                </div>
                                 
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' disabled={!formik.isValid} className='btn btn-primary'>Add </button>
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

export default AddMeeting;