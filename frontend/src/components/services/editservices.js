import React,{useState, useEffect} from 'react';
import {  useParams,useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import server from '../../const';
function EditServices(props) {
    const [category_id, setCategory_Id]= useState("");
    const [subcategory_id, setSubCategory_Id] = useState("");
    const [subcategory_name,setSubcategory_name]=useState("");
    const [maincategory, setMaincategory] = useState([]);    
    const [mainsubcategory, setMainSubCategory] = useState([]);
    const [service_name, setService_name]=useState("");
    const [service_nameerror, setService_NameError] = useState(false);
    const [service_desc, setService_Desc]=useState("");
    const [service_descerror, setService_DescError]=useState(false);    
    const [service_image, setService_image]=useState("");
    const [price, setService_Price]=useState("");
    const [priceerror, setService_PriceError]=useState(false);
    const [discount, setService_Discount]=useState("");
    const [discounterror, setService_DiscountError]=useState(false);
    const [coupon_code, setService_Coupon_Code]=useState("");
    const [coupon_codeerror, setService_Coupon_CodeError]=useState(false);
    
    const params = useParams();
    console.warn(params.id);

    const [service_status,setservice_status]=useState("");
    const navigate = useNavigate();
   
    
    useEffect(()=>{
        getMainCategory();
        getMainSubCategory();
        
    },[]);
    
    useEffect(()=>{
          getServiceDeatils();

      },[])

      const getMainCategory = async() => {
        let result = await fetch(`${server}api/v1/mainCategory`);
        result = await result.json();
        setMaincategory(result);
        }
    
          const getMainSubCategory = async(category_id) => {
            let result = await fetch(`${server}api/v1/mainSubCategory/allSubCategory/`+category_id);
            result = await result.json();
            setMainSubCategory(result);
            setCategory_Id(category_id);
            }

      const getServiceDeatils = async() => {
        let result = await fetch(`${server}api/v1/services/${params.id}`);
        result = await result.json();
       // console.warn(result);
       setCategory_Id(result[0].category_id);
       setSubCategory_Id(result[0].subcategory_id);
       setService_name(result[0].service_name);
       setService_image(result[0].service_image);
       setService_Discount(result[0].discount);
       setService_Desc(result[0].service_desc);
       setService_Price(result[0].price);
       setService_Coupon_Code(result[0].coupon_code);

       setservice_status(result[0].service_status);
    }


    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
    
    const handleFileInput = (e) => 
    {
        // handle validations
        let img=e.target.files[0];
        console.warn("imAAGE------->"+e.target.files[0]);
        const formData = new FormData();
        formData.append("files", img);

        axios
            .post(`${server}api/v1/services/upload_files`, formData)
            .then(respone =>{
                console.log(respone);
                setService_image(respone);
                return respone.json();
                
            })
            .catch((err) => alert("File Upload Error"));
     }
    
    const handleSubmit = async(e) =>
    {
            e.preventDefault();
        // const {...data} =values;
        if(service_name==='')
        {
            setService_NameError('Service Name is required');
            
        } else if (!/^[A-Za-z]+/.test(service_name.trim())) {
            setService_NameError('Enter a valid name');
        }
        else
        {

            setService_NameError(false)
            let result = await fetch(`${server}api/v1/services/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ category_id,subcategory_id,  service_name, service_desc, service_image, discount, price, coupon_code, service_status }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/services');
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
                                
                            <h5>Update Services</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/services">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">
                                {/* <div style={{color:"#28a828"}}>{success ? success :""}</div>    */}
                            <form onSubmit={handleSubmit}>                              

                                      
                            <div className="row form-group">  
                            <div className="col-sm-3">
                                Category Name:-
                                </div>   
                                <div className="col-sm-6">
                                    <select className="form-control" value={category_id}  onChange={(e)=>getMainSubCategory(e.target.value)}>
                                        <option disabled selected value>Select Category</option>
                                    {
                                        maincategory.map((item, index) => {
                                        //cnt++;
                                            return(
                                                <option value={item.category_id}>{item.category_name}</option>

                                            )
                                        })
                                    }
                                    </select>
                                </div>
                                </div>
      
                                <div className="row form-group">  
                            <div className="col-sm-3">
                                Sub Category Name:-
                                </div>   
                                <div className="col-sm-6">
                                    <select className="form-control" value={subcategory_id} onChange={(e)=>setSubCategory_Id(e.target.value)}>Select Sub Category
                                    {
                                        mainsubcategory.map((item, index) => {
                                        //cnt++;
                                            return(
                                                <option value={item.subcategory_id}>{item.subcategory_name}</option>

                                            )
                                        })
                                    }
                                    </select>
                                </div>
                                </div>
                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={service_name} onChange={(e)=>setService_name(e.target.value)} className='form-control'/>
                                        {service_nameerror&& <div className="error-msg" style={{color:"red"}}>{service_nameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Desc :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={service_desc} onChange={(e)=>setService_Desc(e.target.value)} className='form-control'/>
                                        {service_descerror&& <div className="error-msg" style={{color:"red"}}>{service_descerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" onChange={handleFileInput} className='form-control'/>
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service Price :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"  value={price} onChange={(e)=>setService_Price(e.target.value)} className='form-control'/>
                                        {priceerror&& <div className="error-msg" style={{color:"red"}}>{priceerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service Discount :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text"value={discount} onChange={(e)=>setService_Discount(e.target.value)} className='form-control'/>
                                        {discounterror&& <div className="error-msg" style={{color:"red"}}>{discounterror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Coupon Code :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={coupon_code} onChange={(e)=>setService_Coupon_Code(e.target.value)} className='form-control'/>
                                        {coupon_codeerror&& <div className="error-msg" style={{color:"red"}}>{coupon_codeerror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service service_status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="service_status"
                                                    value={service_status}
                                                    onChange={(e)=>setservice_status(e.target.value)}>
                                                    <option disabled selected value>Select service status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                    </div>
                                </div>
                               
                                
                               
                                <div className="row form-group"> 
                                    <div className='col-sm-8'>
                                    
                                    </div>    
                                    <div className='col-sm-1'>
                                        <button type='submit' 
                                        onClick={handleSubmit}
                                        className='btn btn-primary'>Update</button>
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

export default EditServices;