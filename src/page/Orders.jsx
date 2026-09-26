import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Truck,
  Warehouse,
  CreditCard,
  Package
} from "lucide-react";

import { orders } from "../data/mockData";

function Orders() {
  const navigate = useNavigate();

  const offerAccepted =
    localStorage.getItem("smartKisanOfferAccepted") === "true";

  const vehicleBooked =
    localStorage.getItem("smartKisanVehicleBooked") === "true";

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

          <div className="eyebrow">
            ORDER MANAGEMENT
          </div>

          <h1>Orders & Tracking 📦</h1>

          <p>
            Track your crop from buyer matching to payment completion.
          </p>

        </div>

        <div className="demo-pill">
          <span></span>
          Order Demo
        </div>

      </div>


      {/* CURRENT ORDER */}

      <section className="panel">

        <div className="panel-header">

          <div>
            <span className="panel-label">
              ACTIVE ORDER
            </span>

            <h2>
              Order #SK1024
            </h2>
          </div>

          <span className="status-badge completed">
            {offerAccepted ? "Offer Accepted" : "In Progress"}
          </span>

        </div>


        <div className="order-summary">

          <div className="order-crop-icon">
            🌾
          </div>

          <div>
            <small>Crop</small>
            <strong>Wheat</strong>
          </div>

          <div>
            <small>Buyer</small>
            <strong>Sharma Foods</strong>
          </div>

          <div>
            <small>Quantity</small>
            <strong>1,000 kg</strong>
          </div>

          <div>
            <small>Order Value</small>
            <strong>₹38,500</strong>
          </div>

        </div>


        {/* TIMELINE */}

        <div className="order-timeline">

          <div className="timeline-item completed-step">

            <div className="timeline-icon">
              <CheckCircle2 />
            </div>

            <div>
              <strong>Crop Listed</strong>
              <span>Crop added to Smart Kisan</span>
            </div>

          </div>


          <div className="timeline-line completed-line"></div>


          <div className="timeline-item completed-step">

            <div className="timeline-icon">
              <CheckCircle2 />
            </div>

            <div>
              <strong>Buyer Matched</strong>
              <span>Sharma Foods matched</span>
            </div>

          </div>


          <div className="timeline-line completed-line"></div>


          <div
            className={`timeline-item ${
              offerAccepted ? "completed-step" : "active-step"
            }`}
          >

            <div className="timeline-icon">
              {offerAccepted ? (
                <CheckCircle2 />
              ) : (
                <Clock />
              )}
            </div>

            <div>
              <strong>Offer Accepted</strong>
              <span>
                {offerAccepted
                  ? "Offer accepted successfully"
                  : "Waiting for offer acceptance"}
              </span>
            </div>

          </div>


          <div className="timeline-line"></div>


          <div
            className={`timeline-item ${
              vehicleBooked ? "completed-step" : ""
            }`}
          >

            <div className="timeline-icon">
              <Truck />
            </div>

            <div>
              <strong>Transport Assigned</strong>
              <span>
                {vehicleBooked
                  ? "Vehicle booked"
                  : "Vehicle not assigned"}
              </span>
            </div>

          </div>


          <div className="timeline-line"></div>


          <div className="timeline-item">

            <div className="timeline-icon">
              <Warehouse />
            </div>

            <div>
              <strong>Delivery</strong>
              <span>Awaiting dispatch</span>
            </div>

          </div>


          <div className="timeline-line"></div>


          <div className="timeline-item">

            <div className="timeline-icon">
              <CreditCard />
            </div>

            <div>
              <strong>Payment</strong>
              <span>Payment after delivery</span>
            </div>

          </div>

        </div>

      </section>


      {/* ALL ORDERS */}

      <section className="panel">

        <div className="panel-header">

          <div>
            <span className="panel-label">
              ORDER HISTORY
            </span>

            <h2>
              My Orders
            </h2>
          </div>

          <Package size={22} />

        </div>


        <div className="orders-list">

          {orders.map((order) => (

            <div className="order-card" key={order.id}>

              <div className="order-number">
                #{order.id}
              </div>

              <div className="order-product">

                <span>🌾</span>

                <div>
                  <strong>{order.crop}</strong>
                  <small>{order.buyer}</small>
                </div>

              </div>

              <div className="order-amount">

                <small>Order Value</small>

                <strong>
                  ₹{order.amount.toLocaleString()}
                </strong>

              </div>

              <div>

                <span
                  className={`status-badge ${
                    order.status === "Payment Completed"
                      ? "completed"
                      : "pending"
                  }`}
                >
                  {order.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ACTIONS */}

      <div className="quick-actions">

        <button onClick={() => navigate("/logistics")}>
          <Truck size={19} />
          Assign Transport
        </button>

        <button onClick={() => navigate("/payments")}>
          <CreditCard size={19} />
          View Payments
        </button>

      </div>

    </div>
  );
}

export default Orders;