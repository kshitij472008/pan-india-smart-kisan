import { useState } from "react";
import {
  Warehouse,
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  Clock,
  Users,
  CheckCircle2,
  CalendarDays
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

function WarehouseDashboard() {

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const storageData = [
    {
      name: "Occupied",
      value: 7200
    },
    {
      name: "Available",
      value: 2800
    }
  ];

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>

          <div className="eyebrow">
            WAREHOUSE MANAGEMENT
          </div>

          <h1>
            Storage Dashboard 🏭
          </h1>

          <p>
            Manage storage capacity, incoming stock and farmer bookings.
          </p>

        </div>

        <div className="demo-pill">
          <span></span>
          Prototype Demo
        </div>

      </div>


      {/* STATS */}

      <div className="stats-grid">

        <div className="stat-card green-stat">

          <div className="stat-icon">
            <Warehouse />
          </div>

          <div>
            <span>Total Capacity</span>
            <strong>10,000 MT</strong>
            <small>Storage capacity</small>
          </div>

        </div>


        <div className="stat-card blue-stat">

          <div className="stat-icon">
            <Package />
          </div>

          <div>
            <span>Occupied</span>
            <strong>7,200 MT</strong>
            <small>72% utilization</small>
          </div>

        </div>


        <div className="stat-card orange-stat">

          <div className="stat-icon">
            <ArrowDownToLine />
          </div>

          <div>
            <span>Available</span>
            <strong>2,800 MT</strong>
            <small>28% free capacity</small>
          </div>

        </div>


        <div className="stat-card purple-stat">

          <div className="stat-icon">
            <ArrowUpFromLine />
          </div>

          <div>
            <span>Incoming</span>
            <strong>450 MT</strong>
            <small>Expected today</small>
          </div>

        </div>

      </div>


      {/* STORAGE OVERVIEW */}

      <div className="dashboard-grid">

        <section className="panel storage-chart-panel">

          <div className="panel-header">

            <div>

              <span className="panel-label">
                CAPACITY
              </span>

              <h2>
                Storage Utilization
              </h2>

            </div>

            <Warehouse size={22} />

          </div>


          <div className="donut-container">

            <ResponsiveContainer width="100%" height={260}>

              <PieChart>

                <Pie
                  data={storageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={105}
                  paddingAngle={4}
                  dataKey="value"
                >

                  <Cell />
                  <Cell />

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

            <div className="donut-center">

              <strong>72%</strong>

              <span>Occupied</span>

            </div>

          </div>


          <div className="storage-legend">

            <div>
              <span className="legend-dot occupied"></span>
              Occupied
              <strong>7,200 MT</strong>
            </div>

            <div>
              <span className="legend-dot available"></span>
              Available
              <strong>2,800 MT</strong>
            </div>

          </div>

        </section>


        {/* QUICK BOOKING */}

        <section className="panel">

          <div className="panel-header">

            <div>

              <span className="panel-label">
                REQUESTS
              </span>

              <h2>
                Storage Requests
              </h2>

            </div>

            <Clock size={22} />

          </div>


          <div className="request-card">

            <div className="request-icon">
              🌾
            </div>

            <div>

              <h3>
                Wheat Storage
              </h3>

              <p>
                Farmer: Rajesh Kumar
              </p>

              <span>
                1,200 kg • Grade A
              </span>

            </div>

            <div className="request-status">
              New
            </div>

          </div>


          <div className="request-card">

            <div className="request-icon">
              🧅
            </div>

            <div>

              <h3>
                Onion Storage
              </h3>

              <p>
                Farmer: Amit Singh
              </p>

              <span>
                850 kg • Grade A
              </span>

            </div>

            <div className="request-status">
              New
            </div>

          </div>


          {bookingConfirmed ? (

            <div className="success-box">
              <CheckCircle2 size={18} />
              Storage request approved.
            </div>

          ) : (

            <button
              className="full-button"
              onClick={() => setBookingConfirmed(true)}
            >
              Approve Request
            </button>

          )}

        </section>

      </div>


      {/* STOCK TABLE */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              INVENTORY
            </span>

            <h2>
              Stock Movement
            </h2>

          </div>

          <button className="outline-button">
            <CalendarDays size={16} />
            Today
          </button>

        </div>


        <div className="stock-table">

          <div className="table-header">
            <span>Crop</span>
            <span>Type</span>
            <span>Quantity</span>
            <span>Farmer/Buyer</span>
            <span>Status</span>
          </div>


          <div className="table-row">

            <span>
              🌾 Wheat
            </span>

            <span className="stock-in">
              Incoming
            </span>

            <strong>
              450 MT
            </strong>

            <span>
              Rajesh Kumar
            </span>

            <span className="status-badge pending">
              Processing
            </span>

          </div>


          <div className="table-row">

            <span>
              🧅 Onion
            </span>

            <span className="stock-out">
              Outgoing
            </span>

            <strong>
              180 MT
            </strong>

            <span>
              Sharma Foods
            </span>

            <span className="status-badge completed">
              Completed
            </span>

          </div>


          <div className="table-row">

            <span>
              🥔 Potato
            </span>

            <span className="stock-in">
              Incoming
            </span>

            <strong>
              320 MT
            </strong>

            <span>
              FreshMart
            </span>

            <span className="status-badge pending">
              Scheduled
            </span>

          </div>

        </div>

      </section>


      {/* QUICK MODULES */}

      <div className="quick-actions">

        <button>
          <ArrowDownToLine size={20} />
          Incoming Stock
        </button>

        <button>
          <ArrowUpFromLine size={20} />
          Outgoing Stock
        </button>

        <button>
          <Clock size={20} />
          Storage Requests
        </button>

        <button>
          <Users size={20} />
          Farmer Bookings
        </button>

      </div>

    </div>
  );
}

export default WarehouseDashboard;