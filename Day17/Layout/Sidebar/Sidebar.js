import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../Redux/UserSlice';
import { AccountIcon, DashboardIcon, GearIcon, LogoutIcon, RecipeIcon, ReportIcon } from '../../Images/svg/Svg';
import { useFunctions } from '../../Library/Functions/Functions';
import { useState } from 'react';
import { ButtonBox, LinkBox } from '../../Images/elements/Elements';

function Sidebar() {
     const [open,setOpen] = useState();
     const [color,setColor] = useState();
     const { toggle } = useFunctions();
     const navigate = useNavigate();
     const users = useSelector(selectUser);
     const dispatch = useDispatch();
     const handleLogout = () => {
          dispatch(logout());
          navigate("/");
     }
     const handleSize = () => {
          setOpen(toggle(open));
     }
     const handleColor = () => {
          setColor(toggle(color));
     }
     return(
          <>
               <div className={`sidebar border ${open ? 'close' : 'open'}`}>
                    <div className="sidebar header">
                         <ButtonBox 
                              onClick={handleSize} 
                              name="dashboard button" 
                              text="+"
                         />
                    </div>
                    <div className="sidebar box">
                         <div className={`sidebar links1 ${color ? 'blue' : 'red'}`}>
                              <LinkBox 
                                   onClick={()=>{navigate('/dashboard')}} 
                                   name="dashboard link" 
                                   icon={<DashboardIcon/>} 
                                   text="Dashboard"
                              />
                              <LinkBox 
                                   onClick={()=>{navigate('/accounts')}} 
                                   name="accounts link" 
                                   icon={<AccountIcon/>} 
                                   text="Accounts"
                              />
                              <LinkBox 
                                   onClick={()=>{navigate('/accounts')}} 
                                   name="reports link" 
                                   icon={<ReportIcon/>} 
                                   text="Reports"
                              />
                              <LinkBox 
                                   onClick={()=>{navigate('/accounts')}} 
                                   name="recipe link" 
                                   icon={<RecipeIcon/>} 
                                   text="Seasonal Recipe"
                              />
                         </div>
                         <div className="sidebar links2">
                              <div className="settings link">
                                   <GearIcon className="icon"/>
                                   <div className="text"><p>Settings</p></div>
                              </div>
                              {users.username &&
                                   <>
                                        <div className="settings link" onClick={handleLogout}>
                                             <LogoutIcon className="icon"/>
                                             <div className="text"><p>Logout</p></div>
                                        </div>
                                   </>
                              }
                              <div className="name">
                                   <div className="image"></div>
                                   <div className="text"><p>{users.get('username')}</p></div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Sidebar;