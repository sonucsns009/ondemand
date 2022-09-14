import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditCompany() {
    const [company_name,setCompany_Name]=useState("");
    const [companynameerror, setCompanyNameError] = useState(false);

    const [company_email,setCompany_Email]=useState("");
    const [companyemailerror, setCompanyEmailError] = useState(false);
    const [company_contact,setCompany_Contact]=useState("");
    const [companycontacterror, setCompanyContactError] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getCompanyDeatils();
    }, [])

    const getCompanyDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/company/${params.id}`);
        result = await result.json();
       // console.warn(result);
        setCompany_Name(result[0].company_name);
        setCompany_Email(result[0].company_email);
        setCompany_Contact(result[0].company_contact);
    }
    const updateCompany = async(e) =>{
        e.preventDefault();
        if(company_name===''){
            setCompanyNameError('company Name is required');
            
        } else if (!/^[A-Za-z]+/.test(company_name.trim())) {
            setCompanyNameError('Enter a valid name');
        }
        else if(company_email===''){
            setCompanyEmailError('company Email is required');
            
        } else if (!/\S+@\S+\.\S+/.test(company_email)) {
            setCompanyEmailError('company Email not valid');
            
        } else if(company_contact==='')
        {
            setCompanyContactError('company contact is required');

        } else if(company_contact.length < 10 || company_contact.length > 10)
        {
            setCompanyContactError('Password needs to be 10 characters');
        }
        
         else{
            setCompanyNameError(false)
            setCompanyContactError(false)
            setCompanyEmailError(false)
            let result = await fetch(`http://localhost:5000/api/v1/company/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ company_name, company_email, company_contact }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/company');
                }
            }     
    }

    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Company</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/company">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <div className="row form-group">     
                                    <div className='col-sm-3'>Company Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"
                                         value={company_name} 
                                         onChange={(e)=>setCompany_Name(e.target.value)} 
                                         className='form-control'/>
                                        {companynameerror&& <div className="error-msg" style={{color:"red"}}>{companynameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Company Email :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"
                                         value={company_email}
                                        onChange={(e)=>setCompany_Email(e.target.value)} 
                                        className='form-control'/>
                                        {companyemailerror&& <div className="error-msg" style={{color:"red"}}>{companyemailerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Company Contact :- </div>
                                    <div className='col-sm-6'>
                                        <input type="number" 
                                        value={company_contact} 
                                        onChange={(e)=>setCompany_Contact(e.target.value)} 
                                        className='form-control'/>
                                        {companycontacterror&& <div className="error-msg" style={{color:"red"}}>{companycontacterror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button  type='submit' onClick={updateCompany} className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditCompany;
    