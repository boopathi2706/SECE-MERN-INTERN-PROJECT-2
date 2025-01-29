import { useState } from "react";
import "../css/StoryBoard.css";

const StoryBoard = () => {
  const [stories, setStories] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleAddStory = () => {
    if (image && content) {
      setStories([...stories, { image, content }]);
      setImage(null);
      setContent("");
      setShowPopup(false);
    } else {
      alert("Please upload an image and add content!");
    }
  };

  return (
    <div className="Story_body">
      <div className="story_container">
        {stories.map((story, index) => (
          <div key={index} className="story_box">
            <div className="story_image">
              <img src={story.image} alt="Story" className="story_img" />
            </div>
            <div className="story_content">{story.content}</div>
          </div>
        ))}
        <div className="story_box">
          <div className="buttons">
            <button className="s_btn add_btn" onClick={() => setShowPopup(true)}>ADD</button>
            <button className="s_btn remove_btn" onClick={() => setStories([])}>REMOVE</button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup_overlay">
          <div className="add_story_container">
            <h2 className="story_title">Add Story</h2>
            <div className="Story_user_input">
              <label htmlFor="image" className="labels">Upload Image</label>
              <input type="file" id="image" accept="image/*" onChange={handleImageUpload} />
            </div>
            <div className="Story_user_text">
              <label htmlFor="content" className="labels">Content</label>
              <textarea id="content" rows={5} cols={50} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button className="S cancel1_btn" onClick={handleAddStory}>Add Story</button>
            <button className="S cancel_btn" onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryBoard;
