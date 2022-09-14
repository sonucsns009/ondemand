import React,{useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
//import Data from './Data';

function Customer() {

  const [customer, setCustomer] = useState([]);
  //const params = useParams();
  
  useEffect(()=>{
    getCustomers();
  },[])

  const getCustomers = async() => {
    let result = await fetch("http://localhost:5000/api/v1/customer");
    result = await result.json();
    setCustomer(result);
    }
    //console.warn(employee);
    const customer_delete = async(id) => {
      let customer_status="delete";
      // alert("Do You Want to delete", id);
      await fetch (`http://localhost:5000/api/v1/customer/${id}`, {
        method: 'DELETE',
                  body: JSON.stringify({ customer_status}),
                  headers: {
                      'Content-Type': 'Application/json'
                  }
                  }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp);
          getCustomers();
        })
      })
    }
    let cnt=0;
  return(
    <>
<div className='col-sm-10 offset-sm-2'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Customer</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addcustomer">Add Customer</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Customer Name</th>
                  <th>Customer Email</th>
                  {/* <th>Customer Contact</th> */}
                  {/* <th>Customer Type</th> */}
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  customer.map((item, index) => {
                    cnt++;
                    return(
                        <tr key={index}>
                        <td>{cnt}</td>
                        <td>{item.customer_name}</td>
                        <td>{item.customer_email}</td>
                        {/* <td>{item.customer_contact}</td> */}
                        {/* <td>{item.customer_type}</td> */}
                        <td>{item.customer_status}</td>
                        <td>
                        <Link to={"/editcustomer/"+item.customer_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>customer_delete(item.customer_id)}>
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
<Routes>
<Route path="/addcustomer" element={<AddCustomer />} />
<Route path="/editcustomer" element={<EditCustomer />} />

</Routes>
</div>
</>
  )
    }


export default Customer;