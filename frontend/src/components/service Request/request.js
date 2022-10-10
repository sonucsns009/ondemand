import React,{useEffect, useState} from 'react';
import {  Link } from "react-router-dom";
import server from '../../const';
function request(props) {
    const [requestview, setRequestView] = useState([]);
    //var check="test";
    useEffect(()=>{
        getRequestView();
      },[]);

      const getRequestView = async() => {
        let result = await fetch(`${server}api/v1/request`);
        result = await result.json();
        setRequestView(result);
        }

        console.warn(requestview);
        // const request_view = async(id) => {
        //     let request_view_status="3";
        //     // alert("Do You Want to delete", id);
        //     await fetch (`${server}api/v1/request/${id}`, {
              
        //       method: 'DELETE',
        //                 body: JSON.stringify({ request_view_status}),
        //                 headers: {
        //                     'Content-Type': 'Application/json'
        //                 }
        //                 }).then((result)=>{
        //       result.json().then((resp)=>{
        //         console.warn(resp);
        //         getRequestView();
        //       })
        //     })
        //   }
        let cnt=1;

    return (
        <>
<div className='col-sm-10 offset-sm-2'>
 <div className="page-body">
  <div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Request</h5>
        {/* <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addservices">Add Services</Link>
                </div>
                
              </div>
          </div>	 */}
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  {/* <th>Service Id</th> */}
                  <th>Customer Name</th>
                  <th>Serivce Name</th>
                  <th>Package Name</th>
                  <th>Service Amount</th>
                  {/* <th>Service Image</th> */}
                  <th>Tax Amount</th>
                  <th>Offer Amount</th>
                  <th>Discount</th>
                  <th>Final Amount</th>
                  <th>Request Status</th>
                  <th>Request Date</th>
                  {/* <th>Request Time</th> */}
                  <th>Action</th>
                </tr>
                {
                requestview.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{cnt++}</td>
                        {/* <td>{item.service_id}</td> */}
                        <td>{item.fullname}</td>
                        <td>{item.service_name}</td>
                        <td>{item.package_name}</td>
                        <td>{item.price}</td>
                        <td>{item.tax_amt}</td> 
                        <td>{item.offer_amt}</td>
                        <td>{item.discount}</td>
                        <td>{item.final_amt}</td>
                        <td>{item.request_status}</td>
                        <td>{item.request_date.slice(0,10)}</td>
                        {/* <td>{item.request_time}</td>   */}
                        <td>
                        <Link to={"/requestview/"+item.request_id}>
                            <button className='btn btn-primary' >
                                <i className='fa fa-eye'></i></button>
                                </Link> 
                                {/* <button className='btn btn-primary' onClick={()=>request_delete(item.request_id)}>
                                <i className='fa fa-trash'></i> </button> */}
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

export default request;