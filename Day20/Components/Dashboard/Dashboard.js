import { useSelector } from 'react-redux';
import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import { selectUser } from '../../Redux/UserSlice';
import DashboardNavbar from '../../Layout/DashBoard Navbar/DashBoardNavbar';
import AddRecipe from '../../Layout/AddRecipe/AddRecipe';

function Dashboard() {
     const users = useSelector(selectUser);
     return (
          <>
               <div className="dashboard border">
                    {/* <div className="dashboard navbar"><DashboardNavbar/></div> */}
                    {/* <div className="dashboard sidebar"><Sidebar/></div> */}
                    <div className="DashboardContent">
                         <h3>Welcome to your DashBoard {users.username}</h3>
                         <div className='content1'>
                              <div className='box1'><AddRecipe/></div>
                              <div className='box1'>Content2</div>
                              <div className='box1'>Content3</div>
                         </div>
                    </div>
               </div>
          </>
     );
   }
   
   export default Dashboard;