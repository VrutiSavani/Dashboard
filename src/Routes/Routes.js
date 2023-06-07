import { Routes, Route , Navigate} from "react-router-dom";

import Addincome from "../Components/Pages/Addincome.jsx";
import DashBoard from "../Components/Pages/Dashboard.jsx";
// import Addexpense from "../Pages/Addexpense";
// import Transactions from "../Pages/Transactions";
// import Addclient from "../Pages/Addclient";
// import Viewclient from "../Pages/Viewclient";
// import Createinvoice from "../Pages/Createinvoice";
// import Viewinvoice from "../Pages/Viewinvoice";
// import Settings from "../Pages/Settings";

const Router = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" element={<DashBoard />} />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Addincome" element={<Addincome />} />
        {/*
          <Route path="/Addexpense" element={<Addexpense />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Addclient" element={<Addclient />} />
        <Route path="/Viewclient" element={<Viewclient />} />
        <Route path="/Createinvoice" element={<Createinvoice />} />
        <Route path="/Viewinvoice" element={<Viewinvoice />} />
        <Route path="/Settings" element={<Settings />} /> */}
      </Routes>
    
  );
};
export default Router;
