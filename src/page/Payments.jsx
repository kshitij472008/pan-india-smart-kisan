import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  CheckCircle2,
  Clock,
  IndianRupee,
  ArrowUpRight
} from "lucide-react";

import { orders } from "../data/mockData";

function Payments() {
  const navigate = useNavigate();

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
            DIGITAL PAYMENTS
          </div>

          <h1>Payments 💰</h1>

          <p>
            Track your completed and pending crop payments.
          </p>

        </div>

        <div className="demo-pill">
          <span></span>
          Payment Demo
        </div>

      </div>


      {/* PAYMENT SUMMARY */}

      <div className="stats-grid">

        <div className="stat-card green-stat">

          <div className="stat-icon">
            <IndianRupee />
          </div>

          <div>
            <span>Total Received</span>
            <strong>₹38,500</strong>
            <small>Completed payments</small>
          </div>

        </div>


        <div className="stat-card orange-stat">

          <div className="stat-icon">
            <Clock />
          </div>

          <div>
            <span>Pending</span>
            <strong>₹22,100</strong>
            <small>Awaiting payment</small>
          </div>

        </div>


        <div className="stat-card blue-stat">

          <div className="stat-icon">
            <CreditCard />
          </div>

          <div>
            <span>Transactions</span>
            <strong>2</strong>
            <small>This demo period</small>
          </div>

        </div>


        <div className="stat-card purple-stat">

          <div className="stat-icon">
            <CheckCircle2 />
          </div>

          <div>
            <span>Success Rate</span>
            <strong>100%</strong>
            <small>Demo transactions</small>
          </div>

        </div>

      </div>


      {/* PAYMENT CARDS */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              TRANSACTION HISTORY
            </span>

            <h2>
              Payment Status
            </h2>

          </div>

          <CreditCard size={22} />

        </div>


        <div className="payment-list">

          {orders.map((order) => {

            const completed =
              order.status === "Payment Completed";

            return (

              <div
                className="payment-card"
                key={order.id}
              >

                <div className="payment-icon">
                  {completed ? (
                    <CheckCircle2 />
                  ) : (
                    <Clock />
                  )}
                </div>


                <div className="payment-info">

                  <h3>
                    Order #{order.id}
                  </h3>

                  <p>
                    {order.crop} • {order.buyer}
                  </p>

                </div>


                <div className="payment-amount">

                  <small>Amount</small>

                  <strong>
                    ₹{order.amount.toLocaleString()}
                  </strong>

                </div>


                <div>

                  <span
                    className={`status-badge ${
                      completed
                        ? "completed"
                        : "pending"
                    }`}
                  >
                    {order.status}
                  </span>

                </div>


                <button
                  className="icon-button"
                  onClick={() =>
                    alert(
                      `Transaction details for #${order.id} (demo)`
                    )
                  }
                >
                  <ArrowUpRight size={18} />
                </button>

              </div>

            );

          })}

        </div>

      </section>


      {/* PAYMENT FLOW */}

      <section className="payment-flow-card">

        <div>

          <span>
            SMART PAYMENT FLOW
          </span>

          <h2>
            Transparent payment tracking
          </h2>

          <p>
            Track the transaction from accepted offer
            to completed payment.
          </p>

        </div>


        <div className="payment-flow">

          <div className="payment-flow-step active">
            <span>1</span>
            Offer
          </div>

          <div className="workflow-line"></div>

          <div className="payment-flow-step active">
            <span>2</span>
            Delivery
          </div>

          <div className="workflow-line"></div>

          <div className="payment-flow-step active">
            <span>3</span>
            Payment
          </div>

          <div className="workflow-line"></div>

          <div className="payment-flow-step active">
            <span>4</span>
            Completed
          </div>

        </div>

      </section>

    </div>
  );
}

export default Payments;