import React,{useState, useEffect} from 'react';
import {  useParams,useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import server from '../../const';
function EditBannerDetails(props) {
    const [banner_id, setBanner_Id]= useState("");
    const [banner_detail_title, setBanner_Detail_Title]=useState("");
    const [banner_detail_titleerror, setBanner_Detail_TitleError] = useState(false);
    const [banner_detail_image, setBanner_Detail_Image]=useState("");
    const [banner_detail_desc, setBanner_Detail_Desc] = useState("");
    const [banner_detail_descerror, setBanner_Detail_DescError] = useState(false);
    const [banner_detail_url, setBanner_Detail_URL] = useState("");
    const [banner_detail_urlerror, setBanner_Detail_URLError] = useState(false);
    const [banner_detail, setBanner_Detail] = useState([]);        
    const [banner, setBanner] = useState([]);
    const params = useParams();
    console.warn(params.id);

    const [banner_detail_status,setBanner_Detail_Status]=useState("");
    const navigate = useNavigate();
    // useEffect(()=>{
    // }, []);
    
    useEffect(()=>{
        getBanner();
        getBanner_Deatil();
        // getMainCategory();
        // getMainSubCategory();

      },[]);

      const getBanner = async() => {
        let result = await fetch(`${server}api/v1/banner`);
        result = await result.json();
        setBanner(result);
        }
    
        //   const getMainSubCategory = async(category_id) => {
        //     let result = await fetch("http://localhost:5000/api/v1/mainSubCategory/allSubCategory/"+category_id);
        //     result = await result.json();
        //     setMainSubCategory(result);
        //     }

    const getBanner_Deatil = async() => {
        let result = await fetch(`${server}api/v1/bannerDetails/${params.id}`);
        result = await result.json();
       // console.warn(result);
       setBanner_Id(result[0].banner_id);
       
       setBanner_Detail_Title(result[0].banner_detail_title);
       setBanner_Detail_Image(result[0].banner_detail_image);
       setBanner_Detail_Desc(result[0].banner_detail_desc);
       setBanner_Detail_URL(result[0].banner_detail_url);
       setBanner_Detail_Status(result[0].banner_detail_status);
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
            .post(`${server}api/v1/bannerDetails/upload_files`, formData)
            .then(respone =>{
                console.log(respone);
                setBanner_Detail_Image(respone);
                return respone.json();
                
            })
            .catch((err) => alert("File Upload Error"));
     }
    
    const handleSubmit = async  (e) =>
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
            let result = await fetch(`${server}api/v1/bannerDetails/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({banner_id, banner_detail_title, banner_detail_image, banner_detail_desc, banner_detail_url, banner_detail_status, }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/bannerdetails');
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
                                
                            <h5>Update Banner Details</h5>
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
                                <select className="form-control" value={banner_id}   onChange={(e)=>getBanner(e.target.value)}>
                                <option disabled selected value> Select Banner</option> 
                                    
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
                                </div> */}

                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Title :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_detail_title} onChange={(e)=>setBanner_Detail_Title(e.target.value)} className='form-control'/>
                                        {banner_detail_titleerror&& <div className="error-msg" style={{color:"red"}}>{banner_detail_titleerror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Banner Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" onChange={handleFileInput} className='form-control'/>
                                    </div>
                                </div>
                                 
                                <div className="row form-group">     
                                    <div className='col-sm-3 '>Banner Description :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_detail_desc} onChange={(e)=>setBanner_Detail_Desc(e.target.value)} className='form-control'/>
                                        {banner_detail_descerror&& <div className="error-msg" style={{color:"red"}}>{banner_detail_descerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                  <div className='col-sm-3 '>Banner URL :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={banner_detail_url} onChange={(e)=>setBanner_Detail_URL(e.target.value)} className='form-control'/>
                                        {banner_detail_urlerror&& <div className="error-msg" style={{color:"red"}}>{banner_detail_urlerror}</div>}
                                    </div>
                                </div>                             
                                                              
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Banner Status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="banner_detail_status"
                                                    value={banner_detail_status}
                                                    onChange={(e)=>setBanner_Detail_Status(e.target.value)}>
                                                    <option disabled selected value>Select Status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                    </div>
                                </div>
                               
                                
                               
                                <div className="row form-group"> 
                                    <div className='col-sm-7'>
                                    
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

export default EditBannerDetails;