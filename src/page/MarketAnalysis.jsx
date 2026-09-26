import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  MapPin,
  Sparkles,
  IndianRupee,
  Info
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar
} from "recharts";

import { priceData } from "../data/mockData";

function MarketAnalysis() {
  const navigate = useNavigate();
  const [crop, setCrop] = useState("Wheat");

  const marketData = [
    { market: "Meerut", price: 3280 },
    { market: "Delhi", price: 3210 },
    { market: "Hapur", price: 3170 },
    { market: "Karnal", price: 3150 },
    { market: "Panipat", price: 3120 }
  ];

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
            MARKET INTELLIGENCE
          </div>

          <h1>Market Analysis 📊</h1>

          <p>
            Compare market prices and identify better selling
            opportunities.
          </p>
        </div>

        <div className="demo-pill">
          <span></span>
          Demo Market Data
        </div>

      </div>


      {/* CROP SELECTOR */}

      <div className="crop-selector">

        {["Wheat", "Onion", "Tomato"].map((item) => (

          <button
            key={item}
            className={crop === item ? "active" : ""}
            onClick={() => setCrop(item)}
          >
            {item}
          </button>

        ))}

      </div>


      {/* PRICE SUMMARY */}

      <div className="stats-grid">

        <div className="stat-card green-stat">

          <div className="stat-icon">
            <IndianRupee />
          </div>

          <div>
            <span>Current Price</span>
            <strong>₹3,150/q</strong>
            <small>{crop} market price</small>
          </div>

        </div>


        <div className="stat-card blue-stat">

          <div className="stat-icon">
            <TrendingUp />
          </div>

          <div>
            <span>Best Price</span>
            <strong>₹3,280/q</strong>
            <small>Meerut</small>
          </div>

        </div>


        <div className="stat-card orange-stat">

          <div className="stat-icon">
            <Sparkles />
          </div>

          <div>
            <span>Price Difference</span>
            <strong>+₹130/q</strong>
            <small>Potential upside</small>
          </div>

        </div>


        <div className="stat-card purple-stat">

          <div className="stat-icon">
            <MapPin />
          </div>

          <div>
            <span>Best Market</span>
            <strong>Meerut</strong>
            <small>48 km away</small>
          </div>

        </div>

      </div>


      {/* AI INSIGHT */}

      <section className="ai-insight-large">

        <div className="ai-insight-icon">
          🤖
        </div>

        <div>

          <span>SMART PRICE INSIGHT</span>

          <h2>
            Meerut currently shows the highest
            demo price for {crop}.
          </h2>

          <p>
            Difference from current price:
            <strong> +₹130/quintal</strong>.
            This is a prototype calculation and not a live
            prediction.
          </p>

        </div>

      </section>


      {/* PRICE TREND */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              7-DAY TREND
            </span>

            <h2>
              {crop} Price Movement
            </h2>

          </div>

          <div className="chart-info">
            <Info size={16} />
            Demo data
          </div>

        </div>


        <div className="large-chart">

          <ResponsiveContainer width="100%" height={330}>

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
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="wheat"
                strokeWidth={4}
                dot={{ r: 4 }}
                animationDuration={1200}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </section>


      {/* MARKET COMPARISON */}

      <section className="panel">

        <div className="panel-header">

          <div>

            <span className="panel-label">
              MARKET COMPARISON
            </span>

            <h2>
              Where Can You Get Better Value?
            </h2>

          </div>

        </div>


        <div className="market-chart">

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={marketData}>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="market"
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="price"
                radius={[8, 8, 0, 0]}
                animationDuration={1000}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>


        <div className="market-ranking">

          {marketData.map((market, index) => (

            <div
              className="market-ranking-row"
              key={market.market}
            >

              <span className="rank-number">
                {index + 1}
              </span>

              <MapPin size={17} />

              <strong>
                {market.market}
              </strong>

              <span>
                ₹{market.price.toLocaleString()}/q
              </span>

              {index === 0 && (
                <b>Best</b>
              )}

            </div>

          ))}

        </div>

      </section>


      {/* DECISION CARD */}

      <section className="decision-highlight">

        <div>

          <span>
            SMART SELL / STORE DECISION
          </span>

          <h2>
            Estimated better realization:
            <strong> ₹39,360</strong>
          </h2>

          <p>
            Based on demo expected price, storage and
            transport costs.
          </p>

        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/farmer")}
        >
          Back to Farmer Dashboard
        </button>

      </section>

    </div>
  );
}

export default MarketAnalysis;