import { useState } from "react";
import "../css/MainDash.css";
import AddStory from "./AddStory";
import Navbar from "./Navbar";
import Contact from "./Contact";
import StoryBoard from "./StoryBoard";

const MainDash = () => {
  const [story, setAddStory] = useState(false);
  const [contact, setContact] = useState(false);
  const [main, setMain] = useState(true);
  const handleClick=()=>{
    setAddStory((pre)=>!pre);
    
    setContact(false);
    setMain(false);
  }
  const handleContact=()=>{
    setContact((con)=>!con);
    setAddStory(false);
    setMain(false);
  }
  const handleMain=()=>{
       setMain((pre)=>!pre);
        
       setContact(false);
       setAddStory(false);
  }
  return (
    <div className="main_body">
      <Navbar onClickStory={handleClick} onClickContact={handleContact} onClickMain={handleMain} />
      {story && 
      <div><AddStory /></div>}
      {contact && 
      <div><Contact /></div>}
      {main && 
      <div><StoryBoard /></div>}
    </div>
  );
};
export default MainDash;
