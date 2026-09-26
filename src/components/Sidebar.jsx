import {
  LayoutDashboard,
  Wheat,
  ChartLine,
  Bot,
  Target,
  Truck,
  Warehouse,
  Package,
  Wallet,
  Bell,
  X,
  Sprout
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/farmer" },
  { label: "My Crops", icon: Wheat, path: "/farmer" },
  { label: "Market Prices", icon: ChartLine, path: "/market-analysis" },
  { label: "AI Insights", icon: Bot, path: "/market-analysis" },
  { label: "Buyer Match", icon: Target, path: "/buyer-matching" },
  { label: "Logistics", icon: Truck, path: "/logistics" },
  { label: "Warehouse", icon: Warehouse, path: "/warehouse" },
  { label: "Orders", icon: Package, path: "/orders" },
  { label: "Payments", icon: Wallet, path: "/payments" }
];

function Sidebar({ role = "farmer", isOpen, closeSidebar }) {
  const navigate = useNavigate();

  const roleNames = {
    farmer: "Farmer",
    buyer: "Buyer",
    warehouse: "Warehouse"
  };

  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <button
            className="sidebar-brand"
            onClick={() => navigate("/")}
          >
            <div className="brand-icon">
              <Sprout size={22} />
            </div>

            <div>
              <strong>SMART KISAN</strong>
              <span>Agri-Tech Platform</span>
            </div>
          </button>

          <button
            className="sidebar-close"
            onClick={closeSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <div className="role-badge">
          <span className="role-dot" />
          {roleNames[role] || "User"} Dashboard
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-section-title">MAIN MENU</p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <p className="sidebar-section-title">SYSTEM</p>

          <button className="sidebar-link sidebar-button">
            <Bell size={19} />
            <span>Notifications</span>
            <span className="notification-count">5</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-demo">
            <div className="demo-icon">
              <Bot size={18} />
            </div>

            <div>
              <strong>AI Smart Assistant</strong>
              <span>Demo Mode Active</span>
            </div>
          </div>

          <button
            className="back-role-btn"
            onClick={() => navigate("/roles")}
          >
            Switch Role
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;