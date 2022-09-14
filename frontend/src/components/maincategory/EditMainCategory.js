import React,{useState, useEffect} from 'react';
import {  useParams,useNavigate,Link } from "react-router-dom";

function EditMainCategory(props) {
    const [category_name,setcategory_name]=useState("");
    const [category_nameerror, setcategory_nameError] = useState(false);

    const [category_image,setcategory_image]=useState("");
    //const [companyemailerror,setCompanyEmailError]=useState(false);
    const params = useParams();
    console.warn(params.id);

    const [status,setstatus]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        getCategoryDeatils();
    }, [])
    const getCategoryDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/maincategory/${params.id}`);
        result = await result.json();
       // console.warn(result);
       setcategory_name(result[0].category_name);
       setcategory_image(result[0].category_image);
       setstatus(result[0].status);
    }
    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
    const handleSubmit = async(e) =>
    {
            e.preventDefault();
        // const {...data} =values;
        if(category_name==='')
        {
            setcategory_nameError('Category Name is required');
            
        } else if (!/^[A-Za-z]+/.test(category_name.trim())) {
            setcategory_nameError('Enter a valid name');
        }
        else
        {

            setcategory_nameError(false)
            let result = await fetch(`http://localhost:5000/api/v1/maincategory/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ category_name, category_image, status }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/maincategory');
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
                                
                            <h5>Update Category</h5>
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
                                        <input type="file"  className='form-control'/>
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Category Status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="status"
                                                    value={status}
                                                    onChange={(e)=>setstatus(e.target.value)}>
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
            </div>
    );
}

export default EditMainCategory;