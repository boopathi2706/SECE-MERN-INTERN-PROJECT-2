import { useState } from "react";
import "../css/MainDash.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import StoryBoard from "./StoryBoard";
import Logout from "./Logout";
const MainDash = () => {
  const [contact, setContact] = useState(false);
  const [main, setMain] = useState(true);
  const [log, setLog] = useState(false);
  const handleContact=()=>{
    setContact(true);
    setMain(false);
    setLog(false);
  }
  const handleMain=()=>{
       setMain(true);
        setLog(false);
       setContact(false);
  }
  const handleLog=()=>{
    setLog(true);
     setMain(false);
    setContact(false);
}

  return (
    <div className="main_body">
      <Navbar onClickContact={handleContact} onClickMain={handleMain} onClickLogout={handleLog} />
      {contact && 
      <div><Contact /></div>}
      {main && 
      <div><StoryBoard /></div>}
      {log && <div><Logout/></div> }
    </div>
  );
};
export default MainDash;
