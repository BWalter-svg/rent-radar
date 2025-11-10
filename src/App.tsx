import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Pages
import Landing from "./Pages/Landing";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

// Landlord Pages
import LandlordDashboard from "./Pages/Landlord/Dashboard";
import LandlordMessages from "./Pages/Landlord/Messages";
import LandlordProperties from "./Pages/Landlord/Properties";
import LandlordRentTracking from "./Pages/Landlord/RentTracking";
import LandlordMaintenance from "./Pages/Landlord/Maintenance";
import Alerts from "./Pages/Alerts";
import Settings from "./Pages/Settings";

// Tenant Pages
import TenantDashboard from "./Pages/Tenant/Dashboard";
import TenantMessages from "./Pages/Tenant/Messages";
import TenantRentHistory from "./Pages/Tenant/RentHistory";
import TenantMaintenance from "./Pages/Tenant/Maintenance";
import TenantCurrentProperty from "./Pages/Tenant/Current-property";

// Components
import TopBar from "./Components/TopBar";
import FloatingNav from "./Components/Navbar";

const App: React.FC = () => {
  const location = useLocation();

  // Hide TopBar and FloatingNav on landing, login, and signup
  const hideUI = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideUI && <TopBar />}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Landlord */}
        <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
        <Route path="/landlord/messages" element={<LandlordMessages />} />
        <Route path="/landlord/properties" element={<LandlordProperties />} />
        <Route path="/landlord/rent-tracking" element={<LandlordRentTracking />} />
        <Route path="/landlord/maintenance" element={<LandlordMaintenance />} />
        <Route path="/notifications" element={<Alerts />} />
        <Route path="/settings" element={<Settings />} />

        {/* Tenant */}
        <Route path="/tenant/dashboard" element={<TenantDashboard />} />
        <Route path="/tenant/messages" element={<TenantMessages />} />
        <Route path="/tenant/rent-history" element={<TenantRentHistory />} />
        <Route path="/tenant/maintenance" element={<TenantMaintenance />} />
        <Route path="/tenant/current-property" element={<TenantCurrentProperty />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideUI && <FloatingNav />}
    </>
  );
};

export default App;
