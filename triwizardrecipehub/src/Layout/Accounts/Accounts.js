import Sidebar from '../../Layout/Sidebar/Sidebar';
import './Accounts.css';

function Accounts () {
     
     return (
          <>
               <div className="accounts border">
                    <div className="accounts navbar"></div>
                    <div className="accounts sidebar">
                         <Sidebar/>
                    </div>
                    <div className="accounts content">

                    </div>
                    <div className="accounts footer"></div>
               </div>
          </>
     );
   }
   
   export default Accounts;