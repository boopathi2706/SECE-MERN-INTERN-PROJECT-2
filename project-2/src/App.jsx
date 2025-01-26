import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup';
import './App.css';
import MainDash from './Components/MainDash';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddStory from './Components/AddStory';
import Contact from './Components/Contact';
import StoryBoard from './Components/StoryBoard';
function App() {
  return (
    <div className='app_body'>
     <BrowserRouter>
           <Routes>
               <Route path='/' element={<LoginPage/>}></Route>
               <Route path='/signup' element={<Signup/>}></Route>
               <Route path='/main' element={<MainDash/>}></Route>
               <Route path='/nav' element={<Navbar/>}></Route>
               <Route path='/add-story' element={<AddStory/>}></Route>
              < Route path='/contact' element={<Contact/>}></Route>
              < Route path='/storyBoard' element={<StoryBoard/>}></Route>
           </Routes>
     </BrowserRouter>
   
       {/* <LoginPage />
       {/* <Signup /> */}
       {/* <MainDash /> */} 
    </div>
  )
}

export default App
