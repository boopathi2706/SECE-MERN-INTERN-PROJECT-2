import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup';
import './App.css';
import MainDash from './Components/MainDash';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import StoryBoard from './Components/StoryBoard';
import Logout from './Components/Logout';
function App() {
  return (
    <div className='app_body'>
     <BrowserRouter>
           <Routes>
               <Route path='/' element={<LoginPage/>}></Route>
               <Route path='/signup' element={<Signup/>}></Route>
               <Route path='/main' element={<MainDash/>}></Route>
               <Route path='/nav' element={<Navbar/>}></Route>
              < Route path='/contact' element={<Contact/>}></Route>
              < Route path='/storyBoard' element={<StoryBoard/>}></Route>
              < Route path='/logout' element={<Logout/>}></Route>
           </Routes>
     </BrowserRouter>
   
       {/* <LoginPage />
       {/* <Signup /> */}
       {/* <MainDash /> */} 
    </div>
  )
}

export default App
