import React from "react";
import { Routes, Route } from "react-router-dom";
import CallList from './CallList';
//import Call from './component/Call/Call';


function Dashboard() {
    const mystyle = {
        height: "80px",
        width: "200px",
       
      };
      //const auth = localStorage.getItem('user');

    return (<>
       
        <div className='col-sm-9 offset-sm-3'>
            <div className="page-body"><br/>
                <div class="row">
                    <div class="col-lg-6 col-xl-3 xl-30">

                       <h3>Dashboard</h3>
                    </div>
                </div><br/>
                <div class="row">
                <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-secondary  card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dimg"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL LEADS</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50
                                                {/* {
                                                    lead.map((item, index)=>{
                                                        return(
                                                            <>
                                                            {lead.length}
                                                            </>
                                                        )
                                                    })
                                                } */}
                                            </h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-warning card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dashboard-logo"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL CUSTOMERS</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50</h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-primary card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dimg1"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL COMPANY</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50</h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-warning card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dimg2"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL BRANCH</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50</h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-secondary card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dimg3"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL USER</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50</h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-primary card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dimg4"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL EMPLOYEE</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-warning card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt="dashboard-logo"/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>TOTAL CALLS</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" />50</h3>
                                            {/* <Link to="/calllist"><button  className='btn btn-outline-warning'>Call List</button></Link> */}
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Routes>
                <Route path="/calllist" element={<CallList />} />
            </Routes>
        </div>
        </>
        
    );
}

export default Dashboard;