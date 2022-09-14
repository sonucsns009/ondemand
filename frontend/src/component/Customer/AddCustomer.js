import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';

function AddCustomer() {

    const [customer_name,setCustomer_Name]=useState("");
    const [customernameerror, setCustomerNameError] = useState(false);

    const [customer_email,setCustomer_Email]=useState("");
    const [customeremailerror,setCustomerEmailError]=useState(false);
    
    const [contactFields, setContactFields] = useState([
        {contact: "", contact_type: ""}
    ]);

    const [contactfieldserror, setContactFieldsError] = useState(false);
    const [addressfieldserror, setAddressFieldsError] = useState(false);

    const [addressFields, setAddressFields] = useState([
        {address: "", address_type: ""}
    ]);

    const handleChangeContact = (index, e) => {
        const values =[...contactFields];
        values[index][e.target.name]= e.target.value;
        setContactFields(values);
    }
    const handleChangeAddress = (index, e) => {
        const values =[...addressFields];
        values[index][e.target.name]= e.target.value;
        setAddressFields(values);
    }

    const addcontact = () => {
        setContactFields([...contactFields, {contact: "", contact_type: ""}])
    }
    const addaddress = () => {
        setContactFields([...addressFields, {address: "", address_type: ""}])
    }

    const removecontact = (index) => {
        const values = [...contactFields];
        values.splice(index, 1);
        setContactFields(values);
    }
    const removeaddress = (index) => {
        const values = [...addressFields];
        values.splice(index, 1);
        setAddressFields(values);
    }

    const handleSubmit = (e, values) => {
        e.preventDefault();
       // const {...data} =values;
       if(customer_name===''){
        setCustomerNameError('Customer Name is required');
        
    } else if (!/^[A-Za-z]+/.test(customer_name.trim())) {
        setCustomerNameError('Enter a valid name');
    }
    else if(customer_email===''){
        setCustomerEmailError('Customer Email is required');
        
    } else if (!/\S+@\S+\.\S+/.test(customer_email)) {
        setCustomerEmailError('Customer Email not valid');
    } else if(contactFields===""){
        setContactFieldsError('Contact Fields required');
    } else if(addressFields===""){
        setAddressFieldsError("Address Fields required");
    }
    else{
        
        let contactall=contactFields;
        let addressall=addressFields;
        console.log(contactall,  addressall, customer_email, customer_name);
            setCustomerEmailError(false)
            setCustomerNameError(false)
           
            axios.post("http://localhost:5000/api/v1/customer", 
            { customer_name, customer_email, contactall, addressall,
            method: "Post",
            body: JSON.stringify({customer_name, customer_email, contactall, addressall }),
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
            setCustomer_Email("");
            setContactFields([{contact:"", contact_type:""}]);
            setAddressFields([{address: "", address_type:""}]);
    }
}
        
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Customer</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/customer">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">
                                {/* <div style={{color:"#28a828"}}>{success ? success :""}</div>    */}
                            <form onSubmit={handleSubmit}>                              
                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Customer Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={customer_name} onChange={(e)=>setCustomer_Name(e.target.value)} className='form-control'/>
                                        {customernameerror&& <div className="error-msg" style={{color:"red"}}>{customernameerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Customer Email :- </div>
                                    <div className='col-sm-6'>
                                        <input type="email" value={customer_email} onChange={(e)=>setCustomer_Email(e.target.value)} className='form-control'/>
                                        {customeremailerror&& <div className="error-msg" style={{color:"red"}}>{customeremailerror}</div>}
                                    </div>
                                </div>
                                {
                                    contactFields.map((item, index)=>{
                                        return(
                                            <div key={index}>
                                            <div className="row form-group" >     
                                            <div className='col-sm-3'>Customer Contact:- </div>
                                            <div className='col-sm-3'>
                                                <select type="text" 
                                                    className='form-control'
                                                    name="contact_type"
                                                    value={item.contact_type}
                                                    onChange={e=>handleChangeContact(index, e)}>
                                                    <option>Select Contact Type</option>
                                                    <option value="home">home</option>
                                                    <option value="office">office</option>
                                                    <option value="others">others</option>
                                                </select>
                                            </div>
                                                <div className='col-sm-3'>
                                                    <input type="number"
                                                    name="contact" 
                                                    value={item.contact} 
                                                    onChange={e=>handleChangeContact(index, e)}
                                                    className='form-control'/>  
                                                {contactfieldserror&& <div className="error-msg" style={{color:"red"}}>{contactfieldserror}</div>}

                                                </div>
                                            </div>   
                                        </div>   
                                    )}
                                    )
                                }
                                <div className="row form-group">    
                                    <div className='col-lg-12 '>
                                    <button className='btn btn-primary' type="button" onClick={addcontact}><i className='fa fa-plus'></i> </button>
                                    <button className='btn btn-primary mx-2' type="button" onClick={removecontact}><i className='fa fa-minus'></i> </button>
                                    </div>
                                </div>

                                {
                                    addressFields.map((item, index)=>{
                                        return(
                                            <div key={index}>
                                            <div className="row form-group" >     
                                            <div className='col-sm-3'>Customer Address:- </div>
                                            <div className='col-sm-3'>
                                                <select type="text" 
                                                    className='form-control'
                                                    name="address_type"
                                                    value={item.address_type}
                                                    onChange={e=>handleChangeAddress(index, e)}>
                                                    <option>Select Address Type</option>
                                                    <option value="home">home</option>
                                                    <option value="office">office</option>
                                                    <option value="others">others</option>
                                                </select>
                                            </div>
                                                <div className='col-sm-3'>
                                                    <textarea type="text"
                                                    name="address" 
                                                    value={item.address} 
                                                    onChange={e=>handleChangeAddress(index, e)}
                                                    className='form-control'></textarea> 
                                                    {addressfieldserror&& <div className="error-msg" style={{color:"red"}}>{addressfieldserror}</div>}
                                                </div>
                                            </div>   
                                        </div>   
                                    )}
                                    )
                                }
                                <div className="row form-group">    
                                    <div className='col-lg-12 '>
                                    <button className='btn btn-primary' type="button" onClick={addaddress}><i className='fa fa-plus'></i> </button>
                                    <button className='btn btn-primary mx-2' type="button" onClick={removeaddress}><i className='fa fa-minus'></i> </button>
                                    </div>
                                </div>
                                
                                <div className="row form-group"> 
                                    <div className='col-sm-2'>
                                    
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' 
                                        onClick={handleSubmit}
                                        className='btn btn-primary'>Add </button>
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

export default AddCustomer;