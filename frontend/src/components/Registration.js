import React, { useState } from 'react';
import Logo from '../images/CSNS_logo2.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration(props) {
  const [number, setNumber] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [data, setdata] = useState({ fullname: '', emailaddress: '', upassword: '', address: '',  ugender: '', dob: '', age: '', country_code: '', mobilenumber: '', uphoto: '',state: '', country: '', city: '' })  
  const apiUrl = "http://localhost:5000/api/v1/users";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { fullname: data.fullname, emailaddress: data.emailaddress, upassword: data.upassword, address:data.address, ugender:data.ugender, dob:data.dob, age:data.age, country_code:data.country_code, mobilenumber:data.mobilenumber, uphoto:data.uphoto, state:data.state, country:data.country, city:data.city };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    /*debugger;*/  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }   

    return(
      <div className='col-sm-12'>
        <div className="hold-transition register-page">
          <div className="container"> 
           <div className="row">
            <div className="col-sm-6 p-0 card center">
              <div className="card bg-primary bg-color">
                <div className="register-logo">
                 <img className='blur-up lazyloaded' src={Logo} alt="" style={{ height: 100 }} /> 
                {/* <a href="../../index2.html"><b>On Demand System</b>CSNS</a> */}
                </div>
               </div>
           </div>
          
          <div className="card-body register-card-body">
          <p className="login-box-msg">Register a new membership</p>

      <form onSubmit={Registration} action="" method="post">
        <div className="input-group mb-3">
           <input type="text" className="form-control" name="fullname" onChange={onChange} value={data.fullname} id="exampleFirstName" placeholder="FullName"/>
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" name="emailaddress" onChange={onChange} value={data.emailaddress} id="exampleFirstName" placeholder="Email" />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="upassword" onChange={onChange} value={data.upassword} id="exampleLastName" placeholder="Password" />
          <div className="input-group-append">
            
          </div>
        </div>
        
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="RetypePassword" onChange={onChange} value={data.RetypePassword} id="exampleLastName" placeholder="Retype password" />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="address" className="form-control" name="address" onChange={onChange} value={data.address} id="exampleLastName" placeholder="address" />
          <div className="input-group-append">
            
          </div>
          {/* http://localhost:5000/ */}
        </div>
        <div className="input-group mb-3">
          <input type="radio" className="form-control" name="ugender" onChange={onChange} value='male' id="exampleLastName" placeholder="gender" /> Male
          <input type="radio" className="form-control" name="ugender" onChange={onChange} value='female' id="exampleLastName" placeholder="gender" /> Female 
          <input type="radio" className="form-control" name="ugender" onChange={onChange} value='other' id="exampleLastName" placeholder="gender" /> Other
           <div className="input-group-append">
            
          </div>
        </div>          
        <div className="input-group mb-3">
          <lable>DOB:-<DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/></lable>
        
        </div>
        <div className="input-group mb-3">
          <input type="number" maxLength={2} className="form-control" name="age" onChange={onChange} value={data.age} id="exampleLastName" placeholder="age" />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="number" className="form-control" name="country_code" onChange={onChange} value={data.country_code} id="exampleLastName" placeholder="countrycode" />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="number" maxLength={10} className="form-control" name="mobilenumber" onChange={onChange} value={data.mobilenumber} id="exampleLastName" placeholder="mobile" />
          <div className="input-group-append">
                      </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="state" onChange={onChange} value={data.state} id="exampleLastName" placeholder="state" />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="country" onChange={onChange} value={data.country} id="exampleLastName" placeholder="country" />
          <div className="input-group-append">
            
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="city" onChange={onChange} value={data.city} id="exampleLastName" placeholder="city" />
          <div className="input-group-append">
            
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
              <label for="agreeTerms">
               I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
        
          <div className="col-sm-4">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
        
        </div>
      </form>

      {/* <a href="login.html" className="text-center">I already have a membership</a> */}
    </div>
    
  </div>
       </div>
     </div>
     </div>
    
    )
}



export default Registration;