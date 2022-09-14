import React,{useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddQuotation from './AddQuotation';
import EditQuotation from './EditQuotation';

function Quotation() {

  const [quotation, setQuotation] = useState([]);

  useEffect(()=>{
    getQuotation();
  },[])

  const getQuotation = async() => {
    let result = await fetch("http://localhost:5000/api/v1/quotation");
    result = await result.json();
    setQuotation(result);
    }
  //console.log(user);
  const quotation_delete = async(id) =>{
    let status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/quotation/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getQuotation();
      })
    })
  }

  return(
    <>
<div className='col-sm-9 offset-sm-3'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Quotation</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addquotation">Add Quotation</Link>
                </div>
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Quotation Id</th>
                  <th>Customer Id</th>
                  <th>Lead Id</th>
                  <th>Call Id</th>  
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  quotation.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.quotation_id}</td>
                        <td>{item.customer_id}</td>
                        <td>{item.lead_id}</td>
                        <td>{item.call_id}</td>
                        <td>{item.status}</td>
                        <td>
                        <Link to={"/editquotation/"+item.quotation_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>quotation_delete(item.quotation_id)}>
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
<Route path="/addquotation" element={<AddQuotation />} />
<Route path="/editquotation" element={<EditQuotation />} />

</Routes>
</div>
</>
  )
    }


export default Quotation;