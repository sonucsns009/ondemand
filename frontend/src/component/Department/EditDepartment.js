import React,{ useState, useEffect } from 'react';
import {  Link, useParams, useNavigate } from "react-router-dom";

function EditDepartment() {
    
    const [department_name,setDepartment_Name]=useState("");
    const [departmentnameerror, setDepartmentNameError] = useState(false);

    const [company_id,setCompany_Id]=useState("");
    const [companyiderror, setCompanyIdError] = useState(false);

    const [company, setCompany] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getCompany();
      },[])
    
      const getCompany = async() => {
        let result = await fetch("http://localhost:5000/api/v1/company");
        result = await result.json();
        setCompany(result);
        }
      //console.log(company);

      useEffect(()=>{
        getDepartmentDeatils();
    }, [])

    const getDepartmentDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/department/${params.id}`);
        result = await result.json();
        console.warn(result);
        setCompany_Id(result[0].company_id);
        setDepartment_Name(result[0].department_name);
    }


    const updateDepartment = async(e) =>{
        e.preventDefault();
        if(department_name!==''){
            if (!/^[A-Za-z]+/.test(department_name.trim())) {
                setDepartmentNameError('Enter a valid name');
            }
        } else{
            setDepartmentNameError('Department Name is required');
        }
        if(company_id===''){
            setCompanyIdError('CompanyId is required');
        } else{
            setCompanyIdError(false)
            setDepartmentNameError(false)
            let result = await fetch(`http://localhost:5000/api/v1/department/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ company_id, department_name }),
            headers: {
                'Content-Type': 'Application/json'
            }
            });
            result = await result.json();
            if (result) {
                navigate('/department');
            }
        }
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Edit Department</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/department">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Department Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={department_name} onChange={(e)=>setDepartment_Name(e.target.value)} className='form-control'/>
                                        {departmentnameerror&& <div className="error-msg" style={{color:"red"}}>{departmentnameerror}</div>}

                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Select Company :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={company_id} onChange={(e)=>setCompany_Id(e.target.value)} className='form-control'>
                                        {/* <option>Select Company</option> */}
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
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' onClick={updateDepartment} className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    );
}

export default EditDepartment;
    