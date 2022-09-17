import React,{useEffect, useState} from 'react';
import {  Link } from "react-router-dom";

function Mainsubcategory(props) {

    const [mainsubcategory, setmainsubcategory] = useState([]);

      useEffect(()=>{
         getMainsubcategory();
      },[]);

      const getMainsubcategory = async() => {
        let result = await fetch("http://localhost:5000/api/v1/mainSubCategory");
        result = await result.json();
        setmainsubcategory(result);
        }

        console.warn(mainsubcategory);
        const subcategory_delete = async(id) => {
            let status="3";
            // alert("Do You Want to delete", id);
            await fetch (`http://localhost:5000/api/v1/mainSubCategory/${id}`, {
              method: 'DELETE',
                        body: JSON.stringify({ status}),
                        headers: {
                            'Content-Type': 'Application/json'
                        }
                        }).then((result)=>{
              result.json().then((resp)=>{
                console.warn(resp);
                getMainsubcategory();
              })
            })
          }

          let cnt=0;

  return (
    <>
    <div>
      
    <div className='col-sm-10 offset-sm-2'>
        <div className="page-body">
          <div className="container-fluid"><br />
            <div className="card tab2-card">
              <div className="card-header">
                <h5>Manage Main SubCategory</h5>
                <div className="card-header-right">
                  <div className="row">
                    <div className="col-lg-12">
                      <Link className="sidebar-header btn btn-primary" to="/addmainsubcategory">Add Main Sub Category</Link>
                    </div>

                  </div>
                </div>
              </div>
              <div className="card-body">

                <div className="row form-group">
                  <table className='table table-hover'>
                    <tr>
                      <th>Sr No</th>
                      <th>SubCategory Name</th>
                      <th>Image</th>
                      {/* <th>Comapny Contact</th> */}
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    {
                      mainsubcategory.map((item, index) => {
                        cnt++;
                        return (
                          <tr key={index}>
                            <td>{cnt}</td>
                            <td>{item.subcategory_name}</td>
                            <td>{item.subcategory_image}</td>
                            <td>{item.status}</td>
                            <td>
                              <Link to={"/editmainsubcategory/" + item.subcategory_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> |
                              <button className='btn btn-primary' onClick={() => subcategory_delete(item.subcategory_id)}>
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
    </div>
    </>
    
  );
}

export default Mainsubcategory;