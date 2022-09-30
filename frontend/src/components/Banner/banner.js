import React,{useState,useEffect} from 'react';
import {  Link } from "react-router-dom";
import server from '../../const';

function Banner(props) {
        //   const [banner_id, setBanner_Id] = useState("");
        //   const [category_id, setCategory_Id] = useState("");
        //   const [subcategory_id, setSubCategory_Id] = useState("");
        //   const [banner_title, setBanner_Title] = useState("");
        //   const [banner_image, setBanner_Image] = useState("");
        //   const [banner_type, setBanner_Type] = useState("");
        //   const [banner_url, setBanner_Url] = useState("");
        //   const [banner_status, setBanner_Status] = useState("");
      const [banner, setBanner] = useState([]);
     var check="test";
     useEffect(()=>{
         getBanner();
       },[]);

       const getBanner = async() => {
         let result = await fetch(`${server}api/v1/banner`);
         result = await result.json();
         console.warn(result)
         setBanner(result);
         }

         console.warn(Banner);
         const banner_delete = async(id) => {
             let banner_status="delete";
             // alert("Do You Want to delete", id);
             await fetch (`${server}api/v1/banner/${id}`, {
               method: 'DELETE',
                         body: JSON.stringify({ banner_status}),
                         headers: {
                             'Content-Type': 'Application/json'
                         }
                         }).then((result)=>{
               result.json().then((resp)=>{
                 console.warn(resp);
                 getBanner();
               })
             })
          }
         let cnt=1;

    return (
<>
<div className='col-sm-10 offset-sm-2'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Banners </h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addBanner">Add Banner</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
             <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  {/* <th>Banner Id</th> */}
                  <th>Category Name</th>
                  <th>Subcategory Name</th>
                  <th>Banner Title</th>
                  <th>Banner Image</th>
                  <th>Banner Type</th>
                  <th>Banner URL</th>
                  {/* <th>Comapny Contact</th> */}
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                banner.map((item, index) => {
                
                    return(
                        <tr key={index}>
                        <td>{cnt++}</td>
                        {/* <td>{item.banner_id}</td> */}
                        <td>{item.category_name}</td>
                        <td>{item.subcategory_name}</td>
                        <td>{item.banner_title}</td>
                        <td>{item.banner_image}</td>
                        <td>{item.banner_type}</td> 
                        <td>{item.banner_url}</td>
                        {/* <td>{item.company_contact}</td> */}
                         <td>{item.banner_status}</td>
                        <td>
                        <Link to={"/editBanner/"+item.banner_id }>
                            <button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button>
                                </Link><br/><br/>
                                <button className='btn btn-primary' onClick={()=>banner_delete(item.banner_id)}>
                                <i className='fa fa-trash'></i> </button>
                        </td> 
                    </tr>
                    )
                  })
                }
                </table> 
            </div>
            
        
        </div>
    </div>
</div>
</div>

</div>
</>
    );
}

export default Banner;