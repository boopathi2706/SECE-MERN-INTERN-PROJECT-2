import "../css/Login.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="login_body">
      <div className="container">
        <h2 className="title">Login</h2>
        <div className="user_input">
          <label htmlFor="username" className="lables">
            User name
          </label><br />
          <input type="text" id="username" className="inputs" required />
        </div>
        <div className="user_input">
          <label htmlFor="password" className="lables">
            Password
          </label><br />
          <input type="password" id="password" className="inputs" required />
        </div>

        <p className="forget">Forget Password</p>
        <button className="btn login_btn"><Link className="nevigate_sign" to={'/main'}>Login</Link></button>
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
