import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  Package,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  X,
  ShoppingCart
} from "lucide-react";

const cropLots = [
  {
    id: 1,
    crop: "Wheat",
    quality: "Grade A",
    quantity: "1,200 kg",
    price: 3250,
    location: "Haryana"
  },
  {
    id: 2,
    crop: "Onion",
    quality: "Grade A",
    quantity: "2,000 kg",
    price: 2600,
    location: "Maharashtra"
  },
  {
    id: 3,
    crop: "Potato",
    quality: "Grade A",
    quantity: "1,500 kg",
    price: 2100,
    location: "Uttar Pradesh"
  }
];

function BuyerDashboard() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [offerSent, setOfferSent] = useState(false);

  const filteredLots = cropLots.filter((lot) =>
    `${lot.crop} ${lot.location} ${lot.quality}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>

          <div className="eyebrow">
            BUYER MARKETPLACE
          </div>

          <h1>
            Find Quality Crops 🛒
          </h1>

          <p>
            Discover crop lots directly from farmers and FPOs.
          </p>

        </div>

        <div className="demo-pill">
          <span></span>
          Prototype Demo
        </div>

      </div>


      {/* SEARCH */}

      <section className="market-search-panel">

        <div className="search-box-large">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search crop, quantity or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <button className="filter-button">
          <Filter size={18} />
          Filters
        </button>

      </section>


      {/* FILTERS */}

      <div className="filter-row">

        <button>Crop ▾</button>
        <button>Quality ▾</button>
        <button>Quantity ▾</button>
        <button>Distance ▾</button>
        <button>Price ▾</button>

      </div>


      {/* MARKETPLACE */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              AVAILABLE LOTS
            </span>

            <h2>
              Crop Marketplace
            </h2>

          </div>

          <span className="result-count">
            {filteredLots.length} lots found
          </span>

        </div>


        <div className="buyer-market-grid">

          {filteredLots.map((lot) => (

            <div className="market-crop-card" key={lot.id}>

              <div className="market-crop-image">
                {lot.crop === "Wheat"
                  ? "🌾"
                  : lot.crop === "Onion"
                  ? "🧅"
                  : "🥔"}
              </div>

              <div className="market-crop-info">

                <div className="market-title-row">

                  <div>

                    <h3>{lot.crop}</h3>

                    <span className="grade-badge">
                      {lot.quality}
                    </span>

                  </div>

                  <div className="verified-badge">
                    ✓ Verified
                  </div>

                </div>


                <div className="market-location">

                  <MapPin size={15} />

                  {lot.location}

                </div>


                <div className="market-details">

                  <div>
                    <small>Quantity</small>
                    <strong>{lot.quantity}</strong>
                  </div>

                  <div>
                    <small>Price</small>
                    <strong>
                      ₹{lot.price.toLocaleString()}/q
                    </strong>
                  </div>

                </div>


                <div className="market-actions">

                  <button
                    className="outline-button"
                    onClick={() => {
                      setSelectedCrop(lot);
                      setModal("view");
                    }}
                  >
                    View Lot
                  </button>

                  <button
                    className="small-primary-btn"
                    onClick={() => {
                      setSelectedCrop(lot);
                      setModal("offer");
                    }}
                  >
                    Make Offer
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* DEMAND */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              BUYER REQUIREMENTS
            </span>

            <h2>
              Buyer Demand
            </h2>

          </div>

          <TrendingUp size={22} />

        </div>


        <div className="demand-grid">

          <div className="demand-card">

            <div className="demand-top">

              <div className="demand-crop">
                🌾
              </div>

              <div>
                <h3>Wheat</h3>
                <span>Grade A preferred</span>
              </div>

            </div>


            <div className="demand-values">

              <div>
                <small>Required</small>
                <strong>5,000 kg</strong>
              </div>

              <div>
                <small>Received</small>
                <strong>3,200 kg</strong>
              </div>

              <div>
                <small>Remaining</small>
                <strong className="orange-text">
                  1,800 kg
                </strong>
              </div>

            </div>


            <div className="demand-progress">

              <div className="progress-label">
                <span>Progress</span>
                <strong>64%</strong>
              </div>

              <div className="progress-bar">
                <span style={{ width: "64%" }}></span>
              </div>

            </div>

          </div>


          <div className="demand-card">

            <div className="demand-top">

              <div className="demand-crop">
                🧅
              </div>

              <div>
                <h3>Onion</h3>
                <span>Grade A preferred</span>
              </div>

            </div>


            <div className="demand-values">

              <div>
                <small>Required</small>
                <strong>3,000 kg</strong>
              </div>

              <div>
                <small>Received</small>
                <strong>1,850 kg</strong>
              </div>

              <div>
                <small>Remaining</small>
                <strong className="orange-text">
                  1,150 kg
                </strong>
              </div>

            </div>


            <div className="demand-progress">

              <div className="progress-label">
                <span>Progress</span>
                <strong>62%</strong>
              </div>

              <div className="progress-bar">
                <span style={{ width: "62%" }}></span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* QUICK ACTIONS */}

      <div className="quick-actions">

        <button onClick={() => navigate("/buyer-matching")}>
          <Package size={20} />
          Buyer Matching
          <ArrowRight size={16} />
        </button>

        <button onClick={() => navigate("/orders")}>
          <ShoppingCart size={20} />
          My Orders
          <ArrowRight size={16} />
        </button>

      </div>


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


            {modal === "view" && selectedCrop && (

              <>
                <div className="modal-icon">
                  {selectedCrop.crop === "Wheat"
                    ? "🌾"
                    : selectedCrop.crop === "Onion"
                    ? "🧅"
                    : "🥔"}
                </div>

                <h2>
                  {selectedCrop.crop} Lot Details
                </h2>

                <p>
                  Review the available crop lot before
                  making an offer.
                </p>

                <div className="modal-summary">

                  <span>
                    Quality: {selectedCrop.quality}
                  </span>

                  <span>
                    Quantity: {selectedCrop.quantity}
                  </span>

                  <span>
                    Location: {selectedCrop.location}
                  </span>

                  <strong>
                    ₹{selectedCrop.price.toLocaleString()}/q
                  </strong>

                </div>

                <button
                  className="full-button"
                  onClick={() => setModal("offer")}
                >
                  Make Offer
                  <ArrowRight size={17} />
                </button>

              </>

            )}


            {modal === "offer" && selectedCrop && (

              <>
                <div className="modal-icon">
                  💼
                </div>

                <h2>
                  Make an Offer
                </h2>

                <p>
                  Submit your purchase offer for this crop lot.
                </p>

                <div className="offer-form">

                  <label>
                    Crop
                  </label>

                  <input
                    value={selectedCrop.crop}
                    readOnly
                  />

                  <label>
                    Quantity
                  </label>

                  <input
                    defaultValue={selectedCrop.quantity}
                  />

                  <label>
                    Your Offer ₹/quintal
                  </label>

                  <input
                    type="number"
                    defaultValue={selectedCrop.price}
                  />

                </div>

                {offerSent ? (

                  <div className="success-box">
                    <CheckCircle2 size={18} />
                    Offer sent successfully to farmer.
                  </div>

                ) : (

                  <button
                    className="full-button"
                    onClick={() => setOfferSent(true)}
                  >
                    Send Offer
                    <ArrowRight size={17} />
                  </button>

                )}

              </>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default BuyerDashboard;