import React,{useEffect, useState} from 'react';
import {  Link } from "react-router-dom";
import server from '../../const';

function Maincategory(props) {
    const [maincategory, setmaincategory] = useState([]);
    //var check="test";
    useEffect(()=>{
        getMainCategory();
      },[]);

      const getMainCategory = async() => {
        let result = await fetch(`${server}api/v1/mainCategory`);
        result = await result.json();
        setmaincategory(result);
        }

        console.warn(maincategory);
        const category_delete = async(id) => {
            let cat_status="delete";
            // alert("Do You Want to delete", id);
            await fetch (`${server}api/v1/mainCategory/${id}`, {
              method: 'DELETE',
                        body: JSON.stringify({ cat_status}),
                        headers: {
                            'Content-Type': 'Application/json'
                        }
                        }).then((result)=>{
              result.json().then((resp)=>{
                console.warn(resp);
                getMainCategory();
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
          <h5>Manage Main Category</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addmaincategory">Add Main Category</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Category Name</th>
                  <th>Image</th>
                  {/* <th>Comapny Contact</th> */}
                  <th>cat_Status</th>
                  <th>Action</th>
                </tr>
                {
                maincategory.map((item, index) => {
                  cnt++;
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.category_name}</td>
                        <td>{item.category_image}</td> 
                        {/* <td>{item.company_contact}</td> */}
                        <td>{item.cat_status}</td>
                        <td>
                        <Link to={"/editmaincategory/"+item.category_id }><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>category_delete(item.category_id)}>
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

export default Maincategory;