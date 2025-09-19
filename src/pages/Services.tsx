import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Speech Therapy",
      description: "Comprehensive speech and language therapy services to help improve communication skills, articulation, and language development for children with special needs.",
      icon: "🗣️"
    },
    {
      title: "Occupational Therapy",
      description: "Specialized occupational therapy focusing on daily living skills, fine motor development, and sensory integration to enhance independence and quality of life.",
      icon: "🤲"
    },
    {
      title: "Physiotherapy", 
      description: "Expert physiotherapy services designed to improve motor skills, strength, coordination, and mobility through personalized treatment plans.",
      icon: "🏃‍♂️"
    },
    {
      title: "Counseling",
      description: "Professional counseling and psychological support for both children and families, addressing emotional, behavioral, and social challenges.",
      icon: "💭"
    },
    {
      title: "Legal Support",
      description: "Expert legal guidance for special education rights, disability benefits, advocacy services, and navigating complex healthcare systems.",
      icon: "⚖️"
    },
    {
      title: "Parent Matching System",
      description: "Connect with other parents facing similar challenges, share experiences, and build supportive communities through our matching platform.",
      icon: "👥"
    },
    {
      title: "Medication Support",
      description: "Comprehensive medication management, consultation services, and coordination with healthcare providers for optimal treatment outcomes.",
      icon: "💊"
    },
    {
      title: "Online Appointments",
      description: "Convenient telehealth services allowing you to access our expert therapists and specialists from the comfort of your home.",
      icon: "💻"
    },
    {
      title: "Genetic Testing Guidance",
      description: "Professional guidance through genetic testing processes, result interpretation, and connecting families with appropriate specialists and resources.",
      icon: "🧬"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="services-title">
          Our Services
        </h1>
        <p className="services-subtitle">
          Comprehensive support services designed to meet the unique needs of children with special needs and their families.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">
              {service.title}
            </h3>
            <p className="service-description">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;