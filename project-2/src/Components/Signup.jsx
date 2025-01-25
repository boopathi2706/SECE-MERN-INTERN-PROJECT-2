import "../css/Signup.css";

const Signup = () => {
  return (
      <div className="container">
        <h2 className="title">  Signup</h2>
        <div className="user_input">
          <label htmlFor="username" className="lables">
            User name
          </label><br />
          <input type="text" id="username" className="inputs" required />
        </div>
        <div className="user_input">
          <label htmlFor="email" className="lables">
            Email id
          </label><br />
          <input type="email" id="email" className="inputs" required />
        </div>
        <div className="user_input">
          <label htmlFor="password" className="lables">
            Password
          </label><br />
          <input type="password" id="password" className="inputs" required />
        </div>
        <button className="btn login_btn">Sign up</button>
        <p className="create_new_account">
          Already have an Account <span>Login</span>
        </p>
        <p className="with">Login with</p>
        <div className="link_container">
          <div className="link link1"></div>
          <div className="link link2"></div>
          <div className="link link3"></div>
          <div className="link link4"></div>
        </div>
      </div>
  );
};
export default Signup;
