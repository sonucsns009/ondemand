import React,{useEffect, useState} from 'react';
import {  Link } from "react-router-dom";
import server from '../../const';

function ServicePackages(props) {
  const [servicePackages, setServicePackages] = useState([]);

       useEffect(()=>{
        getservicePackages();
      },[]);

      const getservicePackages = async() => {
        let result = await fetch(`${server}api/v1/servicePackages`);
        result = await result.json();
        console.log(result)
        setServicePackages(result);
        }

        console.warn(servicePackages);
        const servicePackages_delete = async(id) => {
            let p_status="3";
            // alert("Do You Want to delete", id);
            await fetch (`${server}api/v1/servicePackages/${id}`, {
              method: 'DELETE',
                        body: JSON.stringify({ p_status}),
                        headers: {
                            'Content-Type': 'Application/json'
                        }
                        }).then((result)=>{
              result.json().then((resp)=>{
                console.warn(resp);
                getservicePackages();
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
          <h5>Manage Service Package</h5>
        <div className="card-header-right">
           <div className="row">
               <div className="col-lg-12">
                   <Link className="sidebar-header btn btn-primary" to="/addServicePackages">Add Service Packages</Link>
               </div>               
             </div>
          </div>	
        </div>
      <div className="card-body">                       
    <div className="row form-group">     
      <table className='table table-hover'>
          <tr>
               <th>Sr No</th>
               {/* <th>Package Id</th> */}
               <th>Service Name</th>
               <th>Package Name</th>
               <th>Package Amount</th>
               <th>Package Description</th>
               <th>Status</th>
               <th>Action</th>
          </tr>
            {
                servicePackages.map((item, index) => {
                     cnt++;
                          return(
                                 <tr key={index}>
                                 <td>{cnt}</td>
                                 {/* <td>{item.package_id}</td> */}
                                 <td>{item.service_name}</td>
                                 <td>{item.package_name}</td>
                                 <td>{item.package_amount}</td> 
                                 <td>{item.package_desc}</td>
                                 <td>{item.p_status}</td>  
                                 <td>
                                     <Link to={"/editservicePackages/"+item.package_id}><button className='btn btn-primary'>
                                        <i className='fa fa-edit'></i> </button></Link> | 
                                         <button className='btn btn-primary' onClick={()=>servicePackages_delete(item.package_id)}>
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

export default ServicePackages;