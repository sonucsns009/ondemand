import React,{useEffect, useState} from 'react';
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';

function AddMainSubCategory(props) {
    const [category_id, setCategory_Id]= useState("");
    const [subcategory_name,setsubcategory_name]=useState("");
    const [subcategory_nameerror, setsubcategory_nameError] = useState(false);
    const [maincategory, setmaincategory] = useState([]);
    const [subcategory_image,setsubcategory_image]=useState("");
    //const [companyemailerror,setCompanyEmailError]=useState(false);

    const [status,setstatus]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        getMainCategory();
      },[]);

      const getMainCategory = async() => {
        let result = await fetch("http://localhost:5000/api/v1/mainCategory");
        result = await result.json();
        setmaincategory(result);
        }
       
    //const [companynameerror, setCompanyNameError] = useState(false);

    // const [company_email,setCompany_Email]=useState("");
    // const [companyemailerror,setCompanyEmailError]=useState(false);
   

    const handleSubmit = (e, values) => 
    {
            e.preventDefault();
        // const {...data} =values;
        if(subcategory_name==='')
        {
            setsubcategory_nameError('Sub Category Name is required');
            
        } else if (!/^[A-Za-z]+/.test(subcategory_name.trim())) {
            setsubcategory_nameError('Enter a valid name');
        }
        else
        {

            setsubcategory_nameError(false)
            axios.post("http://localhost:5000/api/v1/mainSubCategory", 
            {category_id, subcategory_name, subcategory_image, status,
            method: "Post",
            body: JSON.stringify({category_id, subcategory_name, subcategory_image, status}),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                
                return respone.json();
                
            }).catch((error)=>{
                console.log(error);
            });
            setsubcategory_name("");
            setstatus("");
            navigate("/mainsubcategory");
        }
    }
    
    return (
        <div className='col-sm-10 offset-sm-2'>
                <div class="page-body">            
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>Add MainSub Category</h5>
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
                                        <input type="text" value={subcategory_name} onChange={(e)=>setsubcategory_name(e.target.value)} className='form-control'/>
                                        {subcategory_nameerror&& <div className="error-msg" style={{color:"red"}}>{subcategory_nameerror}</div>}
                                    </div>
                              </div>

                                <div className="row form-group">     
                                    <div className='col-sm-3'>Sub Category Image :- </div>
                                    <div className='col-sm-6'>
                                        <input type="file" onChange={(e)=>setsubcategory_image(e.target.value)} className='form-control'/>
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-3'>Sub Category Status :- </div>
                                    <div className='col-sm-6'>
                                    <select type="text" 
                                                    className='form-control'
                                                    name="status"
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
    );
}

export default AddMainSubCategory;