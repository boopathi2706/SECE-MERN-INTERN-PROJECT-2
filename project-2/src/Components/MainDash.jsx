import { useState } from "react";
import "../css/MainDash.css";
import AddStory from "./AddStory";
import Navbar from "./Navbar";
import Contact from "./Contact";
import StoryBoard from "./StoryBoard";
import Logout from "./Logout";
const MainDash = () => {
  const [story, setAddStory] = useState(false);
  const [contact, setContact] = useState(false);
  const [main, setMain] = useState(true);
  const [log, setLog] = useState(true);
  const handleClick=()=>{
    setAddStory(true);
    setLog(false);
    setContact(false);
    setMain(false);
  }
  const handleContact=()=>{
    setContact(true);
    setAddStory(false);
    setMain(false);
    setLog(false);
  }
  const handleMain=()=>{
       setMain(true);
        setLog(false);
       setContact(false);
       setAddStory(false);
  }
  const handleLog=()=>{
    setLog(true);
     setMain(false);
    setContact(false);
    setAddStory(false);
}

  return (
    <div className="main_body">
      <Navbar onClickStory={handleClick} onClickContact={handleContact} onClickMain={handleMain} onClickLogout={handleLog} />
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
