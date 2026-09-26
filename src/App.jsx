import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import Landing from "./page/Landing";
import RoleSelection from "./page/RoleSelection";
import FarmerDashboard from "./page/FarmerDashboard";
import BuyerDashboard from "./page/BuyerDashboard";
import WarehouseDashboard from "./page/WarehouseDashboard";
import MarketAnalysis from "./page/MarketAnalysis";
import BuyerMatching from "./page/BuyerMatching";
import Logistics from "./page/Logistics";
import Warehouse from "./page/Warehouse";
import Orders from "./page/Orders";
import Payments from "./page/Payments";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AdminDashboard from "./page/AdminDashboard";

function DashboardLayout({ children, role }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        role={role}
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="main-area">
        <Topbar
          role={role}
          openSidebar={() => setSidebarOpen(true)}
        />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/roles"
        element={<RoleSelection />}
      />

      <Route
        path="/farmer"
        element={
          <DashboardLayout role="farmer">
            <FarmerDashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/buyer"
        element={
          <DashboardLayout role="buyer">
            <BuyerDashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/warehouse-dashboard"
        element={
          <DashboardLayout role="warehouse">
            <WarehouseDashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/admin"
        element={
          <DashboardLayout role="admin">
           <AdminDashboard />
          </DashboardLayout>
        }
     />

      <Route
        path="/market-analysis"
        element={
          <DashboardLayout role="farmer">
            <MarketAnalysis />
          </DashboardLayout>
        }
      />

      <Route
        path="/buyer-matching"
        element={
          <DashboardLayout role="farmer">
            <BuyerMatching />
          </DashboardLayout>
        }
      />

      <Route
        path="/logistics"
        element={
          <DashboardLayout role="farmer">
            <Logistics />
          </DashboardLayout>
        }
      />

      <Route
        path="/warehouse"
        element={
          <DashboardLayout role="farmer">
            <Warehouse />
          </DashboardLayout>
        }
      />

      <Route
        path="/orders"
        element={
          <DashboardLayout role="farmer">
            <Orders />
          </DashboardLayout>
        }
      />

      <Route
        path="/payments"
        element={
          <DashboardLayout role="farmer">
            <Payments />
          </DashboardLayout>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
        
  );
}

export default App;