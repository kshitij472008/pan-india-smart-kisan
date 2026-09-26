import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight
} from "lucide-react";

import { buyers } from "../data/mockData";

function BuyerMatching() {
  const navigate = useNavigate();

  const [acceptedBuyer, setAcceptedBuyer] = useState(null);

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
            SMART MATCHING
          </div>

          <h1>Buyer Matching 🎯</h1>

          <p>
            Find buyers based on crop, quantity, price and distance.
          </p>

        </div>

        <div className="demo-pill">
          <span></span>
          Matching Demo
        </div>

      </div>


      {/* MATCHING EXPLANATION */}

      <section className="matching-banner">

        <div className="matching-icon">
          🎯
        </div>

        <div>

          <span>SMART MATCH ENGINE</span>

          <h2>
            3 buyers match your available crops
          </h2>

          <p>
            Matches are calculated using demo crop,
            quantity, price and location data.
          </p>

        </div>

      </section>


      {/* BUYERS */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              MATCHED BUYERS
            </span>

            <h2>
              Recommended Buyers
            </h2>

          </div>

          <Target size={23} />

        </div>


        <div className="matching-list">

          {buyers.map((buyer) => {

            const accepted = acceptedBuyer === buyer.id;

            return (

              <div
                className={`matching-card ${
                  accepted ? "accepted-card" : ""
                }`}
                key={buyer.id}
              >

                <div className="matching-company">

                  <div className="company-avatar">
                    {buyer.name.charAt(0)}
                  </div>

                  <div>

                    <h3>{buyer.name}</h3>

                    <span>
                      Verified Buyer
                    </span>

                  </div>

                </div>


                <div className="match-percentage">

                  <strong>
                    {buyer.match}%
                  </strong>

                  <span>
                    Match
                  </span>

                </div>


                <div className="matching-detail">

                  <small>Crop</small>
                  <strong>{buyer.crop}</strong>

                </div>


                <div className="matching-detail">

                  <small>Required</small>
                  <strong>{buyer.required}</strong>

                </div>


                <div className="matching-detail">

                  <small>Offer</small>
                  <strong>
                    ₹{buyer.offer.toLocaleString()}/q
                  </strong>

                </div>


                <div className="matching-detail">

                  <small>Distance</small>

                  <strong>
                    <MapPin size={14} />
                    {buyer.distance}
                  </strong>

                </div>


                <div className="matching-actions">

                  {accepted ? (

                    <div className="accepted-status">
                      <CheckCircle2 size={17} />
                      Offer Accepted
                    </div>

                  ) : (

                    <>
                      <button
                        className="outline-button"
                        onClick={() => {
                          alert(
                            `Calling ${buyer.name} (demo)`
                          );
                        }}
                      >
                        <Phone size={15} />
                        Contact
                      </button>

                      <button
                        className="small-primary-btn"
                        onClick={() => {
                          setAcceptedBuyer(buyer.id);
                          localStorage.setItem(
                            "smartKisanOfferAccepted",
                            "true"
                          );
                        }}
                      >
                        Accept Offer
                        <ArrowRight size={15} />
                      </button>
                    </>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              NEXT STEP
            </span>

            <h2>
              After Accepting an Offer
            </h2>

          </div>

        </div>


        <div className="workflow-mini">

          <div className="workflow-item active">
            <span>1</span>
            Buyer Matched
          </div>

          <div className="workflow-line"></div>

          <div className="workflow-item">
            <span>2</span>
            Offer Accepted
          </div>

          <div className="workflow-line"></div>

          <div className="workflow-item">
            <span>3</span>
            Transport Assigned
          </div>

          <div className="workflow-line"></div>

          <div className="workflow-item">
            <span>4</span>
            Delivered
          </div>

          <div className="workflow-line"></div>

          <div className="workflow-item">
            <span>5</span>
            Payment
          </div>

        </div>


        <button
          className="full-button"
          onClick={() => navigate("/orders")}
        >
          Track Orders
          <ArrowRight size={17} />
        </button>

      </section>

    </div>
  );
}

export default BuyerMatching;