import React,{useEffect, useState} from 'react';
import {  Link } from "react-router-dom";
import server from '../../const';
function Services(props) {
    const [services, setServices] = useState([]);
    //var check="test";
    useEffect(()=>{
        getServices();
      },[]);

      const getServices = async() => {
        let result = await fetch(`${server}api/v1/services`);
        result = await result.json();
        setServices(result);
        }

        console.warn(services);
        const service_delete = async(id) => {
            let service_status="3";
            // alert("Do You Want to delete", id);
            await fetch (`${server}api/v1/services/${id}`, {
              
              method: 'DELETE',
                        body: JSON.stringify({ service_status}),
                        headers: {
                            'Content-Type': 'Application/json'
                        }
                        }).then((result)=>{
              result.json().then((resp)=>{
                console.warn(resp);
                getServices();
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
          <h5>Manage Services</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addservices">Add Services</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  {/* <th>Service Id</th> */}
                  <th>Category Name</th>
                  <th>Subcategory Name</th>
                  <th>Service Name</th>
                  <th>Service Description</th>
                  <th>Service Image</th>
                  <th>Service Price</th>
                  <th>Service Discount</th>
                  <th>Coupone Code</th>
                  <th>service status</th>
                  <th>Action</th>
                </tr>
                {
                services.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{cnt++}</td>
                        {/* <td>{item.service_id}</td> */}
                        <td>{item.category_name}</td>
                        <td>{item.subcategory_name}</td>
                        <td>{item.service_name}</td>
                        <td>{item.service_desc}</td>
                        <td>
                          <img src={item.service_image} alt={item.service_name} />
                          
                        </td> 
                        <td>{item.price}</td>
                        <td>{item.discount}</td>
                        <td>{item.coupon_code}</td>
                        <td>{item.service_status}</td>  
                        <td>
                        <Link to={"/editservices/"+item.service_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> <br/><br/> 
                                <button className='btn btn-primary' onClick={()=>service_delete(item.service_id)}>
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

export default Services;