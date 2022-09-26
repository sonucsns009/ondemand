import React,{useState, useEffect} from 'react';
import {  useParams,useNavigate,Link } from "react-router-dom";

function EditBanner(props) {
    const [category_id, setCategory_Id]= useState("");
    const [subcategory_id, setSubCategory_Id] = useState("");
    const [subcategory_name,setSubcategory_Name]=useState("");
    const [maincategory, setMaincategory] = useState([]);    
    const [mainsubcategory, setMainSubCategory] = useState([]);
    
    const [banner_title, setbanner_Title]=useState("");
    const [banner_titleerror, setBanner_TitleError] = useState(false);
    const [banner_image, setBanner_Image]=useState("");
    const [banner_type, setBanner_Type] = useState("");
    const [banner_typeerror, setBanner_TypeError] = useState(false);
    const [banner_url, setBanner_URL] = useState("");
    const [banner_urlerror, setBanner_URLError] = useState(false);
        
    const params = useParams();
    console.warn(params.id);

    const [banner_status,setBanner_Status]=useState("");
    const navigate = useNavigate();
    // useEffect(()=>{
    // }, []);
    
    useEffect(()=>{
        getBannerDeatils();
        getMainCategory();
        getMainSubCategory();

      },[]);

      const getMainCategory = async() => {
        let result = await fetch("http://localhost:5000/api/v1/mainCategory");
        result = await result.json();
        setMaincategory(result);
        }
    
          const getMainSubCategory = async(category_id) => {
            let result = await fetch("http://localhost:5000/api/v1/mainSubCategory/allSubCategory/"+category_id);
            result = await result.json();
            setMainSubCategory(result);
            }

    const getBannerDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/banner/${params.id}`);
        result = await result.json();
       // console.warn(result);
       setCategory_Id(result[0].category_id);
       setSubCategory_Id(result[0].subcategory_id);
       setbanner_Title(result[0].banner_title);
       setBanner_Image(result[0].banner_image);
       setBanner_Type(result[0].banner_type);
       setBanner_URL(result[0].banner_url);
       setBanner_Status(result[0].banner_status);
    }


    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
    const handleSubmit = async  (e) =>
    {
            e.preventDefault();
        // const {...data} =values;
        if(banner_title==='')
        {
            setBanner_TitleError('Banner Title is required');
            
        } else if (!/^[A-Za-z]+/.test(banner_title.trim())) {
            setBanner_TitleError('Enter a valid name');
        }
        else
        {

            setBanner_TitleError(false)
            let result = await fetch(`http://localhost:5000/api/v1/banner/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ banner_title, banner_image, banner_type, banner_url, banner_status, }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/banner');
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
                                
                            <h5>Update Banner</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/banner">Back</Link>
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
                                <select className="form-control"   onChange={(e)=>getMainSubCategory(e.target.value)}>
                                <option disabled selected value> Select Category</option> 
                                    
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
                                    <select className="form-control"  onChange={(e)=>setSubCategory_Id(e.target.value)}>
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
                                    <div className='col-sm-3 '>Banner Title :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_title} onChange={(e)=>setbanner_Title(e.target.value)} className='form-control'/>
                                        {banner_titleerror&& <div className="error-msg" style={{color:"red"}}>{banner_titleerror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Banner Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file"  className='form-control'/>
                                    </div>
                                </div>
                                 
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Type :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_type} onChange={(e)=>setBanner_Type(e.target.value)} className='form-control'/>
                                        {banner_typeerror&& <div className="error-msg" style={{color:"red"}}>{banner_typeerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                  <div className='col-sm-3 '>Banner URL :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_url} onChange={(e)=>setBanner_URL(e.target.value)} className='form-control'/>
                                        {banner_urlerror&& <div className="error-msg" style={{color:"red"}}>{banner_urlerror}</div>}
                                    </div>
                                </div>                             
                                                              
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Banner Status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="status"
                                                    value={banner_status}
                                                    onChange={(e)=>setBanner_Status(e.target.value)}>
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

export default EditBanner;