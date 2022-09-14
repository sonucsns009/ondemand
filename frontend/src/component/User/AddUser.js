import React, { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';


function AddUser() {
    const [username,setUserName]=useState("");
    const [usernameerror,setUserNameError]=useState("");

    const [password, setPassword]=useState("");
    const [passworderror, setPasswordError]=useState("");

    const [user_type,setUser_Type]=useState("");
    const [usertypeerror,setUserTypeError]=useState("");

    const [login_user_id, setLogin_User_Id]=useState("");
    const [loginuseriderror, setLoginUserIdError]=useState("");

    const [employee, setEmployee] = useState([]);
    useEffect(()=>{
        getEmployee();
      },[])
    
      const getEmployee = async() => {
        let result = await fetch("http://localhost:5000/api/v1/employee");
        result = await result.json();
        setEmployee(result);
        }
      //console.log(employee);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(username!==''){
            if (!/^[A-Za-z]+/.test(username.trim())) {
                setUserNameError('Enter a valid name');
            }
        } else{
            setUserNameError('User Name is required');
        }
        if(password!==''){
            if (password.length < 7) {
                setPasswordError('Password needs to be 7 characters or more');
            }
        } else{
            setPasswordError('User Password is required');
        }
        if(login_user_id!==''){

        } else{
            setLoginUserIdError('Login Id is required');
        }
        if(user_type===''){
            setUserTypeError('User Type is required');
        } else{
            setUserNameError(false)
            setLoginUserIdError(false)
            setPasswordError(false)
            setUserTypeError(false)
            axios.post("http://localhost:5000/api/v1/user", 
            { username: username, password: password, user_type: user_type, login_user_id: login_user_id,
             method: "Post",
            body: JSON.stringify({username, password, user_type, login_user_id }),
            header: {
                "Content-type":"application/json"
                }
            }).then(respone =>{
                console.log(respone);
                return respone.json();
               
            }).catch((error)=>{
                console.log(error);
            });
            setUserName("")
            setPassword("")
            setLogin_User_Id("")
            setUser_Type("")
        }   
    }
    return (
        <div className='col-sm-9 offset-sm-3'>
                <div class="page-body">
                    <div className="container-fluid"><br/>   
                        <div className="card tab2-card">
                            <div className="card-header">   
                            <h5>Add User</h5>
                            <div className="card-header-right">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Link className="sidebar-header btn btn-primary" to="/user">Back</Link>
                                    </div>
                                    </div>
                                </div>	
                            </div>
                            <div className="card-body">   
                            <form onSubmit={handleSubmit}>             
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Username :- </div>
                                    <div className='col-sm-6'>
                                        <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} className='form-control'/>
                                        {usernameerror&& <div className="error-msg" style={{color:"red"}}>{usernameerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Password :- </div>
                                    <div className='col-sm-6'>
                                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
                                        {passworderror&& <div className="error-msg" style={{color:"red"}}>{passworderror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>Login User :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={login_user_id} onChange={(e)=>setLogin_User_Id(e.target.value)} className='form-control'>
                                        <option>Select Login User</option>
                                        {
                                                employee.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.employee_id}>{item.employee_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {loginuseriderror&& <div className="error-msg" style={{color:"red"}}>{loginuseriderror}</div>}
                                    </div>
                                </div>
                                
                                <div className="row form-group">     
                                    <div className='col-sm-2 '>User Type :- </div>
                                    <div className='col-sm-6'>
                                        <select type="number" value={user_type} onChange={(e)=>setUser_Type(e.target.value)} className='form-control'>
                                        <option>Select User Type</option>
                                            <option value="employee">Employee</option>
                                            <option value="manager">Manager</option>
                                        </select>
                                        {usertypeerror&& <div className="error-msg" style={{color:"red"}}>{usertypeerror}</div>}
                                    </div>
                                </div>
                                <div className="row form-group"> 
                                    <div className='col-sm-2 '>
                                    </div>    
                                    <div className='col-sm-6'>
                                        <button type='submit' className='btn btn-primary'>Add </button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default AddUser;