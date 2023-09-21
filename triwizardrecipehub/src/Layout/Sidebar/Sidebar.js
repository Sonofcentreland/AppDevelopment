import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Redux/UserSlice';

function Sidebar() {
     const navigate = useNavigate();
     const users = useSelector(selectUser);
     const dispatch = useDispatch();
     return(
          <>
               <div className="sidebar border">
                    <div className="sidebar box">
                         <div className="sidebar userinfo">
                              <div className="image"></div>
                              <div className="text"><p>RecipeHub</p></div>
                         </div>
                         <div className="sidebar links1">
                              <div className="accounts link" onClick={()=>{navigate('/dashboard')}}>
                                   <div className="image"></div>
                                   <div className="text"><p>Dashboard</p></div>
                              </div>
                              <div className="accounts link" onClick={()=>{navigate('/accounts')}}>
                                   <div className="image"></div>
                                   <div className="text"><p>Accounts</p></div>
                              </div>
                              <div className="reports link">
                                   <div className="image"></div>
                                   <div className="text"><p>Reports</p></div>
                              </div>
                              <div className="seasonal-recipe link">
                                   <div className="image"></div>
                                   <div className="text"><p>Sesonal Recipe</p></div>
                              </div>
                         </div>
                         <div className="sidebar links2">
                              <div className="settings link">
                                   <div className="image"></div>
                                   <div className="text"><p>Settings</p></div>
                              </div>
                              <div className="name">
                                   <div className="image"></div>
                                   <div className="text"><p>{users.username}</p></div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Sidebar;