import React from 'react';
import {  Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function AssignCall() {
    // const notify = () => toast("Calling Anil Kale, 15.06.2021 11pm 9089786756",
    // {
    //     autoClose: 10000,
    // });


    return (
        <div>
             <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">
                                
                            <h5>View Call</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/call">Back</Link>
                                    </div>     
                                    
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <form onSubmit="">                  
                                <div className="row form-group">     
                                    <div className='col-sm-2'>Call Id</div>
                                    <div className='col-sm-3'>
                                        <input type="text" readOnly="readOnly" value={"8001"}  className="form-control"/>
                                    </div>

                                    <div className='col-sm-2'>Call Message</div>
                                    <div className='col-sm-3'>
                                        <label>Good Morning</label>
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-2'>Call Description</div>
                                    <div className='col-sm-3'>
                                        <label>Messenger makes it easy and fun to stay close to your favourite people.</label>
                                    </div>
                                    <div className='col-sm-2'>Call DateTime </div>
                                    <div className='col-sm-3'>
                                        <label>30.05.2022 11AM</label>
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-2'>Call NextDatetime </div>
                                    <div className='col-sm-3'>
                                        <label>15.06.2022 11AM</label>
                                    </div>
                                    <div className='col-sm-2'>Call Type</div>
                                    <div className='col-sm-3'>
                                        <label>Meeting</label>
                                    </div>
                                </div>

                                <div className="row form-group">     
                                    <div className='col-sm-2'>Lead Asssign To</div>
                                    <div className='col-sm-3'>
                                    <label>Pratibha Shelke</label>
                                    </div>
                                    
                                </div><br/>
                                {/* <div className="row form-group">     
                                    <div className='col-sm-12'>
                                        <button className="btn btn-primary" onClick={notify}>list</button>
                                        <ToastContainer />
                                    </div>                                                                
                                </div> */}
                                {/* <hr /> */}
                                
                               
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default AssignCall;