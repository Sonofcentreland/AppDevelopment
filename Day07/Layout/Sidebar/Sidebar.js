import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Redux/UserSlice';
import { AccountIcon, DashboardIcon, GearIcon, LogoutIcon, RecipeIcon, ReportIcon } from '../../Images/svg/Svg';

function Sidebar() {
     const navigate = useNavigate();
     const users = useSelector(selectUser);
     const dispatch = useDispatch();
     const handleLogout = () => {
          dispatch(logout());
          navigate("/");
     }
     return(
          <>
               <div className="sidebar border">
                    <div className="sidebar header">
                         <div className="image"></div>
                         <div className="text"><p>RecipeHub</p></div>
                    </div>
                    <div className="sidebar box">
                         <div className="sidebar links1">
                              <div className="accounts link" onClick={()=>{navigate('/dashboard')}}>
                                   <DashboardIcon className="image"/>
                                   <div className="text"><p>Dashboard</p></div>
                              </div>
                              <div className="accounts link" onClick={()=>{navigate('/accounts')}}>
                                   <AccountIcon className="image"/>
                                   <div className="text"><p>Accounts</p></div>
                              </div>
                              <div className="reports link">
                                   <ReportIcon className="image"/>
                                   <div className="text"><p>Reports</p></div>
                              </div>
                              <div className="seasonal-recipe link">
                                   <RecipeIcon className="image"/>
                                   <div className="text"><p>Sesonal Recipe</p></div>
                              </div>
                         </div>
                         <div className="sidebar links2">
                              <div className="settings link">
                                   <GearIcon className="image"/>
                                   <div className="text"><p>Settings</p></div>
                              </div>
                              {users.username &&
                                   <>
                                        <div className="settings link" onClick={handleLogout}>
                                             <LogoutIcon className="image"/>
                                             <div className="text"><p>Logout</p></div>
                                        </div>
                                   </>
                              }
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