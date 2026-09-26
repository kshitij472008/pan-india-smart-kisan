
import { Link } from "react-router-dom";
import {
  Sprout,
  ShoppingCart,
  Warehouse,
  ShieldCheck,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

function RoleSelection() {
  return (
    <div className="role-page">

      <div className="role-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="brand">
          <div className="brand-icon">
            <Sprout size={24} />
          </div>

          <div>
            <h2>SMART KISAN</h2>
            <span>Agri-Tech Platform</span>
          </div>
        </div>
      </div>

      <div className="role-content">

        <div className="role-heading">
          <span>WELCOME TO SMART KISAN</span>

          <h1>
            Choose Your
            <br />
            <strong>Role</strong>
          </h1>

          <p>
            Select how you want to use the Smart Kisan platform.
          </p>
        </div>

        <div className="role-grid">

          {/* FARMER */}
          <Link to="/farmer" className="role-card farmer-role">

            <div className="role-icon">
              <Sprout size={38} />
            </div>

            <div className="role-number">01</div>

            <h2>Farmer</h2>

            <p>
              Sell your crops smarter and discover better
              market opportunities.
            </p>

            <div className="role-features">
              <span>✓ Market Prices</span>
              <span>✓ Buyer Matching</span>
              <span>✓ Smart Logistics</span>
            </div>

            <div className="role-action">
              Continue as Farmer
              <ArrowRight size={18} />
            </div>

          </Link>

          {/* BUYER */}
          <Link to="/buyer" className="role-card buyer-role">

            <div className="role-icon">
              <ShoppingCart size={38} />
            </div>

            <div className="role-number">02</div>

            <h2>Buyer</h2>

            <p>
              Find quality crops directly from farmers and
              FPOs.
            </p>

            <div className="role-features">
              <span>✓ Crop Marketplace</span>
              <span>✓ Quality Filters</span>
              <span>✓ Direct Offers</span>
            </div>

            <div className="role-action">
              Continue as Buyer
              <ArrowRight size={18} />
            </div>

          </Link>

          {/* WAREHOUSE */}
          <Link
            to="/warehouse-dashboard"
            className="role-card warehouse-role"
          >

            <div className="role-icon">
              <Warehouse size={38} />
            </div>

            <div className="role-number">03</div>

            <h2>Warehouse</h2>

            <p>
              Manage storage capacity and connect with
              nearby farmers.
            </p>

            <div className="role-features">
              <span>✓ Storage Management</span>
              <span>✓ Incoming Stock</span>
              <span>✓ Farmer Bookings</span>
            </div>

            <div className="role-action">
              Continue as Warehouse
              <ArrowRight size={18} />
            </div>

          </Link>

          {/* ADMIN */}
          <Link
            to="/admin"
            className="role-card admin-role"
          >

            <div className="role-icon">
              <ShieldCheck size={38} />
            </div>

            <div className="role-number">04</div>

            <h2>Admin</h2>

            <p>
              Monitor the complete platform, users,
              transactions and system activity.
            </p>

            <div className="role-features">
              <span>✓ User Verification</span>
              <span>✓ Platform Analytics</span>
              <span>✓ Transaction Monitoring</span>
            </div>

            <div className="role-action">
              Continue as Admin
              <ArrowRight size={18} />
            </div>

          </Link>

        </div>

        <div className="demo-note">
          🚀 Prototype Demo — Select any role to explore
          the Smart Kisan workflow.
        </div>

      </div>

    </div>
  );
}

export default RoleSelection;
