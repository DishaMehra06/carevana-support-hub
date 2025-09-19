import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-healthcare.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Carevana – Support for Special Needs & Disabilities
              </h1>
              <p className="hero-subtitle">
                Therapy, Legal Support, Parent Matching & More
              </p>
              <button
                onClick={() => navigate("/services")}
                className="btn btn-secondary"
              >
                Explore Services
              </button>
            </div>
            
            <div>
              <img
                src={heroImage}
                alt="Healthcare support for special needs"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Comprehensive Care Solutions
            </h2>
            <p className="features-subtitle">
              Supporting families with personalized therapy services, legal guidance, 
              and community connections for children with special needs.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon primary">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Expert Therapists</h3>
              <p className="feature-description">
                Licensed professionals specializing in various therapeutic approaches
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon accent">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Family Network</h3>
              <p className="feature-description">
                Connect with other families facing similar challenges and experiences
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon secondary">
                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="feature-title">Legal Support</h3>
              <p className="feature-description">
                Navigate complex legal requirements and advocacy services
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;