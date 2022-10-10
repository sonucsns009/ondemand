import React,{useState} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import server from '../../const';
function AddMainCategory(props) {
    const [category_name,setcategory_name]=useState("");
    const [category_nameerror, setcategory_nameError] = useState(false);

    const [category_image,setcategory_image]=useState("");
    const [category_imageerror, setCategory_ImageError] = useState(false);
    //const [companyemailerror,setCompanyEmailError]=useState(false);

    const [cat_status,setcat_status]=useState("");
    const navigate = useNavigate();

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
            .post(`${server}api/v1/mainCategory/upload_files`, formData)
            .then(response =>{
                console.log(response);
                let imgUrl =  response.data.imagePath;
                setcategory_image(imgUrl);
                return response.json();
                
                
            })
            .catch((err) => console.log("File Upload Error"));
     }
    
    const handleSubmit = (e, values) => 
    {
            e.preventDefault();
        // const {...data} =values;
        if(category_name==='')
        {
            setcategory_nameError('Category Name is required');
            
        } else if (!/^[A-Za-z]+/.test(category_name.trim())) {
            setcategory_nameError('Enter a valid name');
        }
        if(category_image==='')
        {
            setCategory_ImageError('Please choose the category image');
        }
        else
        {

            setcategory_nameError(false)
            
            axios.post(`${server}api/v1/mainCategory`, 
            { category_name, category_image, cat_status,
            method: "Post",
            body: JSON.stringify({category_name, category_image, cat_status}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                
                return respone.json();
                
            }).catch((error)=>{
                console.log(error);
            });
            setcategory_name("");
            setcat_status("");
            navigate("/maincategory");
        }
    }
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add Category</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/maincategory">Back</Link>
                                    </div>    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">
                                {/* <div style={{color:"#28a828"}}>{success ? success :""}</div>    */}
                            <form onSubmit={handleSubmit}>                              
                            <div className="row form-group">     
                                    <div className='col-sm-3 '>Category Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={category_name} onChange={(e)=>setcategory_name(e.target.value)} className='form-control'/>
                                        {category_nameerror&& <div className="error-msg" style={{color:"red"}}>{category_nameerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Category Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" onChange={handleFileInput} className='form-control'/>
                                        {category_imageerror&& <div className="error-msg" style={{color:"red"}}>{category_imageerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Category cat status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="cat_status"
                                                    onChange={(e)=>setcat_status(e.target.value)}>
                                                    <option disabled selected value> Select Category Status</option>
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

export default AddMainCategory;