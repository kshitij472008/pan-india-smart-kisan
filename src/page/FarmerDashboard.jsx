import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Package,
  IndianRupee,
  Warehouse,
  Truck,
  Target,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  X
} from "lucide-react";

import {
  crops,
  buyers,
  warehouses,
  priceData,
  vehicles
} from "../data/mockData";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function FarmerDashboard() {

  const navigate = useNavigate();

  const [modal, setModal] = useState(null);

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [storageBooked, setStorageBooked] = useState(false);

  const [vehicleBooked, setVehicleBooked] = useState(false);

  const wheat = crops[0];

  const additionalValue =
    (wheat.bestPrice - wheat.currentPrice) * 120;

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>
          <div className="eyebrow">
            FARMER DASHBOARD
          </div>

          <h1>
            Good Morning, Kisan 👨‍🌾
          </h1>

          <p>
            Here's what's happening with your crops today.
          </p>
        </div>

        <div className="demo-pill">
          <span></span>
          Prototype Demo
        </div>

      </div>


      {/* STAT CARDS */}

      <div className="stats-grid">

        <div className="stat-card green-stat">

          <div className="stat-icon">
            <Package />
          </div>

          <div>
            <span>Available Crop Value</span>
            <strong>₹1,24,500</strong>
            <small>Across 3 crops</small>
          </div>

        </div>


        <div className="stat-card blue-stat">

          <div className="stat-icon">
            <TrendingUp />
          </div>

          <div>
            <span>Best Market Price</span>
            <strong>₹3,250/q</strong>
            <small>Meerut market</small>
          </div>

        </div>


        <div className="stat-card orange-stat">

          <div className="stat-icon">
            <IndianRupee />
          </div>

          <div>
            <span>Potential Extra Value</span>
            <strong>+₹18,500</strong>
            <small>Based on demo prices</small>
          </div>

        </div>


        <div className="stat-card purple-stat">

          <div className="stat-icon">
            <Warehouse />
          </div>

          <div>
            <span>Storage Available</span>
            <strong>72%</strong>
            <small>Nearby capacity</small>
          </div>

        </div>

      </div>


      {/* MAIN GRID */}

      <div className="dashboard-grid">

        {/* MY CROPS */}

        <section className="panel crops-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                INVENTORY
              </span>

              <h2>My Crops</h2>
            </div>

            <button
              className="text-button"
              onClick={() => navigate("/market-analysis")}
            >
              View Markets
              <ArrowRight size={16} />
            </button>

          </div>


          <div className="crop-list">

            {crops.map((crop) => (

              <div className="crop-row-card" key={crop.id}>

                <div className="crop-main">

                  <div className={`crop-image ${crop.color || ""}`}>
                    🌾
                  </div>

                  <div>

                    <h3>{crop.name}</h3>

                    <div className="crop-meta">
                      <span>{crop.quantity}</span>
                      <span>{crop.quality}</span>
                    </div>

                  </div>

                </div>


                <div className="crop-price">

                  <small>Current</small>

                  <strong>
                    ₹{crop.currentPrice.toLocaleString()}/q
                  </strong>

                </div>


                <div className="crop-market">

                  <small>Best Market</small>

                  <strong>{crop.market}</strong>

                  <span>
                    ₹{crop.bestPrice.toLocaleString()}/q
                  </span>

                </div>


                <button
                  className="small-primary-btn"
                  onClick={() => navigate("/buyer-matching")}
                >
                  Find Buyer
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* AI PRICE INTELLIGENCE */}

        <section className="panel ai-panel">

          <div className="panel-header">

            <div>

              <span className="panel-label">
                SMART INSIGHT
              </span>

              <h2>
                AI Price Intelligence
              </h2>

            </div>

            <div className="ai-icon">
              <Sparkles size={20} />
            </div>

          </div>


          <div className="ai-message">

            <div className="ai-avatar">
              🤖
            </div>

            <div>

              <strong>
                Your wheat can potentially get a better price
                in Meerut.
              </strong>

              <p>
                Demo calculation based on available market
                data.
              </p>

            </div>

          </div>


          <div className="price-comparison">

            <div>
              <small>Current</small>
              <strong>
                ₹3,150/q
              </strong>
            </div>

            <div className="price-arrow">
              →
            </div>

            <div>
              <small>Best Price</small>
              <strong className="green-text">
                ₹3,280/q
              </strong>
            </div>

            <div className="difference">
              +₹130/q
            </div>

          </div>


          <div className="potential-box">

            <span>Potential additional value</span>

            <strong>
              +₹{additionalValue.toLocaleString()}
            </strong>

          </div>


          <div className="mini-chart">

            <ResponsiveContainer width="100%" height={150}>

              <LineChart data={priceData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  hide
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="wheat"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={1000}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>


          <div className="chart-label">
            7-day demo market trend
          </div>


          <button
            className="full-button"
            onClick={() => navigate("/market-analysis")}
          >
            View Market Analysis
            <ArrowRight size={17} />
          </button>

        </section>

      </div>


      {/* SELL OR STORE */}

      <section className="panel sell-store-panel">

        <div className="panel-header">

          <div>
            <span className="panel-label">
              DECISION SUPPORT
            </span>

            <h2>Sell or Store?</h2>
          </div>

          <div className="ai-badge">
            ✨ AI-assisted comparison
          </div>

        </div>


        <div className="decision-grid">

          <div className="decision-inputs">

            <div className="decision-row">
              <span>Current Price</span>
              <strong>₹3,150/q</strong>
            </div>

            <div className="decision-row">
              <span>Expected Price</span>
              <strong>₹3,350/q</strong>
            </div>

            <div className="decision-row">
              <span>Storage Cost</span>
              <strong>₹40/q</strong>
            </div>

            <div className="decision-row">
              <span>Transport Cost</span>
              <strong>₹30/q</strong>
            </div>

          </div>


          <div className="decision-option sell-option">

            <span>SELL NOW</span>

            <strong>₹37,800</strong>

            <small>
              Estimated realization
            </small>

            <button
              onClick={() => setModal("sell")}
            >
              Select Option
            </button>

          </div>


          <div className="decision-option store-option">

            <span>STORE & SELL</span>

            <strong>₹39,360</strong>

            <small>
              Estimated realization
            </small>

            <button
              onClick={() => setModal("store")}
            >
              View Calculation
            </button>

          </div>

        </div>

      </section>


      {/* BUYER MATCHING */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              MARKETPLACE
            </span>

            <h2>Buyer Matching</h2>

          </div>

          <button
            className="text-button"
            onClick={() => navigate("/buyer-matching")}
          >
            View All
            <ArrowRight size={16} />
          </button>

        </div>


        <div className="buyer-grid">

          {buyers.slice(0, 2).map((buyer) => (

            <div className="buyer-mini-card" key={buyer.id}>

              <div className="buyer-top">

                <div className="buyer-avatar">
                  {buyer.name.charAt(0)}
                </div>

                <div>
                  <h3>{buyer.name}</h3>
                  <span>
                    {buyer.crop} • {buyer.distance}
                  </span>
                </div>

                <div className="match-score">
                  {buyer.match}%
                  <small>match</small>
                </div>

              </div>


              <div className="buyer-info">

                <div>
                  <small>Required</small>
                  <strong>{buyer.required}</strong>
                </div>

                <div>
                  <small>Offer</small>
                  <strong>
                    ₹{buyer.offer.toLocaleString()}/q
                  </strong>
                </div>

              </div>


              <div className="buyer-actions">

                <button
                  className="outline-button"
                  onClick={() => navigate("/buyer-matching")}
                >
                  View Offer
                </button>

                <button
                  className="small-primary-btn"
                  onClick={() => navigate("/buyer-matching")}
                >
                  Contact
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* LOGISTICS + WAREHOUSE */}

      <div className="dashboard-grid two-columns">

        {/* LOGISTICS */}

        <section className="panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                TRANSPORT
              </span>

              <h2>Smart Logistics</h2>
            </div>

            <Truck size={22} />

          </div>


          <div className="vehicle-card">

            <div className="vehicle-icon">
              🚚
            </div>

            <div className="vehicle-info">

              <h3>Mini Truck</h3>

              <p>
                Capacity: 1,500 kg
              </p>

              <span>
                <MapPin size={14} />
                48 km
              </span>

            </div>

            <div className="vehicle-price">

              <strong>
                ₹2,400
              </strong>

              <small>
                estimated
              </small>

            </div>

          </div>


          {vehicleBooked ? (

            <div className="success-box">
              <CheckCircle2 size={18} />
              Vehicle booking confirmed.
            </div>

          ) : (

            <button
              className="full-button"
              onClick={() => {
                setSelectedVehicle(vehicles[0]);
                setModal("vehicle");
              }}
            >
              Book Vehicle
              <ArrowRight size={17} />
            </button>

          )}


          <div className="pooling-box">

            <div className="pooling-header">

              <strong>Load Pooling</strong>

              <span>100% utilization</span>

            </div>

            <p>
              Farmer A 500kg + Farmer B 400kg +
              Farmer C 600kg
            </p>

            <div className="progress-bar">
              <span style={{ width: "100%" }}></span>
            </div>

            <button
              className="outline-button"
              onClick={() => setModal("pool")}
            >
              Join Load Pool
            </button>

          </div>

        </section>


        {/* WAREHOUSES */}

        <section className="panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                STORAGE
              </span>

              <h2>Nearby Warehouses</h2>
            </div>

            <Warehouse size={22} />

          </div>


          <div className="warehouse-list">

            {warehouses.slice(0, 2).map((warehouse) => (

              <div
                className="warehouse-mini"
                key={warehouse.id}
              >

                <div className="warehouse-icon">
                  🏭
                </div>

                <div className="warehouse-details">

                  <h3>
                    {warehouse.name}
                  </h3>

                  <span>
                    {warehouse.distance} away
                  </span>

                  <div className="warehouse-capacity">

                    <div className="progress-bar">
                      <span
                        style={{
                          width: `${warehouse.available}%`
                        }}
                      ></span>
                    </div>

                    <small>
                      {warehouse.available}% available
                    </small>

                  </div>

                </div>

                <strong>
                  ₹{warehouse.charge}/q/day
                </strong>

              </div>

            ))}

          </div>


          {storageBooked ? (

            <div className="success-box">
              <CheckCircle2 size={18} />
              Storage booking confirmed.
            </div>

          ) : (

            <button
              className="full-button"
              onClick={() => setModal("storage")}
            >
              Book Storage
              <ArrowRight size={17} />
            </button>

          )}

        </section>

      </div>


      {/* ECOSYSTEM */}

      <section className="ecosystem-panel">

        <div className="ecosystem-heading">

          <span className="panel-label">
            SMART KISAN ECOSYSTEM
          </span>

          <h2>
            From Farm to Payment
          </h2>

        </div>


        <div className="ecosystem-flow">

          <div className="eco-step">
            <span>👨‍🌾</span>
            <strong>Farmer</strong>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-step">
            <span>🤖</span>
            <strong>AI Price Intelligence</strong>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-step">
            <span>🎯</span>
            <strong>Buyer Matching</strong>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-step">
            <span>🚚</span>
            <strong>Logistics</strong>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-step">
            <span>🏭</span>
            <strong>Warehouse / Buyer</strong>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-step">
            <span>💰</span>
            <strong>Payment</strong>
          </div>

        </div>

      </section>


      {/* MODAL */}

      {modal && (

        <div
          className="modal-overlay"
          onClick={() => setModal(null)}
        >

          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setModal(null)}
            >
              <X size={20} />
            </button>


            {modal === "vehicle" && (

              <>
                <div className="modal-icon">
                  🚚
                </div>

                <h2>Book Vehicle</h2>

                <p>
                  Confirm booking for the selected transport.
                </p>

                <div className="modal-summary">

                  <strong>
                    {selectedVehicle?.type}
                  </strong>

                  <span>
                    Capacity: {selectedVehicle?.capacity}
                  </span>

                  <span>
                    Distance: {selectedVehicle?.distance}
                  </span>

                  <strong>
                    ₹{selectedVehicle?.cost}
                  </strong>

                </div>

                <button
                  className="full-button"
                  onClick={() => {
                    setVehicleBooked(true);
                    setModal(null);
                  }}
                >
                  Confirm Booking
                </button>
              </>

            )}


            {modal === "storage" && (

              <>
                <div className="modal-icon">
                  🏭
                </div>

                <h2>Book Storage</h2>

                <p>
                  Select nearby storage for your crop.
                </p>

                <div className="modal-summary">

                  <strong>
                    Green Storage Hub
                  </strong>

                  <span>
                    Distance: 12 km
                  </span>

                  <span>
                    Availability: 72%
                  </span>

                  <strong>
                    ₹4/q/day
                  </strong>

                </div>

                <button
                  className="full-button"
                  onClick={() => {
                    setStorageBooked(true);
                    setModal(null);
                  }}
                >
                  Confirm Storage
                </button>
              </>

            )}


            {modal === "pool" && (

              <>
                <div className="modal-icon">
                  🚛
                </div>

                <h2>Join Load Pool</h2>

                <p>
                  Combine your crop with nearby farmers
                  to improve vehicle utilization.
                </p>

                <div className="modal-summary">

                  <span>Farmer A — 500 kg</span>
                  <span>Farmer B — 400 kg</span>
                  <span>Farmer C — 600 kg</span>

                  <strong>
                    Total: 1,500 kg
                  </strong>

                </div>

                <button
                  className="full-button"
                  onClick={() => setModal(null)}
                >
                  Join Pool
                </button>
              </>

            )}


            {modal === "sell" && (

              <>
                <div className="modal-icon">
                  💰
                </div>

                <h2>Sell Now</h2>

                <p>
                  Estimated realization based on current
                  demo market price.
                </p>

                <div className="modal-summary">

                  <span>Quantity: 1,200 kg</span>
                  <span>Price: ₹3,150/q</span>

                  <strong>
                    Estimated: ₹37,800
                  </strong>

                </div>

                <button
                  className="full-button"
                  onClick={() => setModal(null)}
                >
                  Continue
                </button>
              </>

            )}


            {modal === "store" && (

              <>
                <div className="modal-icon">
                  📈
                </div>

                <h2>Store & Sell</h2>

                <p>
                  Demo calculation after estimated storage
                  and transport costs.
                </p>

                <div className="modal-summary">

                  <span>Expected Price: ₹3,350/q</span>
                  <span>Storage: ₹40/q</span>
                  <span>Transport: ₹30/q</span>

                  <strong>
                    Estimated: ₹39,360
                  </strong>

                </div>

                <button
                  className="full-button"
                  onClick={() => setModal(null)}
                >
                  Continue
                </button>
              </>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default FarmerDashboard;