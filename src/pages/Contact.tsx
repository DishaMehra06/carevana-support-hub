import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">
          Contact Us
        </h1>
        <p className="contact-subtitle">
          Have questions about our services? We're here to help. Reach out to us and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-card">
          <h2 className="contact-form-title">
            Send us a Message
          </h2>
          <p className="contact-form-description">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="form-textarea"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <h2 className="info-card-title">
              Get in Touch
            </h2>
            
            <div className="contact-item">
              <div className="contact-icon primary">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon accent">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>contact@carevana.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon secondary">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>
                  123 Healthcare Plaza<br />
                  Suite 200<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>

          <div className="info-card soft">
            <h2 className="info-card-title">
              Office Hours
            </h2>
            <div className="office-hours">
              <div className="hours-row">
                <span className="day">Monday - Friday</span>
                <span className="time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 3:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;