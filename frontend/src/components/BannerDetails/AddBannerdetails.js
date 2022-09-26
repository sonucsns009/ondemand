import React,{useState, useEffect} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';

function AddBannerDetails(props) {
    // const [service_id, setService_Id]=useState("");
    const [banner, setBanner]= useState([]);
    const [banner_id, getBanner_Id]= useState("");
    

    
    const [banner_detail_title, setBanner_Detail_Title] = useState("");
  
    // const [service_iderror, setService_IdError]=useState(false);
    const [banner_detail_titleerror, setBanner_Detail_TitleError] = useState("");
    const [banner_detail_desc, setBanner_Detail_Desc] = useState("");
    const [banner_detail_descerror, setBanner_Detail_DescError] = useState("");
    const [banner_detail_image, setBanner_Detail_Image]=useState("");
    const [banner_detail_url, setBanner_Detail_URL] = useState("");
    const [banner_detail_urlerror, setBanner_Detail_URLError] = useState("");
    const [banner_detail_status,setBanner_Detail_Status]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        getBanner();
        //getMainSubCategory();

      },[]);

      const getBanner = async() => {
        let result = await fetch("http://localhost:5000/api/v1/banner");
        result = await result.json();
        setBanner(result);
        }
    
        //   const getMainSubCategory = async(category_id) => {
        //     let result = await fetch("http://localhost:5000/api/v1/mainSubCategory/allSubCategory/"+category_id);
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
        if(banner_detail_title==='')
        {
            setBanner_Detail_TitleError('Banner Detail Title is required');
            
        } else if (!/^[A-Za-z]+/.test(banner_detail_title.trim())) {
            setBanner_Detail_TitleError('Enter a valid name');
        }
        else
        {

            setBanner_Detail_TitleError(false)
            axios.post("http://localhost:5000/api/v1/bannerDetails", 
            {banner_id, banner_detail_title, banner_detail_desc, banner_detail_image, banner_detail_url, banner_detail_status,
            method: "Post",
            body: JSON.stringify({banner_id, banner_detail_title, banner_detail_desc, banner_detail_image, banner_detail_url, banner_detail_status}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                
                return respone.json();
                
            }).catch((error)=>{
                console.log(error);
            });
            setBanner_Detail_Title("");
            setBanner_Detail_Status("");
            navigate("/bannerDetails");
        }
    }
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Banner Details</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/bannerDetails">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">
                                {/* <div style={{color:"#28a828"}}>{success ? success :""}</div>    */}
                            <form onSubmit={handleSubmit}>                              
              
                            <div className="row form-group">  
                            <div className="col-sm-3">
                                Banner Name:-
                                </div>   
                                <div className="col-sm-6">
                                <select className="form-control"  onChange={(e)=>getBanner_Id(e.target.value)}>
                                <option disabled selected value>Select Banner Id</option> 
                                    
                                    {
                                        banner.map((item, index) => {
                                        //cnt++;
                                            return(
                                                <option value={item.banner_id}>{item.banner_title}</option>

                                            )
                                        })
                                    }
                                    </select>
                                </div>
                                </div>
      
                          {/* <div className="row form-group">  
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
                                </div> */}

                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Detail Title :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_detail_title} onChange={(e)=>setBanner_Detail_Title(e.target.value)} className='form-control'/>
                                        {banner_detail_titleerror&& <div className="error-msg" style={{color:"red"}}>{banner_detail_titleerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Detail Description :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_detail_desc} onChange={(e)=>setBanner_Detail_Desc(e.target.value)} className='form-control'/>
                                        {banner_detail_descerror&& <div className="error-msg" style={{color:"red"}}>{banner_detail_descerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Detail Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" value={banner_detail_image} onChange={(e)=>setBanner_Detail_Image(e.target.value)} className='form-control'/>
                                        {/* {banner_imageerror&& <div className="error-msg" style={{color:"red"}}>{banner_imageerror}</div>} */}
                                    </div>
                                </div>
                                 {/* <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Type :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_type} onChange={(e)=>setBanner_Type(e.target.value)} className='form-control'/>
                                        {banner_typeerror&& <div className="error-msg" style={{color:"red"}}>{banner_typeerror}</div>}
                                    </div>
                                </div> */}
                                <div className="row form-group">     
                                  <div className='col-sm-3 '>Banner Detail URL :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_detail_url} onChange={(e)=>setBanner_Detail_URL(e.target.value)} className='form-control'/>
                                        {banner_detail_urlerror&& <div className="error-msg" style={{color:"red"}}>{banner_detail_urlerror}</div>}
                                    </div>
                                </div>
                                 <div className="row form-group">     
                                    <div className='col-sm-3'>Banner Detail Status :- </div>
                                    <div className='col-sm-6'>
                                        <select type="text" 
                                                    className='form-control'
                                                    name="banner_detail_status"
                                                    onChange={(e)=>setBanner_Detail_Status(e.target.value)}>
                                                    <option>Select Status</option>
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

export default AddBannerDetails;