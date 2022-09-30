import React,{useState, useEffect} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import server from '../../const';
function AddServicePackages(props) {
     const [service_id, setService_Id]=useState("");
     const [service_provider_id, setService_provider_Id]=useState('0');
     const [store_id, setStore_Id]=useState('0');

     const [service_iderror, setService_IdError]=useState(false);
     const [serviceprovider_id, setServiceProvider_Id]= useState("");
     const [serviceprovider_iderror, setServiceProvider_IdError]=useState(false);
    //  const [store_id, setStore_Id] = useState("");    
     const [store_iderror, setStore_IdError] = useState([]);    
     const [service_name, setService_name]=useState("");
     const [service_nameerror, setService_NameError] = useState(false);
     const [package_name, setPackage_Name]=useState("");
     const [package_nameerror, setPackage_NameError]=useState([]);
     const [package_amount, setPackage_Amount]=useState("");
     const [package_amounterror, setPackage_AmountError]=useState([]);
     const [package_desc, setPackage_Desc]=useState("");
     const [package_descerror, setPackage_DescError]=useState(false);    
     const [p_status, setP_Status]=useState("");
     const [servicepackages, setServicePackages]=useState([]);
     const navigate = useNavigate();

    useEffect(()=>{
        getServicePackages();
        //getMainSubCategory();

      },[]);

      const getServicePackages = async() => {
        let result = await fetch(`${server}api/v1/services`);
        result = await result.json();
        setServicePackages(result);
        }
    
        //   const getMainSubCategory = async(category_id) => {
        //     let result = await fetch("http://localhost:5000/api/v1/mainSubCategory/"+category_id);
        //     result = await result.json();
        //     setMainSubCategory(result);
        //     }

    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
   

    const handleSubmit = (e, values) => 
    {
            e.preventDefault();
        // const {...data} =values;
        if(package_name==='')
        {
            setPackage_NameError('Package Name is required');
            
        } else if (!/^[A-Za-z]+/.test(package_name.trim())) {
            setPackage_NameError('Enter a valid name');
        }
        else
        {

            setService_NameError(false)
            axios.post(`${server}api/v1/servicePackages`, 
            {service_id ,service_provider_id,store_id,package_name, package_desc, package_amount, p_status,
            method: "Post",
            body: JSON.stringify({service_id,service_provider_id, store_id,package_name, package_desc, package_amount, p_status}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                
                return respone.json();
                
            }).catch((error)=>{
                console.log(error);
            });
            setService_name("");
            setP_Status("");
            navigate("/servicepackages");
        }
    }
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Service Packages</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/servicePackages">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">
                                {/* <div style={{color:"#28a828"}}>{success ? success :""}</div>    */}
                            <form onSubmit={handleSubmit}>                              
              
                            <div className="row form-group">  
                            <div className="col-sm-3">
                                Service Name:-
                                </div>   
                                <div className="col-sm-6">
                                <select className="form-control"  onChange={(e)=>setService_Id(e.target.value)}>Select Category
                                    {
                                        servicepackages.map((item, index) => {
                                        //cnt++;
                                            return(
                                                <option value={item.service_id}>{item.service_name}</option>

                                            )
                                        })
                                    }
                                    </select>
                                </div>
                                </div>
      
                                <div className="row form-group">  
                            
                                </div>
                                

                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Package Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={package_name} onChange={(e)=>setPackage_Name(e.target.value)} className='form-control'/>
                                        {package_nameerror&& <div className="error-msg" style={{color:"red"}}>{package_nameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Package Description :- </div>
                                    <div className='col-sm-6'>
                                        <textarea value={package_desc} onChange={(e)=>setPackage_Desc(e.target.value)} className='form-control'></textarea>
                                        {package_descerror&& <div className="error-msg" style={{color:"red"}}>{package_descerror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Package Amount :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={package_amount} onChange={(e)=>setPackage_Amount(e.target.value)} className='form-control'/>
                                        {package_amounterror&& <div className="error-msg" style={{color:"red"}}>{package_amounterror}</div>}
                                    </div>
                                </div>
                                
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service Package Status :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" 
                                                    className='form-control'
                                                    name="p_status"
                                                    onChange={(e)=>setP_Status(e.target.value)}>
                                                    <option>Select Status</option>
                                                    <option value="1">active</option>
                                                    <option value="2">inactive</option>
                                                </select>
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

export default AddServicePackages;