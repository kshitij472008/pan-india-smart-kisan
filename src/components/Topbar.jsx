import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  UserCircle
} from "lucide-react";
import { useLocation } from "react-router-dom";

function Topbar({ role = "farmer", openSidebar }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const location = useLocation();

  const roleNames = {
    farmer: "Farmer",
    buyer: "Buyer",
    warehouse: "Warehouse"
  };

  const getPageTitle = () => {
    if (location.pathname === "/farmer") return "Farmer Dashboard";
    if (location.pathname === "/buyer") return "Buyer Dashboard";
    if (location.pathname === "/warehouse-dashboard") {
      return "Warehouse Dashboard";
    }
    if (location.pathname === "/market-analysis") return "Market Analysis";
    if (location.pathname === "/buyer-matching") return "Buyer Matching";
    if (location.pathname === "/logistics") return "Smart Logistics";
    if (location.pathname === "/warehouse") return "Warehouse";
    if (location.pathname === "/orders") return "Orders";
    if (location.pathname === "/payments") return "Payments";

    return `${roleNames[role] || "User"} Dashboard`;
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu-btn"
          onClick={openSidebar}
        >
          <Menu size={22} />
        </button>

        <div>
          <h1>{getPageTitle()}</h1>
          <p>Smart decisions for a better market connection</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="topbar-dropdown">
          <button
            className="icon-btn notification-btn"
            onClick={() =>
              setNotificationOpen(!notificationOpen)
            }
          >
            <Bell size={20} />
            <span className="notification-dot" />
          </button>

          {notificationOpen && (
            <div className="dropdown-panel notification-panel">
              <div className="dropdown-header">
                <strong>Notifications</strong>
                <span>5 new</span>
              </div>

              <div className="notification-item">
                <span>🤖</span>
                <div>
                  <strong>Better price found</strong>
                  <p>Wheat ₹3,280/q in Meerut</p>
                </div>
              </div>

              <div className="notification-item">
                <span>🎯</span>
                <div>
                  <strong>New buyer matched</strong>
                  <p>Sharma Foods wants your wheat</p>
                </div>
              </div>

              <div className="notification-item">
                <span>🚚</span>
                <div>
                  <strong>Transport available</strong>
                  <p>Mini truck available nearby</p>
                </div>
              </div>

              <div className="notification-footer">
                View all notifications
              </div>
            </div>
          )}
        </div>

        <div className="topbar-dropdown">
          <button
            className="profile-button"
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
          >
            <div className="profile-avatar">
              <UserCircle size={24} />
            </div>

            <div className="profile-info">
              <strong>
                {roleNames[role] || "User"}
              </strong>
              <span>
                Smart Kisan User
              </span>
            </div>

            <ChevronDown size={16} />
          </button>

          {profileOpen && (
            <div className="dropdown-panel profile-panel">
              <div className="profile-menu-item">
                👤 Profile
              </div>

              <div className="profile-menu-item">
                ⚙️ Settings
              </div>

              <div className="profile-menu-item">
                ❓ Help & Support
              </div>

              <div className="profile-menu-item logout-item">
                ↪ Switch Account
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;