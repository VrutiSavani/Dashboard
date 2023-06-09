import { Routes, Route , Navigate} from "react-router-dom";

import Addincome from "../Components/Pages/Addincome.jsx";
import DashBoard from "../Components/Pages/Dashboard.jsx";
import Addexpense from "../Components/Pages/Addexpense";
import Transactions from "../Components/Pages/Transactions";
import Addclient from "../Components/Pages/Addclient";
import Viewclient from "../Components/Pages/Viewclient";
import Addinvoice from "../Components/Pages/Addinvoice.jsx";
import Viewinvoice from "../Components/Pages/Viewinvoice";
// import Settings from "../Pages/Settings";

const Router = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" element={<DashBoard />} />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Addincome" element={<Addincome />} />
        
          <Route path="/Addexpense" element={<Addexpense />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Addclient" element={<Addclient />} />
        <Route path="/Viewclient" element={<Viewclient />} />
        <Route path="/Addinvoice" element={<Addinvoice />} />
        <Route path="/Viewinvoice" element={<Viewinvoice />} />
        {/* <Route path="/Settings" element={<Settings />} />  */}
      </Routes>
    
  );
};
export default Router;
