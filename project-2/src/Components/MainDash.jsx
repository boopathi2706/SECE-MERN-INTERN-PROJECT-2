import { useState } from "react";
import "../css/MainDash.css";
import AddStory from "./AddStory";
import Navbar from "./Navbar";
import Contact from "./Contact";

const MainDash = () => {
  const [story, setAddStory] = useState(false);
  const [contact, setContact] = useState(false);
  const handleClick=()=>{
    setAddStory((pre)=>!pre);
    setContact(false);
  }
  const handleContact=()=>{
    setContact((con)=>!con);
    setStory(false);
  }
  return (
    <div className="main_body">
      <Navbar onClickStory={handleClick} onClickContact={handleContact} />
      {story && 
      <div><AddStory /></div>}
      {contact && 
      <div><Contact /></div>}
    </div>
  );
};
export default MainDash;
