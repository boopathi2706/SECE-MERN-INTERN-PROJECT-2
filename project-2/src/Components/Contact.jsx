import { Link } from "react-router-dom";
import '../css/Contact.css'
const Contact = () => {
  return (
    <div className="Contact_body">
    <div className="Contact_container">
      <h2 className="Contact_title">Contact Me</h2>
      <div className="Contact_user_input">
        <label htmlFor="email" className="lables">
          Email ID
        </label>
        <br />
        <input type="email" id="contact" className="inputs" required />
      </div>
      <div className="Contact_user_text">
        <label htmlFor="password" className="lables">
          Meassage
        </label>
        <br />
        <textarea className="inputs textarea"  name="content" id="content" minLength={8} maxLength={150}  rows={5} 
  cols={50}></textarea>
      </div>

      <button className="btn Contact_btn">
        <Link className="nevigate_main" to={"/main"}>
          Send Message
        </Link>
      </button>
    </div>
    </div>
  );
};
export default Contact;
