import React,{useEffect, useState} from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import server from '../../const';
function editservicetax(props) {
    const [service_tax, setService_Tax] = useState([]);
    const [fix_tax_amt, setFix_Tax_Amt] = useState("");
    const [fix_tax_amterror, setFix_Tax_AmtError] = useState(false);
    const [percent_tax_amt, setPercent_Tax_Amt] = useState("");
    const [percent_tax_amterror, setPercent_Tax_AmtError] = useState(false);

    //var check="test";
    // useEffect(()=>{
    // },[]);
    
    //const [items, setItems] = useState([]);
    const params = useParams();
    console.warn(params.id);
    const navigate = useNavigate();
    
    useEffect(() => {
    getServiceTax();
    },[]);

    const getServiceTax = async() => {
        let result = await fetch(`${server}api/v1/admin/${params.id}`);
        result = await result.json();
       // setService_Tax(result[0].service_tax);
        setFix_Tax_Amt(result[0].fix_tax_amt);
        setPercent_Tax_Amt(result[0].percent_tax_amt);
        setService_Tax(result);
    }
        

        const handleSubmit = async(e) =>
        {
                e.preventDefault();
            
            if(fix_tax_amt==='')
            {
                setFix_Tax_AmtError('Service Tax is required');
                
            } else if (!/^[0-9]+/.test(fix_tax_amt)) {
                setFix_Tax_AmtError('Enter a valid number');
            }
            else
            {
    
                setFix_Tax_AmtError(false)
                let result = await fetch(`${server}api/v1/admin/updateTax/${params.id}`, {
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
            <form onSubmit={handleSubmit}>
            <div className="row form-group">  
                <div className="col-sm-2">
                   Fix Tax Amount:-
                </div>
                <div className='col-sm-3'>
                  <input type="number" value={fix_tax_amt} onChange={(e)=>setFix_Tax_Amt(e.target.value)} className='form-control'/>
                  {fix_tax_amterror&& <div className="error-msg" style={{color:"red"}}>{fix_tax_amterror}</div>}
                </div>
            </div>
            <div className="row form-group">     
              <div className='col-sm-2'>Percent Tax Amount :- </div>
                <div className='col-sm-3'>
                  <input type="number" value={percent_tax_amt} onChange={(e)=>setPercent_Tax_Amt(e.target.value)} className='form-control'/>
                  {percent_tax_amterror&& <div className="error-msg" style={{color:"red"}}>{percent_tax_amterror}</div>}
                </div>
              </div>
          
          <div className="row form-group"> 
             <div className='col-sm-2'>
             </div>    
             <div className='col-sm-6'>
                <button type='submit'  onClick={handleSubmit} className='btn btn-primary'>Update</button>
             </div>
            </div>
           </form>
           </div>
         </div>
       </div> 
      </div>
    </div>
 </div>
    
  );
}

export default editservicetax;
