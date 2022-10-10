import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "./images/CSNS_logo2.png";
import axios from 'axios';
import server from './const';
function Login() {

    const [username,setUsername]=useState("");
    const [usernameerror,setUsernameError]=useState(false);

    const [password,setPassword]=useState("");
    const [passworderror,setPasswordError]=useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
         // fetchBusinesses();
           navigate("/dashboard");
        }
    })

    const handleSubmit = (e) =>{
      e.preventDefault();
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;  
      if(username!==''){
          if (username!=="" && !testEmail.test(username)) {
              setUsernameError('Enter a valid name');
          }
      } else{
          setUsernameError('Username is required');
      }
      if(password!==''){
          if (password.length < 7) {
              setPasswordError('Password needs to be 7 characters or more');
          }
      } else{
          setPasswordError('User Password is required');
      }
    
      if(password===''){
        setPasswordError('User Password is required');
      } else{
          setUsernameError(false)
          setPasswordError(false)
          let admin_password;

          axios.post(`${server}api/v1/admin/login`, 
          { username: username, admin_password: password,
           method: "POST",
          body: JSON.stringify({username, admin_password }),
          header: {
              "Content-type":"application/json"
              }
          }).then(respone =>{
              
                console.warn(respone.data);
                if(respone.data.length > 0){
                  setPasswordError(false)
                  localStorage.setItem('user', JSON.stringify(respone));
                  navigate("/dashboard"); 
         window.location.reload();

                  return respone.json();
                }
                else {
                  setPasswordError('Username or Password not match');
                }
          }).catch((error)=>{
              console.log(error);
          });
          setUsername("")
          setPassword("")
      }   
  }

 
    return (
        <div className='col-sm-12'>
        <div class="page-body">
        <div className="authentication-box">
            <div className="container">
              <div className="row">
                <div className="col-md-5 p-0 card-left">
                
                    <div className="card-body">
                  <div className="card bg-primary bg-color">
                    <div className="svg-icon" style={{padding: '16px !important'}}>
                      <img className="blur-up lazyloaded" src={Logo}  alt="" style={{marginLeft:-30}} />
                    <br/>
                    <div className="single-item slick-initialized slick-slider" style={{paddingTop: 50}}>
                      <div className="slick-list draggable">
                        <div className="slick-track" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}>
                          <div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{width: 220}}>
                            <div>
                              <div style={{width: '100%', display: 'inline-block'}}>
                                <div>
                                  <h3>Welcome to OnDemand System</h3>
                                </div>
                              </div></div></div></div></div></div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-md-5 p-0 card-right">
                  <div className="card tab2-card">
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="top-profile-tab" data-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true"><span className="icon-user mr-2" />Login</a>
                        </li>
                        
                      </ul>
                      <div className="tab-content" id="top-tabContent">
                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                          <form name="frm_login" id="frm_login" onSubmit={handleSubmit}>																											
                            <div className="form-group">	
                              <select name="user_type" id="user_type" required className="form-control">	
                                <option value="Admin">Admin</option>	
                                {/* <option value="Subadmin">Subadmin</option>			 */}
                              </select>
                            </div>	
                            <div className="form-group">
                              <input  name="username" type="email" className="form-control" placeholder="Username/ EmailAddress" value={username} id="username" autoComplete="off" onChange={(e)=>setUsername(e.target.value)}/>
                              {usernameerror&& <div className="error-msg" style={{color:"red"}}>{usernameerror}</div>}

                            </div>
                            <div className="form-group">
                              <input  name="password" id="password" type="password" className="form-control" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                              {passworderror&& <div className="error-msg" style={{color:"red"}}>{passworderror}</div>}

                            </div>
                            <div className="form-terms">
                              <div className="custom-control custom-checkbox mr-sm-2">

                              </div>
                            </div>
                            <div className="form-button pull-right">
                              <button className="btn btn-primary" type="submit">Login</button>
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
        </div>
        </div>
    );
}

export default Login;