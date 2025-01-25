import { Link } from "react-router-dom";
import '../css/AddStory.css'
import Navbar from "./Navbar";
const AddStory = () => {
  return (
    <div className="story_body">
    <div className="add_story_container">
      <h2 className="story_title">Add Story</h2>
      <div className="Story_user_input">
        <label htmlFor="image" className="lables">
          Upload Image
        </label>
        <br />
        <input type="file" id="image" className="inputs" accept="image/*" required />
      </div>
      <div className="Story_user_text">
        <label htmlFor="password" className="lables">
          Content
        </label>
        <br />
        <textarea className="inputs textarea"  name="content" id="content" minLength={8} maxLength={150}  rows={5} 
  cols={50}></textarea>
      </div>

      <button className="btn Story_btn">
        <Link className="nevigate_main" to={"/main"}>
          Add Story
        </Link>
      </button>
    </div>
    </div>
  );
};
export default AddStory;
