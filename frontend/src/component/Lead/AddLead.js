import React,{ useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';

function AddLead() {
    const [lead_title,setLead_title]=useState("");
    const [leadtitleerror,setLeadTitleError]=useState(false);

    const [lead_shortdescription,setLead_ShortDescription]=useState("");
    const [leadshortdescriptionerror,setLeadShortDescriptionError]=useState(false);

    const [addedby, setAddedby]=useState("");
    const [addedbyerror, setAddedbyError]=useState(false);

    const [lead_type,setLead_Type]=useState("");
    const [leadtypeerror,setLeadTypeError]=useState(false); 

    const [customer_name,setCustomer_Name]=useState("");
    const [customernameerror, setCustomerNameError] = useState(false);

    const [customer_email,setCustomer_Email]=useState("");
    const [customeremailerror,setCustomerEmailError]=useState(false);

    const [customer_contact, setCustomer_Contact] = useState("");
    const [customercontacterror, setCustomerContactError] = useState(false);

    const [company_name,setCompany_Name]=useState("");
    const [companynameerror, setCompanyNameError] = useState(false);

    const [company_email,setCompany_Email]=useState("");
    const [companyemailerror,setCompanyEmailError]=useState(false);

    const [company_contact, setCompany_Contact] = useState("");
    const [companycontacterror, setCompanyContactError] = useState(false);

    const [company_list, setCompany_List] = useState("");
    const [companylisterror, setCompanyListError] = useState(false);

    const [customer_list, setCustomer_List] = useState("");
    const [customerlisterror, setCustomerListError] = useState(false);

    const [employee, setEmployee] = useState([]);
    const [company, setCompany] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [leadtypett,setLeadTypett]=useState("");
    // const [leadtypeselect, setLeadTypeSelect] = useState("");

    useEffect(()=>{
        getemployee();
    },[])

    const getemployee = async() =>{
        let result = await fetch("http://localhost:5000/api/v1/employee");
        result = await result.json();
        setEmployee(result);
    }
    //console.log(employee);
    useEffect(()=>{
        getCompany();
    },[])

    const getCompany = async() =>{
        let result = await fetch("http://localhost:5000/api/v1/company");
        result = await result.json();
        setCompany(result);
    }
    //console.log(company);
    useEffect(()=>{
        getCustomer();
    },[])

    const getCustomer = async() =>{
        let result = await fetch("http://localhost:5000/api/v1/customer");
        result = await result.json();
        setCustomer(result);
    }
    //console.log(customer);

    const handleLeadTypeChange = (e) =>{
        
        let lead_type=e.target.value;
        setLeadTypeError('');
        setLead_Type(e.target.value);
       
        console.warn(lead_type);

        if(lead_type==="Company")
        {
            setLeadTypett(lead_type);
        }
        else if(lead_type==="Indivisual")
        {
            setLeadTypett(lead_type);
        }
        else
        {
            setLeadTypett(false);
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(lead_title!==''){
            if (!/^[A-Za-z]+/.test(lead_title.trim())) {
                setLeadTitleError('Enter a valid name');
            }
        } else{
            setLeadTitleError('Lead Name is required');
        }
        if(lead_shortdescription!==''){
            if (!/^[A-Za-z]+/.test(lead_shortdescription.trim())) {
                setLeadShortDescriptionError('Enter a valid Description');
            }
        } else{
            setLeadShortDescriptionError('Lead Description is required');
        }
        if(lead_type==="Company")
            {
                if(company_list!==''){

                } else{
                    setCompanyListError('Select Company list');
                }
                if(company_name!==''){
                    if (!/^[A-Za-z]+/.test(company_name.trim())) {
                        setCompanyNameError('Enter a valid name');
                    }
                } else{
                    setCompanyNameError('Enter Company name');
                }
                if(company_email!==''){
                    if (!/\S+@\S+\.\S+/.test(company_email)) {
                    setCompanyEmailError('Company Email not valid');
                    }
                } else{
                    setCompanyEmailError('Company Email is required');
                }
                if(company_contact!==''){
                    if (company_contact.length === 10) {
                        setCompanyContactError('Password needs to be 10 characters');
                    }
                } else{
                    setCompanyContactError('Enter Company Contact');
                }  
            }
            else  if(lead_type==="Indivisual")
            {
                if(customer_list!==''){

                } else{
                    setCustomerListError('Select Customer list');
                }
                if(customer_name!==''){
                    if (!/^[A-Za-z]+/.test(customer_name.trim())) {
                        setCustomerNameError('Enter a valid name');
                    }
                } else{
                    setCustomerNameError('Customer Name is required');
                }
                if(customer_email!==''){
                    if (!/\S+@\S+\.\S+/.test(customer_email)) {
                    setCustomerEmailError('Customer Email not valid');
                    }
                } else{
                    setCustomerEmailError('Customer Email is required');
                }
                if(customer_contact!==''){
                    if (customer_contact.length === 10) {
                        setCustomerContactError('Password needs to be 10 characters');
                    }
                } else{
                    setCustomerContactError('Customer Contact is required');
                }
                
            }
        if(addedby===''){
            setAddedbyError('Addedby is required');
        } else{
            setAddedbyError(false)
            setLeadShortDescriptionError(false)
            setLeadTypeError(false)
            setLeadTitleError(false)
            setCustomerNameError(false)
            setCustomerEmailError(false)
            setCustomerContactError(false)
            setCompanyNameError(false)
            setCompanyEmailError(false)
            setCompanyContactError(false)
            setCompanyListError(false)
            setCustomerListError(false)
            let customer_id;
            //let company_id;

            if(customer_list > 0){
                customer_id=customer_list;
            } else{
                customer_id=company_list;
            }
            axios.post("http://localhost:5000/api/v1/lead", 
            { lead_title: lead_title, lead_type: lead_type, lead_shortdescription: lead_shortdescription, addedby: addedby, customer_id:customer_id, customer_name:customer_name, customer_email:customer_email, customer_contact:customer_contact ,company_name:company_name, company_email:company_email, company_contact:company_contact, 
             method: "Post",
            body: JSON.stringify({lead_title, lead_shortdescription, addedby, lead_type, customer_id, customer_name, customer_email, customer_contact,company_name, company_email, company_contact}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                return respone.json();
               
            }).catch((error)=>{
                console.log(error);
            });
            setLead_Type("");
            setLead_title("");
            setLead_ShortDescription("");
            setAddedby("");
            setCustomer_Name("");
            setCustomer_Email("");
            setCustomer_Contact("");
            setCompany_Name("");
            setCompany_Email("");
            setCompany_Contact("");
            setCustomer_List("");
            setCompany_List("");
        }     
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                            <h5>Add Lead</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/lead">Back</Link>
                                    </div>
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <form onSubmit={handleSubmit}>                
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Lead Title :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={lead_title} onChange={(e)=>setLead_title(e.target.value)} className='form-control'/>
                                        {leadtitleerror&& <div className="error-msg" style={{color:"red"}}>{leadtitleerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Lead ShortDescription :- </div>
                                    <div className='col-sm-6'>
                                        <textarea type="text" value={lead_shortdescription} onChange={(e)=>setLead_ShortDescription(e.target.value)} row="6" className='form-control'></textarea>
                                        {leadshortdescriptionerror&& <div className="error-msg" style={{color:"red"}}>{leadshortdescriptionerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Addedby:- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={addedby} onChange={(e)=>setAddedby(e.target.value)} className='form-control'>
                                        <option>Select Employee</option>
                                           {
                                               employee.map((item, index)=>{
                                                   return(
                                                    <option key={index} value={item.employee_name}>{item.employee_name}</option>
                                                   )
                                               })
                                           }
                                        </select>
                                        {addedbyerror&& <div className="error-msg" style={{color:"red"}}>{addedbyerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Lead Type :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={lead_type} onChange={handleLeadTypeChange} className='form-control'>
                                        <option>Select Lead Type</option>
                                            <option value="Company">Company</option>
                                            <option value="Indivisual">Indivisual</option>
                                        </select>
                                        {leadtypeerror&& <div className="error-msg" style={{color:"red"}}>{leadtypeerror}</div>}
                                    </div>
                                </div>
                                
                                {leadtypett==="Company"?
                                <div id="cmp_lead" >
                                  <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Company List:- </div>
                                        <div className='col-sm-6'>
                                            <select type="number" value={company_list} onChange={(e)=>setCompany_List(e.target.value)} className='form-control'>
                                            <option value={"0"}>Select Company</option>
                                            {
                                                company.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.company_id}>{item.company_name}</option>
                                                    )
                                                })
                                            }
                                            </select>
                                            {companylisterror&& <div className="error-msg" style={{color:"red"}}>{companylisterror}</div>}
                                        </div>
                                    </div>
                                    {
                                    company_list==="0"?
                                    <div><div className="row form-group">     
                                    <div className='col-sm-3 '>Company Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={company_name} onChange={(e)=>setCompany_Name(e.target.value)} className='form-control'/>
                                        {companynameerror&& <div className="error-msg" style={{color:"red"}}>{companynameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Company Email :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={company_email} onChange={(e)=>setCompany_Email(e.target.value)} className='form-control'/>
                                        {companyemailerror&& <div className="error-msg" style={{color:"red"}}>{companyemailerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Company Contact :- </div>
                                    <div className='col-sm-6'>
                                        <input type="number" value={company_contact} onChange={(e)=>setCompany_Contact(e.target.value)} className='form-control'/>
                                        {companycontacterror&& <div className="error-msg" style={{color:"red"}}>{companycontacterror}</div>}
                                    </div>
                                </div>
                                </div>
                                :company_list==="others"?
                                <div>
                                <div className="row form-group">     
                                <div className='col-sm-3 '>Company Name :- </div>
                                <div className='col-sm-6'>
                                    <input  type="text" readOnly value={company_name} onChange={(e)=>setCompany_Name(e.target.value)} className='form-control'/>
                                    {companynameerror&& <div className="error-msg" style={{color:"red"}}>{companynameerror}</div>}
                                </div>
                            </div>
                            <div className="row form-group">     
                                <div className='col-sm-3 '>Company Email :- </div>
                                <div className='col-sm-6'>
                                    <input type="text" readOnly value={company_email} onChange={(e)=>setCompany_Email(e.target.value)} className='form-control'/>
                                    {companyemailerror&& <div className="error-msg" style={{color:"red"}}>{companyemailerror}</div>}
                                </div>
                            </div>
                            <div className="row form-group">     
                                <div className='col-sm-3 '>Company Contact :- </div>
                                <div className='col-sm-6'>
                                    <input type="number" readOnly value={company_contact} onChange={(e)=>setCompany_Contact(e.target.value)} className='form-control'/>
                                    {companycontacterror&& <div className="error-msg" style={{color:"red"}}>{companycontacterror}</div>}
                                </div>
                            </div>
                                </div>:""
                                }
                                </div>
                                :leadtypett==="Indivisual"?
                                <div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Customer List :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={customer_list} onChange={(e)=>setCustomer_List(e.target.value)} className='form-control'>
                                        <option value={"0"}>Select Customer</option>
                                        {
                                            customer.map((item, index)=>{
                                                return(
                                                    <option key={index} value={item.customer_id}>{item.customer_name}</option>
                                                )
                                            })
                                        }
                                        </select>
                                        {customerlisterror&& <div className="error-msg" style={{color:"red"}}>{customerlisterror}</div>}
                                    </div>
                                </div>  
                                {customer_list==="0"?
                                <div><div className="row form-group">     
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
                                </div>
                                :customer_list==="others"?
                                <div>
                                <div className="row form-group">     
                                <div className='col-sm-3 '>Customer Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" readOnly value={customer_name} onChange={(e)=>setCustomer_Name(e.target.value)} className='form-control'/>
                                        {customernameerror&& <div className="error-msg" style={{color:"red"}}>{customernameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Customer Email :- </div>
                                    <div className='col-sm-6'>
                                        <input type="email" readOnly  value={customer_email} onChange={(e)=>setCustomer_Email(e.target.value)} className='form-control'/>
                                        {customeremailerror&& <div className="error-msg" style={{color:"red"}}>{customeremailerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Customer Contact:- </div>
                                    <div className='col-sm-6'>
                                        <input type="number" readOnly value={customer_contact} onChange={(e)=>setCustomer_Contact(e.target.value)} className='form-control'/>
                                        {customercontacterror&& <div className="error-msg" style={{color:"red"}}>{customercontacterror}</div>}
                                    </div>
                                </div>
                            </div>:""
                                }
                                </div>:""
                                }
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

export default AddLead;
