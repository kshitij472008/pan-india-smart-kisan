import {
  Users,
  Wheat,
  IndianRupee,
  Truck,
  Warehouse,
  ShoppingCart,
  AlertTriangle,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Farmers",
      value: "12,480",
      change: "+8.4%",
      icon: Users
    },
    {
      title: "Active Crop Listings",
      value: "3,842",
      change: "+12.6%",
      icon: Wheat
    },
    {
      title: "Total Transactions",
      value: "₹28.6 L",
      change: "+15.2%",
      icon: IndianRupee
    },
    {
      title: "Active Orders",
      value: "684",
      change: "+6.8%",
      icon: ShoppingCart
    }
  ];

  const activities = [
    {
      title: "New farmer registration",
      text: "45 farmers joined the platform",
      time: "10 min ago",
      icon: Users
    },
    {
      title: "New crop listings",
      text: "128 new crop lots added",
      time: "25 min ago",
      icon: Wheat
    },
    {
      title: "Transport assigned",
      text: "32 vehicles assigned today",
      time: "42 min ago",
      icon: Truck
    },
    {
      title: "Warehouse capacity",
      text: "Green Storage Hub reached 72%",
      time: "1 hour ago",
      icon: Warehouse
    }
  ];

  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">
        <div>
          <h2>Good Morning, Admin 👋</h2>
          <p>
            Monitor and manage the complete Smart Kisan ecosystem.
          </p>
        </div>

        <div className="dashboard-actions">
          <button className="btn btn-outline">
            Export Report
          </button>

          <button className="btn btn-primary">
            Manage Users
          </button>
        </div>
      </div>

      {/* Stats */}

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.title}>
              <div className="stat-top">
                <div className="stat-icon">
                  <Icon size={19} />
                </div>

                <span className="stat-change">
                  {stat.change}
                </span>
              </div>

              <span className="stat-label">
                {stat.title}
              </span>

              <div className="stat-value">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}

      <div className="dashboard-grid">

        {/* Platform Overview */}

        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Platform Overview</h3>
              <p>Current Smart Kisan ecosystem activity</p>
            </div>

            <TrendingUp
              size={18}
              className="text-green"
            />
          </div>

          <div className="progress-row">
            <div className="progress-header">
              <span>Farmers</span>
              <strong>78%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "78%" }}
              />
            </div>
          </div>

          <div className="progress-row">
            <div className="progress-header">
              <span>Verified Buyers</span>
              <strong>64%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "64%" }}
              />
            </div>
          </div>

          <div className="progress-row">
            <div className="progress-header">
              <span>Warehouse Utilization</span>
              <strong>72%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "72%" }}
              />
            </div>
          </div>

          <div className="progress-row">
            <div className="progress-header">
              <span>Successful Payments</span>
              <strong>91%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "91%" }}
              />
            </div>
          </div>
        </div>

        {/* Alerts */}

        <div className="panel">
          <div className="panel-header">
            <div>
              <h3>Admin Alerts</h3>
              <p>Items requiring attention</p>
            </div>

            <AlertTriangle
              size={18}
              className="text-warning"
            />
          </div>

          <div className="notification-item">
            <span>⚠️</span>

            <div>
              <strong>Buyer verification</strong>
              <p>18 buyers waiting for verification</p>
            </div>
          </div>

          <div className="notification-item">
            <span>🚚</span>

            <div>
              <strong>Logistics issue</strong>
              <p>7 transport requests are delayed</p>
            </div>
          </div>

          <div className="notification-item">
            <span>💰</span>

            <div>
              <strong>Payment review</strong>
              <p>4 transactions require review</p>
            </div>
          </div>

          <div className="notification-item">
            <span>🏭</span>

            <div>
              <strong>Warehouse capacity</strong>
              <p>3 warehouses above 85% capacity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}

      <div className="panel">
        <div className="panel-header">
          <div>
            <h3>Recent Platform Activity</h3>
            <p>Latest activity across Smart Kisan</p>
          </div>

          <button className="panel-link">
            View All
          </button>
        </div>

        <div className="vehicle-list">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                className="vehicle-card"
                key={activity.title}
              >
                <div className="vehicle-icon">
                  <Icon size={18} />
                </div>

                <div className="vehicle-info">
                  <strong>{activity.title}</strong>
                  <span>{activity.text}</span>
                </div>

                <span className="vehicle-cost">
                  {activity.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* System Status */}

      <div className="dashboard-grid-three">

        <div className="panel">
          <div className="panel-header">
            <h3>User Verification</h3>
          </div>

          <div className="flex items-center gap-12">
            <CheckCircle2
              size={32}
              className="text-green"
            />

            <div>
              <strong>94.2%</strong>
              <p className="text-muted">
                users verified
              </p>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Logistics Network</h3>
          </div>

          <div className="flex items-center gap-12">
            <Truck
              size={32}
              className="text-green"
            />

            <div>
              <strong>248</strong>
              <p className="text-muted">
                active vehicles
              </p>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Warehouse Network</h3>
          </div>

          <div className="flex items-center gap-12">
            <Warehouse
              size={32}
              className="text-green"
            />

            <div>
              <strong>48</strong>
              <p className="text-muted">
                connected warehouses
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="demo-note">
        Prototype Demo • Data shown is for demonstration purposes.
      </div>

    </div>
  );
}

export default AdminDashboard;