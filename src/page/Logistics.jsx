import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Truck,
  MapPin,
  CheckCircle2,
  Users,
  IndianRupee,
  ArrowRight
} from "lucide-react";

import { vehicles } from "../data/mockData";

function Logistics() {

  const navigate = useNavigate();

  const [bookedVehicle, setBookedVehicle] = useState(null);
  const [poolJoined, setPoolJoined] = useState(false);

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
            SMART LOGISTICS
          </div>

          <h1>Transport & Load Pooling 🚚</h1>

          <p>
            Find nearby vehicles and reduce transportation costs
            through load pooling.
          </p>

        </div>

        <div className="demo-pill">
          <span></span>
          Logistics Demo
        </div>

      </div>


      {/* VEHICLES */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              AVAILABLE VEHICLES
            </span>

            <h2>
              Nearby Transport
            </h2>

          </div>

          <Truck size={23} />

        </div>


        <div className="vehicle-grid">

          {vehicles.map((vehicle) => {

            const booked = bookedVehicle === vehicle.id;

            return (

              <div
                className={`vehicle-large-card ${
                  booked ? "vehicle-booked" : ""
                }`}
                key={vehicle.id}
              >

                <div className="vehicle-image">
                  🚚
                </div>

                <div className="vehicle-content">

                  <div className="vehicle-title">

                    <div>

                      <h3>{vehicle.type}</h3>

                      <span className="available-badge">
                        ● {vehicle.status}
                      </span>

                    </div>

                    <strong>
                      ₹{vehicle.cost.toLocaleString()}
                    </strong>

                  </div>


                  <div className="vehicle-specs">

                    <span>
                      <Truck size={15} />
                      {vehicle.capacity}
                    </span>

                    <span>
                      <MapPin size={15} />
                      {vehicle.distance}
                    </span>

                    <span>
                      <IndianRupee size={15} />
                      Estimated
                    </span>

                  </div>


                  {booked ? (

                    <div className="success-box">
                      <CheckCircle2 size={18} />
                      Vehicle booked successfully.
                    </div>

                  ) : (

                    <button
                      className="full-button"
                      onClick={() => {
                        setBookedVehicle(vehicle.id);
                        localStorage.setItem(
                          "smartKisanVehicleBooked",
                          "true"
                        );
                      }}
                    >
                      Book Vehicle
                      <ArrowRight size={16} />
                    </button>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* LOAD POOLING */}

      <section className="panel pooling-main">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              COST OPTIMIZATION
            </span>

            <h2>
              Smart Load Pooling
            </h2>

          </div>

          <Users size={23} />

        </div>


        <div className="pool-main-grid">

          <div className="pool-visual">

            <div className="pool-circle">
              100%
              <span>Utilization</span>
            </div>

          </div>


          <div className="pool-details">

            <h3>
              Combine shipments with nearby farmers
            </h3>

            <p>
              A 1,500 kg vehicle can be completely utilized
              by pooling multiple farmer shipments.
            </p>


            <div className="pool-farmers">

              <div>
                <span>👨‍🌾</span>
                <strong>Farmer A</strong>
                <small>500 kg</small>
              </div>

              <div>
                <span>👨‍🌾</span>
                <strong>Farmer B</strong>
                <small>400 kg</small>
              </div>

              <div>
                <span>👨‍🌾</span>
                <strong>Farmer C</strong>
                <small>600 kg</small>
              </div>

            </div>


            <div className="pool-total">

              <span>
                Total Load
              </span>

              <strong>
                1,500 kg / 1,500 kg
              </strong>

            </div>


            {poolJoined ? (

              <div className="success-box">
                <CheckCircle2 size={18} />
                You joined the load pool.
              </div>

            ) : (

              <button
                className="primary-btn"
                onClick={() => setPoolJoined(true)}
              >
                Join Load Pool
                <ArrowRight size={17} />
              </button>

            )}

          </div>

        </div>

      </section>


      {/* LOGISTICS WORKFLOW */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              TRANSPORT WORKFLOW
            </span>

            <h2>
              From Booking to Delivery
            </h2>

          </div>

        </div>


        <div className="logistics-flow">

          <div className="logistics-step active">
            <span>1</span>
            Vehicle Search
          </div>

          <div className="workflow-line"></div>

          <div className="logistics-step">
            <span>2</span>
            Booking
          </div>

          <div className="workflow-line"></div>

          <div className="logistics-step">
            <span>3</span>
            Pickup
          </div>

          <div className="workflow-line"></div>

          <div className="logistics-step">
            <span>4</span>
            Transit
          </div>

          <div className="workflow-line"></div>

          <div className="logistics-step">
            <span>5</span>
            Delivery
          </div>

        </div>

      </section>

    </div>
  );
}

export default Logistics;