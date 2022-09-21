import React,{useState, useEffect} from 'react';
import {  useParams,useNavigate,Link } from "react-router-dom";

function EditMainSubCategory(props) {
    const [category_id, setCategory_Id]= useState("");
    const [maincategory, setmaincategory] = useState([]);
    const [subcategory_name,setSubcategory_name]=useState("");
    const [subcategory_nameerror, setSubcategory_nameError] = useState(false);
   
    const [subcategory_image,setSubcategory_image]=useState("");
    //const [companyemailerror,setCompanyEmailError]=useState(false);
    const params = useParams();
    console.warn(params.id);

    const [status,setstatus]=useState("");

    const navigate = useNavigate(); 

    useEffect(()=>{
        getCategoryDeatils();
        getMainCategory();

    }, [])
    const getCategoryDeatils = async() => {
        let result = await fetch(`http://localhost:5000/api/v1/mainsubcategory/${params.id}`);
        result = await result.json();
       // console.warn(result);
       setSubcategory_name(result[0].subcategory_name);
       setSubcategory_image(result[0].subcategory_image);
       setstatus(result[0].status);
    }

    const getMainCategory = async() => {
        let result = await fetch("http://localhost:5000/api/v1/mainCategory");
        result = await result.json();
        setmaincategory(result);
        }
    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
    const handleSubmit = async(e) =>
    {
            e.preventDefault();
        // const {...data} =values;
        if(subcategory_name==='')
        {
            setSubcategory_nameError('Sub Category Name is required');
            
        } else if (!/^[A-Za-z]+/.test(subcategory_name.trim())) {
            setSubcategory_nameError('Enter a valid name');
        }
        else
        {

            setSubcategory_nameError(false)
            let result = await fetch(`http://localhost:5000/api/v1/mainsubcategory/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ subcategory_name, subcategory_image, status }),
                headers: {
                    'Content-Type': 'Application/json'
                }
                });
                result = await result.json();
                if (result) {
                    navigate('/mainsubcategory');
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
                                
                            <h5>Update Sub Category</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/mainsubcategory">Back</Link>
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
                                    <select className="form-control" onChange={(e)=>setCategory_Id(e.target.value)}>Select Category
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
                                    <div className='col-sm-3 '>Sub Category Name :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={subcategory_name} onChange={(e)=>setSubcategory_name(e.target.value)} className='form-control'/>
                                        {subcategory_nameerror&& <div className="error-msg" style={{color:"red"}}>{subcategory_nameerror}</div>}
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Sub Category Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file"  className='form-control'/>
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Sub Category Status :- </div>
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

export default EditMainSubCategory;