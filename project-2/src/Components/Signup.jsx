import { useState } from "react";
import "../css/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleSignup=()=>{
    if(name!=="" && email!=="" && password !==""){
      alert("signup successfully");
    }
    else{
      alert("unsuccessfully");
    }
  }
  return (
    <div className="signup_body">
      <div className="container">
        <h2 className="title">  Signup</h2>
        <div className="user1_input">
          <label htmlFor="username" className="lables">
            User name
          </label><br />
          <input type="text" id="username" className="inputs" onChange={(e)=>{setName(e.target.value)}} required />
        </div>
        <div className="user1_input">
          <label htmlFor="email" className="lables">
            Email id
          </label><br />
          <input type="email" id="email" className="inputs" onChange={(e)=>{setEmail(e.target.value)}} required />
        </div>
        <div className="user1_input">
          <label htmlFor="password" className="lables">
            Password
          </label><br />
          <input type="password" id="password" className="inputs" onChange={(e)=>{setPassword(e.target.value)}} required />
        </div>
        <button className="btn login1_btn" type="submit" ><Link className="btn_link" to={'/main'}>Sign up</Link></button>
        <p className="create_new_account">
          Already have an Account <span><Link className="login_link" to='/'>Login</Link></span>
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
export default Signup;
