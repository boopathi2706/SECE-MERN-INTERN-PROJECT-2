import '../css/Logout.css';
import { Link } from 'react-router-dom';

const Logout=()=>{
   return(
         <div className="logout_body">
            <div className="logout_container" >
                <Link className='link_log' to='/'>
                <h3>Logout</h3>
                <span class="material-symbols-outlined">logout</span>
                </Link>
                
            </div>
         </div>
   );
};
export default Logout;