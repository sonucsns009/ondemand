import React,{useEffect, useState} from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import server from '../../const';
function editservicetax(props) {
    const [service_tax, setService_Tax] = useState([]);
    const [fix_tax_amt, setFix_Tax_Amt] = useState([]);
    const [fix_tax_amterror, setFix_Tax_AmtError] = useState("");
    const [percent_tax_amt, setPercent_Tax_Amt] = useState([]);
    const [percent_tax_amterror, setPercent_Tax_AmtError] = useState("");
    //var check="test";
    // useEffect(()=>{
    // },[]);
    
    const [items, setItems] = useState([]);
    const params = useParams();
    console.warn(params.id);
    const navigate = useNavigate();
    
    useEffect(() => {
    getServiceTax();
    });

    const getServiceTax = async() => {
        let result = await fetch(`${server}api/v1/servicetax/${params.id}`);
        result = await result.json();
        setService_Tax(result[0].service_tax);
        setFix_Tax_Amt(result[0].fix_tax_amt);
        setPercent_Tax_Amt(result[0].percent_tax_amt);
        setService_Tax(result);
    }
        //console.warn(service_tax);
        // const servicetax_delete = async(id) => {
        //     let servicetax_status="3";
        //     // alert("Do You Want to delete", id);
        //     await fetch (`${server}api/v1/servicetax/${id}`, {
              
        //       method: 'DELETE',
        //                 body: JSON.stringify({ servicetax_status}),
        //                 headers: {
        //                     'Content-Type': 'Application/json'
        //                 }
        //                 }).then((result)=>{
        //         result.json().then((resp)=>{
        //         console.warn(resp);
        //         getServiceTax();
        //       })
        //     })
        //   }

        const handleSubmit = async(e) =>
        {
                e.preventDefault();
            // const {...data} =values;
            if(fix_tax_amt==='')
            {
                setFix_Tax_AmtError('Service Tax is required');
                
            } else if (!/^[A-Za-z]+/.test(fix_tax_amt.trim())) {
                setFix_Tax_AmtError('Enter a valid name');
            }
            else
            {
    
                setFix_Tax_AmtError(false)
                let result = await fetch(`${server}api/v1/servicetax/${params.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({ fix_tax_amt, percent_tax_amt }),
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                    });
                    result = await result.json();
                    if (result) {
                        navigate('/servicetax');
                    }
                }     
        }

         let cnt=0;
  return (
    <div>
       <div className='col-sm-10 offset-sm-2'>
       <div className="page-body">
       <div className="container-fluid">
       <div className="card tab2-card">
       <div className="card-header">
       <h5>Update Tax</h5>
       <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/servicetax">Back</Link>
                </div>
            </div>
          </div>
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
                service_tax.map((item, index) => {
                  
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

export default editservicetax;
