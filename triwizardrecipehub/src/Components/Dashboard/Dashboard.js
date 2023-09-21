import Navbar from '../../Layout/Navbar/Navbar';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Dashboard.css';

function Dashboard() {
     return (
          <>
               <div className="DashboardBorder">
                    <div className="DashboardNavBar"><Navbar/></div>
                    <div className="DashboardSideBar">
                         <Sidebar/>
                    </div>
                    <div className="DashboardContent">

                    </div>
                    <div className="DashboardFooter"></div>
               </div>
          </>
     );
   }
   
   export default Dashboard;