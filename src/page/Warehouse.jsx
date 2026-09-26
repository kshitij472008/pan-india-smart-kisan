import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Warehouse as WarehouseIcon,
  MapPin,
  CheckCircle2,
  IndianRupee,
  ArrowRight
} from "lucide-react";

import { warehouses } from "../data/mockData";

function Warehouse() {
  const navigate = useNavigate();
  const [booked, setBooked] = useState(null);

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <button
            className="back-page-button"
            onClick={() => navigate("/farmer")}
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </button>

          <div className="eyebrow">STORAGE NETWORK</div>

          <h1>Warehouse Network 🏭</h1>

          <p>
            Find nearby storage and preserve your crops for better
            selling opportunities.
          </p>
        </div>

        <div className="demo-pill">
          <span></span>
          Storage Demo
        </div>
      </div>


      {/* STORAGE SUMMARY */}

      <div className="stats-grid">

        <div className="stat-card green-stat">
          <div className="stat-icon">
            <WarehouseIcon />
          </div>
          <div>
            <span>Nearby Warehouses</span>
            <strong>48+</strong>
            <small>Available network</small>
          </div>
        </div>

        <div className="stat-card blue-stat">
          <div className="stat-icon">
            <MapPin />
          </div>
          <div>
            <span>Nearest Storage</span>
            <strong>12 km</strong>
            <small>Green Storage Hub</small>
          </div>
        </div>

        <div className="stat-card orange-stat">
          <div className="stat-icon">
            <WarehouseIcon />
          </div>
          <div>
            <span>Available Capacity</span>
            <strong>72%</strong>
            <small>Nearby capacity</small>
          </div>
        </div>

        <div className="stat-card purple-stat">
          <div className="stat-icon">
            <IndianRupee />
          </div>
          <div>
            <span>Starting Charge</span>
            <strong>₹4/q</strong>
            <small>Per day</small>
          </div>
        </div>

      </div>


      {/* WAREHOUSE LIST */}

      <section className="panel">

        <div className="panel-header">
          <div>
            <span className="panel-label">
              AVAILABLE STORAGE
            </span>

            <h2>Nearby Warehouses</h2>
          </div>

          <WarehouseIcon size={23} />
        </div>


        <div className="warehouse-large-list">

          {warehouses.map((warehouse) => {

            const isBooked = booked === warehouse.id;

            return (
              <div
                className="warehouse-large-card"
                key={warehouse.id}
              >

                <div className="warehouse-large-icon">
                  🏭
                </div>


                <div className="warehouse-large-content">

                  <div className="warehouse-title-row">

                    <div>
                      <h3>{warehouse.name}</h3>

                      <span>
                        <MapPin size={14} />
                        {warehouse.distance}
                      </span>
                    </div>

                    <strong>
                      ₹{warehouse.charge}/q/day
                    </strong>

                  </div>


                  <div className="capacity-section">

                    <div className="capacity-label">
                      <span>Available Capacity</span>
                      <strong>
                        {warehouse.available}%
                      </strong>
                    </div>

                    <div className="progress-bar">
                      <span
                        style={{
                          width: `${warehouse.available}%`
                        }}
                      ></span>
                    </div>

                  </div>


                  <div className="warehouse-actions">

                    {isBooked ? (

                      <div className="success-box">
                        <CheckCircle2 size={17} />
                        Storage booking confirmed
                      </div>

                    ) : (

                      <button
                        className="full-button"
                        onClick={() => {
                          setBooked(warehouse.id);
                          localStorage.setItem(
                            "smartKisanStorageBooked",
                            "true"
                          );
                        }}
                      >
                        Book Storage
                        <ArrowRight size={16} />
                      </button>

                    )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* STORAGE BENEFITS */}

      <section className="storage-benefits">

        <div>
          <span>WHY STORE?</span>

          <h2>
            Don't rush to sell after harvest.
          </h2>

          <p>
            Store your crop safely and compare future market
            opportunities before selling.
          </p>
        </div>


        <div className="benefit-items">

          <div>
            <span>📈</span>
            <strong>Better Price Discovery</strong>
            <small>Compare markets before selling</small>
          </div>

          <div>
            <span>🛡️</span>
            <strong>Safe Storage</strong>
            <small>Protect your harvested crop</small>
          </div>

          <div>
            <span>🎯</span>
            <strong>Flexible Selling</strong>
            <small>Sell when opportunity improves</small>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Warehouse;