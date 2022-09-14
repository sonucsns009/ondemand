import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditCustomer() {
      
    const [customer_name,setCustomer_Name]=useState("");
    const [customernameerror, setCustomerNameError] = useState(false);

    const [customer_email,setCustomer_Email]=useState("");
    const [customeremailerror,setCustomerEmailError]=useState(false);

    const [customer_contact, setCustomer_Contact] = useState("");
    const [customercontacterror, setCustomerContactError] = useState(false);

    // const [customer_type,setCustomer_Type]=useState("");
    // const [customertypeerror, setCustomerTypeError] = useState(false);

    // const [customer_profile, setCustomer_Profile] = useState("");
    // const [customerprofileerror, setCustomerProfileError] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getCustomerDetails();
    }, [])

    const getCustomerDetails = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/customer/${params.id}`);
        result = await result.json();
        //console.warn(result);
        setCustomer_Name(result[0].customer_name);
        setCustomer_Email(result[0].customer_email);
        setCustomer_Contact(result[0].customer_contact);
        //setCustomer_Type(result[0].customer_type);
    }

    const updatecustomer = async(e) =>{
        e.preventDefault();
        if(customer_name===''){
            setCustomerNameError('Customer Name is required');
            
        } else if (!/^[A-Za-z]+/.test(customer_name.trim())) {
            setCustomerNameError('Enter a valid name');
        }
        else if(customer_email===''){
            setCustomerEmailError('Customer Email is required');
            
        } else if (!/\S+@\S+\.\S+/.test(customer_email)) {
            setCustomerEmailError('Customer Email not valid');
            
        } else if(customer_contact==='')
        {
            setCustomerContactError('Customer contact is required');

        } else if(customer_contact.length < 10 || customer_contact.length > 10)
        {
            setCustomerContactError('Password needs to be 10 characters');
        } else{
            setCustomerNameError(false)
            setCustomerEmailError(false)
            setCustomerContactError(false)
            //setCustomerTypeError(false)
            let result = await fetch(`http://localhost:5000/api/v1/customer/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ customer_name,  customer_email, customer_contact}),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/customer');
            }
        }
    }
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Customer</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/customer">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
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
                        
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Customer Contact:- </div>
                                    <div className='col-sm-6'>
                                        <input type="number" value={customer_contact} onChange={(e)=>setCustomer_Contact(e.target.value)} className='form-control'/>
                                        {customercontacterror&& <div className="error-msg" style={{color:"red"}}>{customercontacterror}</div>}
                                    </div>
                                </div> 
                        
                                {/* <div className="row form-group">     
                                    <div className='col-sm-3 '>Customer Type :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" value={customer_type} onChange={(e)=>setCustomer_Type(e.target.value)} className='form-control'>
                                        <option>Select Customer Type</option>
                                            <option value="Company">Company</option>
                                            <option value="Indivisual">Indivisual</option>
                                        </select>
                                        {customertypeerror&& <div className="error-msg" style={{color:"red"}}>{customertypeerror}</div>}
                                    </div>
                                </div>  */}

                                 {/*<div className="row form-group">     
                                    <div className='col-sm-3 '>Customer Profile :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={customer_profile} onChange={(e)=>setCustomer_Profile(e.target.value)} className='form-control'/>
                                        {customerprofileerror&& <div className="error-msg" style={{color:"red"}}>{customerprofileerror}</div>}
                                    </div>
                                </div>
                                 */}
                                
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit'onClick={updatecustomer} className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditCustomer;
    