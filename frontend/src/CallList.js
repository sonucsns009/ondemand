import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import Data from './component/Call/Data';
import AssignCall from "./component/Call/AssignCall";
import AddCall from "./component/Call/AddCall";
import EditCall from "./component/Call/EditCall";

const CallList = () => {
    return(
        <>
            <div className='col-sm-9 offset-sm-3'>
<div className="page-body">



<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage Call</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addcall">Add Call</Link>
                </div>
                
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>Call Id</th>
                  <th>Call Message</th>
                  <th>Call Description</th>
                  <th>Call Type</th>
                  <th>Call Datetime</th>
                  <th>Call Nextdatetime</th>
                  {/* <th>Add Date</th>
                  <th>Update Date</th> */}
                  <th>Action</th>
                </tr>
                {
                  Data.callData.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.Call_id}</td>
                        <td>{item.Call_message}</td>
                        <td>{item.Call_description}</td>
                        <td>{item.Call_type}</td> 
                        <td>{item.Call_datetime}</td>
                        <td>{item.Call_nextdatetime}</td>
                        {/* <td>{item.dateadded}</td>
                        <td>{item.dateupdated}</td> */}
                        <td>
                        <Link to="/editCall"><button className='btn btn-primary'><i className='fa fa-edit'></i> </button></Link> | 
                        <button className='btn btn-primary'><i className='fa fa-trash'></i> </button> |
                        <Link to="/assigncall"><button className='btn btn-primary'><i className='fa fa-eye'></i> </button></Link>
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
<Route path="/addcall" element={<AddCall />} />
<Route path="/editcall" element={<EditCall />} />
<Route path="/assigncall" element={<AssignCall />} />
</Routes>
</div>
        </>
    )
}

export default CallList;


// const CallList = () => {
//     const notify = () => toast("Calling Anil Kale, 15.06.2021 11pm 9089786756");
//     return(
//         <>
//             <div>
//              <div className='col-sm-9 offset-sm-3'>
//                 <div class="page-body">
//                     <div className="container-fluid"><br/>   
//                         <div className="card tab2-card">
//                             <div className="card-header">
                                
//                             <h5>View Call</h5>
//                             <div className="card-header-right">
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <Link className="sidebar-header btn btn-primary" to="/dashboard">Back</Link>
//                                     </div>     
                                    
//                                     </div>
//                                 </div>	
//                             </div>
//                             <div className="card-body">   
                  
//                                 <div className="row form-group">     
//                                     <div className='col-sm-2'>Call Id</div>
//                                     <div className='col-sm-3'>
//                                         <input type="text" readOnly="readOnly" value={"8001"}  className="form-control"/>
//                                     </div>

//                                     <div className='col-sm-2'>Customer Id</div>
//                                     <div className='col-sm-3'>
//                                         <label>1102</label>
//                                     </div>
//                                 </div>
//                                 <div className="row form-group">     
//                                     <div className='col-sm-2'>Call Description</div>
//                                     <div className='col-sm-3'>
//                                         <label>Messenger makes it easy and fun to stay close to your favourite people.</label>
//                                     </div>
//                                     <div className='col-sm-2'>Call DateTime </div>
//                                     <div className='col-sm-3'>
//                                         <label>30.05.2022 11AM</label>
//                                     </div>
//                                 </div>

//                                 <div className="row form-group">     
//                                     <div className='col-sm-2'>Call NextDatetime </div>
//                                     <div className='col-sm-3'>
//                                         <label>15.06.2022 11AM</label>
//                                     </div>
//                                     <div className='col-sm-2'>Call Type</div>
//                                     <div className='col-sm-3'>
//                                         <label>Meeting</label>
//                                     </div>
//                                 </div>

//                                 <div className="row form-group">     
//                                     <div className='col-sm-2'>Lead Asssign To</div>
//                                     <div className='col-sm-3'>
//                                     <label>Pratibha Shelke</label>
//                                     </div>
                                    
//                                 </div><br/>
//                                 <div className="row form-group">     
//                                     <div className='col-sm-12'>
//                                         {/* <h3>Add Call</h3> */}
//                                         <button className="btn btn-primary" onClick={notify}>list</button>
//                                         <ToastContainer />
//                                     </div>                                                                
//                                 </div>
//                                 <hr />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
               
//             </div>
//         </div>
//         </>
//     )
// }

//export default CallList;