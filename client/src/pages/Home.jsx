import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-badge">Smart Job Tracking Platform</p>
          <h1>
            Organize your job hunt with <span>ApplyMatrix</span>
          </h1>
          <p className="hero-description">
            Track applications, manage interviews, monitor progress, and stay
            on top of your career journey — all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/dashboard" className="primary-btn">
    Go to Dashboard
  </Link>
            <Link to="/about" className="secondary-btn">
    Learn More
  </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h3>Application Overview</h3>
            <div className="mini-stats">
              <div className="mini-box">
                <span>24</span>
                <p>Applied</p>
              </div>
              <div className="mini-box">
                <span>8</span>
                <p>Interviews</p>
              </div>
              <div className="mini-box">
                <span>3</span>
                <p>Offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>Why Choose ApplyMatrix?</h2>
        <p className="section-subtitle">
          Everything you need to manage your applications efficiently.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Track Applications</h3>
            <p>
              Keep all your applications organized with company, role, status,
              and date in one dashboard.
            </p>
          </div>

          <div className="feature-card">
            <h3>Monitor Progress</h3>
            <p>
              View where you stand in your job search with statuses like
              Applied, Interview, Rejected, and Offer.
            </p>
          </div>

          <div className="feature-card">
            <h3>Simple Analytics</h3>
            <p>
              Understand your performance with clean analytics and track your
              job hunt growth over time.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <h2>How It Works</h2>
        <div className="how-grid">
          <div className="how-card">
            <div className="step-number">1</div>
            <h3>Add Applications</h3>
            <p>
              Save company name, role, date applied, and current application
              status.
            </p>
          </div>

          <div className="how-card">
            <div className="step-number">2</div>
            <h3>Track Status</h3>
            <p>
              Update your journey as you move from application to interview to
              offer.
            </p>
          </div>

          <div className="how-card">
            <div className="step-number">3</div>
            <h3>Analyze Results</h3>
            <p>
              Use insights and analytics to improve your strategy and stay more
              focused.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stat-box">
          <h3>100+</h3>
          <p>Applications Managed</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Interviews Tracked</p>
        </div>
        <div className="stat-box">
          <h3>10x</h3>
          <p>Better Organization</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Take control of your job search today</h2>
        <p>
          Stay organized, reduce stress, and manage every opportunity with
          ApplyMatrix.
        </p>
       <Link to="/dashboard" className="primary-btn">
  Start Tracking Now
</Link>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <p>© 2026 ApplyMatrix. Built to simplify your career journey.</p>
      </footer>
    </div>
  );
}

export default Home;
