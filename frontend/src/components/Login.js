import React, { useEffect, useState } from 'react';
import Logo from '../images/CSNS_logo2.png';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username,setUsername]=useState("");
  const [usernameerror,setUsernameError]=useState(false);

    const [password,setPassword]=useState("");
    const [passworderror,setPasswordError]=useState(false);
    //const navigate=useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
         // navigate("/Maincategory");
        }
    }, [])

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
          axios.post("http://localhost:5000/api/v1/admin/login", 
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
                  //navigate("/dashboard");
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
      <div className="col-sm-12">
      
      <div className="hold-transition login-page">
        <div className="login-box text-center">
        <div clasName="container">    
          <div className="row">
                     
          {/* /.login-logo */}
          
          
              <div className="col-sm-4 p-0 card center">
              <div className="card bg-primary bg-color">
            <div className="login-logo">
             <img className="blur-up lazyloaded" alt="" src={Logo} style={{ height: 100 }} />           
            {/* <a href="../../index2.html"><b>On Demand System</b>CSNS</a> */}
          </div>
          </div>
              <div className="card">
               <form name="frm_login" id="frm_login" onSubmit={handleSubmit}>

              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" value={username} id="username" autoComplete="off" onChange={(e)=>setUsername(e.target.value)}/>
                    <div className="input-group-append">
                      
                    </div>
                    {usernameerror&& <div className="error-msg" style={{color:"red"}}>{usernameerror}</div>}

                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="input-group-append">
                      
                    </div>
                    {passworderror&& <div className="error-msg" style={{color:"red"}}>{passworderror}</div>}

                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="row">
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                    {/* /.col */}
                  </div>
                  <div className="row">
                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  {/* <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </a> */}
                </div>
                </div>
                {/* /.social-auth-links */}
                <div className="row">
                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                </div>
                <div className="row">
                <p className="mb-0">
                  <a href="register.html" className="text-center">Register a new membership</a>
                </p>
              </div>
              </div>
              {/* /.login-card-body */}
            </form>
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