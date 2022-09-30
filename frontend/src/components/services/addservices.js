import React,{useState, useEffect} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import server from '../../const';
function AddServices(props) {
    // const [service_id, setService_Id]=useState("");
    const [category_id, setCategory_Id]= useState("");
    const [subcategory_id, setMainSubCategory_Id] = useState("");    
    const [maincategory, setMaincategory] = useState([]);    
    const [mainsubcategory, setMainSubCategory] = useState([]);
  
    // const [service_iderror, setService_IdError]=useState(false);
    const [service_name, setService_name]=useState("");
    const [service_nameerror, setService_NameError] = useState(false);
    const [service_desc, setService_Desc]=useState("");
    const [service_descerror, setService_DescError]=useState(false);    
    const [service_image, setService_image]=useState("");
    const [price, setService_Price]=useState("");
    const [service_priceerror, setService_PriceError]=useState(false);
    const [discount, setService_Discount]=useState("");
    const [service_discounterror, setService_DiscountError]=useState(false);
    const [coupon_code, setService_Coupon_Code]=useState("");
    const [service_coupon_codeerror, setService_Coupon_CodeError]=useState(false);
    const [service_status,setservice_status]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        getMainCategory();
        getMainSubCategory();
        // setMainSubCategory_Id(mainsubcategory);



      },[]);

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

    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
   

    const handleSubmit = (e, values) => 
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
            axios.post(`${server}api/v1/services`, 
            {category_id, subcategory_id, service_name, service_desc, service_image, price, discount, coupon_code, service_status,
            method: "Post",
            body: JSON.stringify({category_id, subcategory_id, service_name, service_desc, service_image, price, discount, coupon_code, service_status}),
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
            setservice_status("");
            navigate("/services");
        }
    }
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Services</h5>
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
                                    <select className="form-control"  onChange={(e)=>getMainSubCategory(e.target.value)}>Select Category
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
                                    <select className="form-control"  onChange={(e)=>setMainSubCategory_Id(e.target.value)}>
                                    {/* <option disabled selected value >Select Sub Category</option> */}

                                    {
                                        mainsubcategory.map((item, index) => {
                                        //cnt++;
                                            return(
                                                <option value={item.subcategory_id}  selected  >{item.subcategory_name}</option>

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
                                    <div className='col-sm-3 '>Service Description :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={service_desc} onChange={(e)=>setService_Desc(e.target.value)} className='form-control'/>
                                        {service_descerror&& <div className="error-msg" style={{color:"red"}}>{service_descerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" onChange={(e)=>setService_image(e.target.value)} className='form-control'/>
                                        {/* {service_imageerror&& <div className="error-msg" style={{color:"red"}}>{service_imageerror}</div>} */}
                                     </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Price :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={price} onChange={(e)=>setService_Price(e.target.value)} className='form-control'/>
                                        {service_priceerror&& <div className="error-msg" style={{color:"red"}}>{service_priceerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Service Discount :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={discount} onChange={(e)=>setService_Discount(e.target.value)} className='form-control'/>
                                        {service_discounterror&& <div className="error-msg" style={{color:"red"}}>{service_discounterror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Coupone Code :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={coupon_code} onChange={(e)=>setService_Coupon_Code(e.target.value)} className='form-control'/>
                                        {service_coupon_codeerror&& <div className="error-msg" style={{color:"red"}}>{service_coupon_codeerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Service status :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" 
                                                    className='form-control'
                                                    name="service_status"
                                                    onChange={(e)=>setservice_status(e.target.value)}>
                                                    <option>Select status</option>
                                                    <option value="active">active</option>
                                                    <option value="inactive">inactive</option>
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

export default AddServices;