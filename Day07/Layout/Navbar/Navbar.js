import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Redux/UserSlice';

function Navbar() {
     const navigate = useNavigate();
     const users = useSelector(selectUser);
     const dispatch = useDispatch();
     const handleLogout = () => {
          dispatch(logout());
          navigate("/");
     }
     return(
          <>
               <div className="navbar border">
                    <div className="navbar box">
                         <div className="navbar links">
                              <div className='link'>
                                   <p>Home</p>
                              </div>
                              <div className='link'>
                                   <p>Contact</p>
                              </div>
                              <div className='link'>
                                   <p>About Us</p>
                              </div>
                         </div>
                         <div className="navbar userinfo">
                              <div className="image"></div>
                              <div className="text"><p>{users ? users.username : "Guest"}</p></div>
                              
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Navbar;