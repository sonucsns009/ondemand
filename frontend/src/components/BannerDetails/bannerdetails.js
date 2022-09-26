import React,{useState,useEffect} from 'react';
import {  Link } from "react-router-dom";


function BannerDetails(props) {
        //   const [banner_id, setBanner_Id] = useState("");
        //   const [category_id, setCategory_Id] = useState("");
        //   const [subcategory_id, setSubCategory_Id] = useState("");
        //   const [banner_title, setBanner_Title] = useState("");
        //   const [banner_image, setBanner_Image] = useState("");
        //   const [banner_type, setBanner_Type] = useState("");
        //   const [banner_url, setBanner_Url] = useState("");
        //   const [banner_status, setBanner_Status] = useState("");
      const [bannerdetails, setBannerDetails] = useState([]);
     var check="test";
     useEffect(()=>{
         getBannerDetails();
       },[]);

       const getBannerDetails = async() => {
         let result = await fetch("http://localhost:5000/api/v1/bannerDetails");
         result = await result.json();
         console.warn(result)
         setBannerDetails(result);
         }

         console.warn(BannerDetails);
         const banner_details_delete = async(id) => {
             let banner_detail_status="delete";
             // alert("Do You Want to delete", id);
             await fetch (`http://localhost:5000/api/v1/bannerDetails/${id}`, {
               method: 'DELETE',
                         body: JSON.stringify({ banner_detail_status}),
                         headers: {
                             'Content-Type': 'Application/json'
                         }
                         }).then((result)=>{
               result.json().then((resp)=>{
                 console.warn(resp);
                 getBannerDetails();
               })
             })
          }
         let cnt=0;

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
                    <Link className="sidebar-header btn btn-primary" to="/addBannerdetails">Add Banner Details</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
             <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Banner Detail Id</th>
                  <th>Banner Detail Title</th>
                  <th>Banner Detail Description</th>
                  <th>Banner Detail Image</th>
                  <th>Banner Detail URL</th>
                  {/* <th>Comapny Contact</th> */}
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                bannerdetails.map((item, index) => {
                
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.banner_detail_id}</td>
                        <td>{item.banner_detail_title}</td>
                        <td>{item.banner_detail_desc}</td>
                        <td>{item.banner_detail_image}</td>
                        <td>{item.banner_detail_url}</td>
                        {/* <td>{item.company_contact}</td> */}
                         <td>{item.banner_detail_status}</td>
                        <td>
                        <Link to={"/EditBannerdetails/"+item.banner_detail_id }>
                            <button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button>
                                </Link><br/><br/>
                                <button className='btn btn-primary' onClick={()=>banner_details_delete(item.banner_detail_id)}>
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

export default BannerDetails;