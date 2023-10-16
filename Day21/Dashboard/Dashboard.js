import { useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import { selectUser } from '../../Redux/UserSlice';
import DashboardNavbar from '../../Layout/DashBoard Navbar/DashBoardNavbar';
import AddRecipe from '../../Layout/AddRecipe/AddRecipe';
import { useFunctions } from '../../Library/Functions/Functions';
import Accounts from '../../Layout/Accounts/Accounts';
import Info from '../../Layout/Dashboard Info/Info';

function Dashboard() {
     const users = useSelector(selectUser);
     const {dashboard, setDashboard} = useFunctions();
     return (
          <>
               <div className="dashboard border">
                    <div className="navbar"><DashboardNavbar/></div>
                    <div className="content">
                         <div className="sidebar"><Sidebar/></div>
                         <div className="element">
                              {
                                   (dashboard==="accounts") ? <Accounts/> : <Info/>
                              }
                         </div>
                    </div>
               </div>
          </>
     );
   }
   
   export default Dashboard;