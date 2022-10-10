import React,{useState, useEffect} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import server from '../../const';
function AddBanner(props) {
    // const [service_id, setService_Id]=useState("");
    const [category_id, setCategory_Id]= useState("");  
    const [subcategory_id, setSubCategory_Id] = useState("");    
    const [maincategory, setMaincategory] = useState([]);    
    const [mainsubcategory, setMainSubCategory] = useState([]);
  
    // const [service_iderror, setService_IdError]=useState(false);
    const [banner_title, setBanner_Title]=useState("");
    const [banner_titleerror, setBanner_TitleError] = useState("");
    const [banner_image, setBanner_Image]=useState("");
    const [banner_type, setBanner_Type] = useState("");
    const [banner_typeerror, setBanner_TypeError] = useState("");
    const [banner_url, setBanner_URL] = useState("");
    const [banner_urlerror, setBanner_URLError] = useState("");
    const [banner_status,setBanner_Status]=useState("");
    const [banner, setBanner] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        getMainCategory();
        getMainSubCategory();

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
            setCategory_Id(category_id)
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
            .post(`${server}api/v1/banner/upload_files`, formData)
            .then(response =>{
                console.log(response);
                let imgUrl =  response.data.imagePath;
                setBanner_Image(imgUrl);
                return response.json();
                
            })
            .catch((err) => console.log("File Upload Error"));
     }

    const handleSubmit = (e, values) => 
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
            axios.post(`${server}api/v1/banner`, 
            {category_id, subcategory_id, banner_title, banner_image, banner_type, banner_url, banner_status,
            method: "Post",
            body: JSON.stringify({category_id, subcategory_id, banner_title, banner_image, banner_type, banner_url, banner_status}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                
                return respone.json();
                
            }).catch((error)=>{
                console.log(error);
            });
            setBanner_Title("");
            setBanner_Status("");
            navigate("/banner");
        }
    }
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Banner</h5>
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
                                <select className="form-control"  onChange={(e)=>getMainSubCategory(e.target.value)}>
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
                                    <select className="form-control" onChange={(e)=>setSubCategory_Id(e.target.value)}>
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
                                        <input type="text" value={banner_title} onChange={(e)=>setBanner_Title(e.target.value)} className='form-control'/>
                                        {banner_titleerror&& <div className="error-msg" style={{color:"red"}}>{banner_titleerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" onChange={handleFileInput} className='form-control'/>
                                        {/* {banner_imageerror&& <div className="error-msg" style={{color:"red"}}>{banner_imageerror}</div>} */}
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
                                                    onChange={(e)=>setBanner_Status(e.target.value)}>
                                                    <option disabled selected value>Select Status</option>
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

export default AddBanner;