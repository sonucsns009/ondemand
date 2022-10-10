import React,{useEffect, useState} from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import server from '../../const';
function requestview(props) {
    const [request_id, setRequest_Id] = useState("");
    const [full_name, setFull_Name] = useState("");
    const [full_nameerror, setFull_NameError] = useState("");
    const [service_name, setService_Name] = useState("");
    const [service_nameerror, setService_NameError] = useState("");
    const [package_name, setPackage_Name] = useState("");
    const [package_nameerror, setPackage_NameError] = useState("");
    const [date_from, setDate_From] = useState("");
    const [date_to, setDate_To] = useState("");
    const [time_from, setTime_From] = useState("");
    const [time_to, setTime_To] = useState("");
    const [accepted, setAccepted] = useState(true);
    const [rejected, setRejected] = useState(false);
    const [status_accepted, setStatus_Accepted] = useState("");
    const [status_rejected, setStatus_Rejected] = useState("");
    const params = useParams();
     console.warn(params.id);
     const navigate = useNavigate();
    
    useEffect(() => {
    getRequestView();
    getRequestDetailsView();
    },[]);

    const getRequestView = async() => {
        let result = await fetch(`${server}api/v1/request/view/userView/${params.id}`);
        result = await result.json();
        setRequest_Id(result[0].request_id);
        setFull_Name(result[0].fullname);
        setService_Name(result[0].service_name);
        setPackage_Name(result[0].package_name);
        // setDate_From(result[0].from)_date;
        // setDate_To(result[0].to_date);
        // setTime_From(result[0].from_time);
        // setTime_To(result[0].to_time);

    }
       const getRequestDetailsView = async() => {
        let result = await fetch(`${server}api/v1/requestDetail/request/${params.id}`);
        result = await result.json();
        setDate_From(result[0].from_date);
        setDate_To(result[0].to_date);
        setTime_From(result[0].from_time);
        setTime_To(result[0].to_time);

       }
  
    //    const [accepted, setAccepted] = useState(true);
    //    const [rejected, setRejected] = useState(false);
       const acceptedHandler = async () => {
        let request_status = "accepted";
        let result =   await fetch (`${server}api/v1/request/updateRequestStatus/${params.id}`, {
            method: 'PUT',
                 body: JSON.stringify({request_status}),
                 headers: {
                    'Content-Type': 'Application/json'
                }
          });
          result = await result.json();
          if (result) {
              navigate('/request');
            }
           setAccepted(true);
           setRejected(false);
       };
       const rejectedHandler = async () => {
        let request_status = "rejected";
        let result =   await fetch (`${server}api/v1/request/updateRequestStatus/${params.id}`, {
            method: 'PUT',
                 body: JSON.stringify({request_status}),
                 headers: {
                    'Content-Type': 'Application/json'
                }
          });
          result = await result.json();
          if (result) {
              navigate('/request');
            }
           setAccepted(false);
           setRejected(true);
       };         

        const handleSubmit = async(e, values) =>
        {
                e.preventDefault();
            // const {...data} =values;
            if(full_name==='')
            {
                setFull_NameError('Full Name is required');
                
            } else if (!/^[A-Z,a-z]+/.test(full_name.trim())) {
                setFull_NameError('Enter a valid full name');
            }
            else
            {
    
                 setFull_NameError(false)
                // let result = await fetch(`${server}api/v1/request/view/userView/${params.id}`, {
                //     method: 'PUT',
                //     body: JSON.stringify({ user_name, service_name }),
                //     headers: {
                //         'Content-Type': 'Application/json'
                //     }
                //     });
                    // result = await result.json();
                    // if (result) {
                        navigate('/request');
                    // }
                }     
        }

         let cnt=1;
  return (
    <div>
       <div className='col-sm-10 offset-sm-2'>
       <div className="page-body">
       <div className="container-fluid">
       <div className="card tab2-card">
       <div className="card-header">
       <h5>View Request</h5>
       <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/request">Back</Link>
                </div>
            </div>
          </div>
      </div>
        <div className="row">
        {/* <div className='col-sm-2'></div> */}
          <div className="col-sm">
          <div className="card-body">   
          <form onSubmit={handleSubmit}>
            <div className="row form-group">
               {/* <table border={1}>
                 <tr>
                     {/* <th>
                     <li>Request Id:-</li></th> */}
                     {/* <th>Full Name:-</th>
                     <th>Service Name:-</th>
                     <th>Package Name:-</th>
                     <th>From Date:-</th>
                     <th>To Date:-</th>
                     <th>From Time:-</th>
                     <th>To Time:-</th>
                   </tr>
                   <tr> */}
                    {/* <th><span>{request_id}</span></th> */}
                    {/* <th><span>{full_name}</span></th>
                    <th><span>{service_name}</span></th>                 
                    <th><span>{package_name}</span></th>
                    <th><span>{date_from}</span></th>
                    <th><span>{date_to}</span></th>
                    <th><span>{time_from}</span></th>
                    <th><span>{time_to}</span></th>
                </tr>
              </table>  */}
            </div>
  
           <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-sm-2">
                    <p>Full Name:-</p>
                    </div>
                    <div className="col-sm-2">
                    <p>{full_name}</p>           
                    </div>
                    <div className="col-sm-2">
                    <p>Service Name:-</p>                    
                    </div>
                    <div className="col-sm-2">
                    <p>{package_name}</p>
                    </div>
                    <div className="col-sm-2">
                    <p>From Date:-</p>
                    </div>
                    <div className="col-sm-2">
                    <p>{date_from.slice(0,10)}</p>
                    </div>
                </div>
             </div>
             </div><br/>
             <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-sm-2">
                    <p>To Date:-</p>
                    </div>
                    <div className="col-sm-2">
                    <p>{date_to.slice(0,10)}</p>
                    </div>
                    <div className="col-sm-2">
                    <p>From Time:-</p>
                    </div>
                    <div className="col-sm-2">
                    <p>{time_from}</p>
                    </div>
                    <div className="col-sm-2">
                    <p>To Time:-</p>
                    </div>
                    <div className="col-sm-2">
                    <p>{time_to}</p>
                    </div>
                </div>              
            </div>
            </div><br/>
            <div className="row">
             <div className='col-sm-10 offset-sm-8'>
              <button type='submit'  onClick={acceptedHandler} className='btn btn-success'>Accepted</button>&nbsp;
              <button type='submit' onClick={rejectedHandler} className='btn btn-primary'>Rejected</button>
            </div>
       
       </div>
      </form>
      </div>
      </div>   
     </div>
    </div>
   </div>
  </div>      
 </div>
</div>
   );
}

export default requestview;
