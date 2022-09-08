import React from 'react';


function Dashboard(props) {
    const mystyle = {
        height: "80px",
        width: "200px",
       
      };
      //const auth = localStorage.getItem('user');
    return (
        <div className='col-sm-9 offset-sm-2'>
            <div className="page-body"><br/>
                <div class="row">
                    <div class="col-lg-6 col-xl-3 xl-30">

                       <h3>Dashboard</h3>
                    </div>
                </div><br/>
                <div class="row">
                    <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-warning card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt=""/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>MAIN CATEGORY</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" /></h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-secondary  card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt=""/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>MAIN SUBCATEGORY</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" /></h3>
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
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt=""/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>SERVICES</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" /></h3>
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
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt=""/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong>PACKAGES</strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" /></h3>
                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 xl-30">
                        <div class="card o-hidden widget-cards">
                            <div class="bg-secondary card-body" >
                                <div class="media static-top-widget row">
                                    <div class="de-customer-icon">  
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt=""/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong></strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" /></h3>
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
                                        <img src="./uploads/flaticon/dashboard.png" style={mystyle} alt=""/>
                                    </div>
                                    <div>
									    <div>
                                            <span className="m-0" style={{color: '#ffffff'}}><strong></strong></span>
                                            <h3 className="mb-0" style={{color: '#ffffff'}}><span className="counter" /></h3>
                                            </div>

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

export default Dashboard;