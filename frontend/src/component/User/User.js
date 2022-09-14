import React,{useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AddUser from './AddUser';
import EditUser from './EditUser';

function User() {

  const [user, setUser] = useState([]);

  useEffect(()=>{
    getUser();
  },[])

  const getUser = async() => {
    let result = await fetch("http://localhost:5000/api/v1/user");
    result = await result.json();
    setUser(result);
    }
  //console.log(user);
  const user_delete = async(id) =>{
    let user_status="delete";
    alert("Do You Want to delete", id);
    await fetch (`http://localhost:5000/api/v1/user/${id}`, {
      method: 'DELETE',
                body: JSON.stringify({ user_status}),
                headers: {
                    'Content-Type': 'Application/json'
                }
                }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getUser();
      })
    })
  }

  return(
    <>
<div className='col-sm-9 offset-sm-3'>
<div className="page-body">
<div className="container-fluid"><br/>   
    <div className="card tab2-card">
        <div className="card-header">
          <h5>Manage User</h5>
        <div className="card-header-right">
            <div className="row">
                <div className="col-lg-12">
                    <Link className="sidebar-header btn btn-primary" to="/addUser">Add User</Link>
                </div>
              </div>
          </div>	
        </div>
        <div className="card-body">   
                         
        <div className="row form-group">     
            <table className='table table-hover'>
                <tr>
                  <th>User Id</th>
                  <th>Username</th>
                  {/* <th>Password</th> */}
                  <th>Login User Id</th>  
                  <th>User Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {
                  user.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.user_id}</td>
                        <td>{item.username}</td>
                        {/* <td>{item.password}</td> */}
                        <td>{item.login_user_id}</td>
                        <td>{item.user_type}</td> 
                        <td>{item.user_status}</td>
                        <td>
                        <Link to={"/edituser/"+item.user_id}><button className='btn btn-primary' >
                                <i className='fa fa-edit'></i> </button></Link> | 
                                <button className='btn btn-primary' onClick={()=>user_delete(item.user_id)}>
                                <i className='fa fa-trash'></i> </button>
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
<Route path="/adduser" element={<AddUser />} />
<Route path="/edituser" element={<EditUser />} />

</Routes>
</div>
</>
  )
    }


export default User;