import React,{useState, useEffect} from 'react';
import {  useParams,useNavigate,Link } from "react-router-dom";
import server from '../../const';
function EditServicePackages(props) {
    const [service, setService] = useState([]);    
    const [service_id,setService_id] =useState("");
    const [package_name,setPackage_name] = useState("");
    const [package_nameerror, setPackage_NameError] = useState(false);
    const [package_amount,setPackage_amount] = useState("");
    const [package_desc,setPackage_desc] = useState("");
    const [p_status,setP_Status] = useState("");







    // const [mainsubcategory, setMainSubCategory] = useState([]);
    // const [service_desc, setService_Desc]=useState("");
    // const [service_descerror, setService_DescError]=useState(false);    
    // const [service_image, setService_image]=useState("");
    // const [price, setService_Price]=useState("");
    // const [priceerror, setService_PriceError]=useState(false);
    // const [discount, setService_Discount]=useState("");
    // const [discounterror, setService_DiscountError]=useState(false);
    // const [coupon_code, setService_Coupon_Code]=useState("");
    // const [coupon_codeerror, setService_Coupon_CodeError]=useState(false);


    
    const params = useParams();
    console.warn(params.id);

    const navigate = useNavigate();
    useEffect(()=>{
        getServicePackagesDeatils();
    }, []);

    useEffect(()=>{
        getservices();

      },[]);

      const getservices = async() => {
        let result = await fetch(`${server}api/v1/services`);
        result = await result.json();
        setService(result);
        }

    const getServicePackagesDeatils = async() => {
        let result = await fetch(`${server}api/v1/servicePackages/${params.id}`);
        result = await result.json();
       // console.warn(result);
       setService_id(result[0].service_id);
       setPackage_name(result[0].package_name);
       setPackage_amount(result[0].package_amount);
       setPackage_desc(result[0].package_desc);
       setP_Status(result[0].p_status);
    }


    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
    const handleSubmit = async(e) =>
    {
            e.preventDefault();
        // const {...data} =values;
        if(package_nameerror==='')
        {
            setPackage_NameError('Service Name is required');
            
        } else if (!/^[A-Za-z]+/.test(package_name.trim())) {
            setPackage_NameError('Enter a valid name');
        }
        else
        {

            setPackage_NameError(false)
            let result = await fetch(`${server}api/v1/servicePackages/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({service_id, package_name, package_amount, package_desc,  p_status }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/servicepackages');
                }
            }       
    }
   
    return (
        <div>
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Update Service Packages</h5>
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
                                <select className="form-control" value={service_id} onChange={(e)=>setService_id(e.target.value)}>Select Service
                                    {
                                        service.map((item, index) => {
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
                                    <div className='col-sm-3 '>Package Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={package_name} onChange={(e)=>setPackage_name(e.target.value)} className='form-control'/>
                                        {package_nameerror&& <div className="error-msg" style={{color:"red"}}>{package_nameerror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Package Amount :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"  value={package_amount} className='form-control'/>
                                        {/* {priceerror&& <div className="error-msg" style={{color:"red"}}>{priceerror}</div>} */}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Package Desc :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={package_desc} onChange={(e)=>setPackage_desc(e.target.value)} className='form-control'/>
                                        {/* {service_descerror&& <div className="error-msg" style={{color:"red"}}>{service_descerror}</div>} */}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Package Status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="status"
                                                    value={p_status}
                                                    onChange={(e)=>setP_Status(e.target.value)}>
                                                    <option>Select Status</option>
                                                    <option value="Active">active</option>
                                                    <option value="Inactive">inactive</option>
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
            </div>
    );
}


export default EditServicePackages;