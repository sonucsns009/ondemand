import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditBranch() {
    const [company_id, setCompany_Id]= useState("");
    const [companyiderror, setCompanyIdError] = useState(false);

    const [company_name,setCompany_Name]=useState("");
    const [companynameerror, setCompanyNameError] = useState(false);
    
    const [company_cin,setCompany_Cin]=useState("");
    const [companycinerror, setCompanyCinError] = useState(false);

    const [company_profile, setCompany_Profile] = useState("");
    const [companyprofileerror, setCompanyProfileError] = useState(false);

    const [company, setCompany] = useState([]);

    useEffect(()=>{
        getCompany();
      },[])
    
      const getCompany = async() => {
        let result = await fetch("http://localhost:5000/api/v1/company");
        result = await result.json();
        setCompany(result);
        }
      //console.log(company);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getBranchDeatils();
    }, [])

    const getBranchDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/branch/${params.id}`);
        result = await result.json();
        console.warn(result);
        setCompany_Id(result[0].company_id);
        setCompany_Name(result[0].company_name);
        setCompany_Cin(result[0].company_cin);
        setCompany_Profile(result[0].company_profile);
    }

    const updateBranch = async(e) =>{
        e.preventDefault();
        if(company_name!==''){
            if (!/^[A-Za-z]+/.test(company_name.trim())) {
                setCompanyNameError('Enter a valid name');
            }
        } else{
            setCompanyNameError('Branch Name is required');
        }
        if(company_id!==''){

        } else{
            setCompanyIdError('Comapny Id is required');
        }
        if(company_cin!==''){

        } else{
            setCompanyCinError('Company Cin is required');
        }
        if(company_profile===''){
            setCompanyProfileError('Company Profile is required');
        } else{
            setCompanyIdError(false)
            setCompanyNameError(false)
            setCompanyProfileError(false)
            setCompanyCinError(false)
            let result = await fetch(`http://localhost:5000/api/v1/branch/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ company_id, company_cin, company_name, company_profile }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/branch');
            }
        }
    }
    

   
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Branch</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/branch">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <div className="row form-group">     
                                    <div className='col-sm-2 '>Select Company :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={company_id} onChange={(e)=>setCompany_Id(e.target.value)} className='form-control'>
                                        {/* <option>Select Company </option> */}
                                        {
                                                company.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.company_id}>{item.company_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {companyiderror&& <div className="error-msg" style={{color:"red"}}>{companyiderror}</div>}
                                    </div>
                                </div>     
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Company Name:- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={company_name} onChange={(e)=>setCompany_Name(e.target.value)} className='form-control'/>
                                        {companynameerror&& <div className="error-msg" style={{color:"red"}}>{companynameerror}</div>}
                                    </div> 
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Company Cin :- </div>
                                    <div className='col-sm-6'>
                                        <input type="number" value={company_cin} onChange={(e)=>setCompany_Cin(e.target.value)} className='form-control'/>
                                        {companycinerror&& <div className="error-msg" style={{color:"red"}}>{companycinerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Company Profile:- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"
                                         value={company_profile} 
                                         onChange={(e)=>setCompany_Profile(e.target.value)} 
                                         className='form-control'/>
                                        {companyprofileerror&& <div className="error-msg" style={{color:"red"}}>{companyprofileerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' onClick={updateBranch}className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditBranch;
    