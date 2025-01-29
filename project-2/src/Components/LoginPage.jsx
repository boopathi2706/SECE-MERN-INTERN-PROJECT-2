import { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import MainDash from "./MainDash";
const LoginPage = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  var url='';
  const handleLogin=()=>{
   
    if(username==="Boopathi" && password==="12345678" ){
       alert("login successfully");
       url='/main';
    }
    else{
      alert("login unsuccesfull (Username / Password invalid)");
    }
  }
  return (
      <div className="login_body">
      <div className="container">
        <h2 className="title">Login</h2>
        <div className="user2_input">
          <label htmlFor="username" className="lables">
            User name
          </label><br />
          <input type="text" id="username" className="inputs1" onChange={(e)=>{setUsername(e.target.value)}} required />
        </div>
        <div className="user2_input">
          <label htmlFor="password" className="lables">
            Password
          </label><br />
          <input type="password" id="password" className="inputs1" onChange={(e)=>setPassword(e.target.value)} required />
        </div>

        <p className="forget">Forget Password</p>
        <button className="btn login_btn" onClick={handleLogin}><Link to={'/main'} className="nevigate_sign" >Login</Link></button>
        <p className="create_new_account">
          Create an Account <span><Link className="sign_link" to='/signup'>Sign up</Link></span>
        </p>
        <p className="with">Login with</p>
        <div className="link_container">
          <div className="link link1"></div>
          <div className="link link2"></div>
          <div className="link link3"></div>
          <div className="link link4"></div>
        </div>
      </div>
      </div>
    
  );
};
export default LoginPage;
