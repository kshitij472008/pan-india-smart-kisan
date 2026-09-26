import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sprout,
  TrendingUp,
  Truck,
  Warehouse,
  Users,
  ShieldCheck
} from "lucide-react";

function Landing() {
  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <nav className="landing-nav">
        <div className="brand">
          <div className="brand-icon">
            <Sprout size={24} />
          </div>

          <div>
            <h2>SMART KISAN</h2>
            <span>Agri-Tech Platform</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#markets">Markets</a>
          <a href="#features">Features</a>
          <Link to="/roles" className="login-link">
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Smart Agriculture • Demo Platform
          </div>

          <h1>
            Sell Smarter.
            <br />
            <span>Earn Better.</span>
          </h1>

          <p>
            One intelligent platform connecting farmers, buyers,
            warehouses and logistics.
          </p>

          <div className="hero-buttons">

            <Link to="/roles" className="primary-btn">
              Explore Smart Kisan
              <ArrowRight size={19} />
            </Link>

            <Link to="/farmer" className="secondary-btn">
              <Play size={17} />
              View Demo
            </Link>

          </div>

          <div className="hero-trust">
            <ShieldCheck size={18} />
            <span>Prototype Demo • Data shown is for demonstration purposes</span>
          </div>

        </div>

        {/* AGRICULTURE VISUAL */}
        <div className="hero-visual">

          <div className="floating-card price-card">
            <TrendingUp size={20} />
            <div>
              <small>Best Market Price</small>
              <strong>₹3,280/q</strong>
              <span>+₹130 better value</span>
            </div>
          </div>

          <div className="farm-illustration">

            <div className="sun"></div>

            <div className="hill hill-one"></div>
            <div className="hill hill-two"></div>

            <div className="field">
              <div className="crop-row"></div>
              <div className="crop-row"></div>
              <div className="crop-row"></div>
              <div className="crop-row"></div>
            </div>

            <div className="farmer-emoji">👨‍🌾</div>

          </div>

          <div className="floating-card logistics-card">
            <Truck size={20} />
            <div>
              <small>Smart Logistics</small>
              <strong>48 km nearby</strong>
              <span>Vehicle available</span>
            </div>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-item">
          <strong>12+</strong>
          <span>Markets</span>
        </div>

        <div className="stat-item">
          <strong>250+</strong>
          <span>Buyers</span>
        </div>

        <div className="stat-item">
          <strong>48+</strong>
          <span>Warehouses</span>
        </div>

        <div className="stat-item">
          <strong>1</strong>
          <span>Smart Platform</span>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="section-block" id="how-it-works">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>From Farm to Market</h2>
          <p>
            Smart Kisan connects the complete agricultural value chain
            through one simple platform.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon green">
              <Sprout />
            </div>

            <h3>Farmer</h3>

            <p>
              List crops, check market prices and discover better
              selling opportunities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue">
              <Users />
            </div>

            <h3>Buyer</h3>

            <p>
              Find verified crop lots directly from farmers and
              FPOs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange">
              <Warehouse />
            </div>

            <h3>Warehouse</h3>

            <p>
              Manage available storage and connect with nearby
              farmers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple">
              <Truck />
            </div>

            <h3>Logistics</h3>

            <p>
              Find nearby transport and optimize load utilization.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="section-block light-section" id="features">

        <div className="section-heading">
          <span>SMART FEATURES</span>
          <h2>One Platform. Multiple Solutions.</h2>
        </div>

        <div className="feature-pills">

          <div>🤖 AI Price Intelligence</div>
          <div>🎯 Buyer Matching</div>
          <div>🚚 Smart Logistics</div>
          <div>🏭 Warehouse Network</div>
          <div>📊 Market Analysis</div>
          <div>💰 Digital Payments</div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div>
          <span>SMART KISAN</span>

          <h2>
            Make every harvest
            <br />
            a smarter opportunity.
          </h2>
        </div>

        <Link to="/roles" className="primary-btn">
          Start Demo
          <ArrowRight size={19} />
        </Link>

      </section>

      <footer className="landing-footer">
        <div>
          <strong>SMART KISAN</strong>
          <span>From Farm to Market — Smarter, Faster, Better</span>
        </div>

        <span>SIH 2026 Prototype Demo</span>
      </footer>

    </div>
  );
}

export default Landing;