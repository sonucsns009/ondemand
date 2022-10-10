import React,{useEffect, useState} from 'react';
import {  Link } from "react-router-dom";
import server from '../../const';
function servicetax(props) {
    const [servicetax, setServiceTax] = useState([]);
    //var check="test";
    // useEffect(()=>{
    // },[]);
    
    const [items, setItems] = useState([]);
    
    
    useEffect(() => {
    getServiceTax();
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
   setItems(items.data[0].admin_id);
  }
});

      const getServiceTax = async() => {
        let result = await fetch(`${server}api/v1/admin/${items}`);
        result = await result.json();
        setServiceTax(result);
        }

        console.warn(servicetax);
        const servicetax_delete = async(id) => {
            let servicetax_status="3";
            // alert("Do You Want to delete", id);
            await fetch (`${server}api/v1/servicetax/${id}`, {
              
              method: 'DELETE',
                        body: JSON.stringify({ servicetax_status}),
                        headers: {
                            'Content-Type': 'Application/json'
                        }
                        }).then((result)=>{
                result.json().then((resp)=>{
                console.warn(resp);
                getServiceTax();
              })
            })
          }
         let cnt=1;
  return (
    <div>
       <div className='col-sm-10 offset-sm-2'>
       <div className="page-body">
       <div className="container-fluid">
       <div className="card tab2-card">
       <div className="card-header">
       <h5>TAX</h5>
       {/* <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/updateTax">Update Tax</Link>
                </div>
            </div>
          </div> */}
      </div>
          <div className="card-body">   
            <div className="row form-group">
            <table className='table table-hover'>
                <tr>
                  <th>Sr No</th>
                  <th>Fix Tax Amount</th>
                  <th>Percent Tax Amount</th>
                  <th>Action</th>
                </tr>
                {
                servicetax.map((item, index) => {
                  
                    return(
                        <tr key={index}>
                        <td>{cnt++}</td>
                        <td>{item.fix_tax_amt}</td>
                        <td>{item.percent_tax_amt}</td>
                        <td>
                        <Link to={"/editservicetax/"+item.admin_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> <br/><br/> 
                                {/* <button className='btn btn-primary' onClick={()=>servicetax_delete(item.service_id)}>
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
    </div>
  );
}

export default servicetax;
