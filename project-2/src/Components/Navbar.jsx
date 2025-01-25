import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ onClickStory, onClickContact }) => {
  return (
    <div className="nav_container">
      <h2 className="Logo_title">
        Story<span>Board</span>
      </h2>
      <ul className="nav_items">
        <li className="nav_item">
          <Link to={"/main"} className="links">
            Home
          </Link>
        </li>
        <li className="nav_item">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault(); 
              onClickStory();
            }}
            className="links"
          >
            Add Story
          </Link>
        </li>
        <li className="nav_item">
          <Link
            to="#"
            className="links"
            onClick={(e) => {
              e.preventDefault(); 
              onClickContact();
            }}
          >
            Contact Me
          </Link>
        </li>
        <div className="profile"></div>
      </ul>
    </div>
  );
};
export default Navbar;
