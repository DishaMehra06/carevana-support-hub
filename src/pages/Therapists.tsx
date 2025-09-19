import "./Therapists.css";

const Therapists = () => {
  const therapists = [
    {
      name: "Dr. Aisha Rahman",
      specialization: "Speech Therapist",
      experience: "8 years experience",
      description: "Specializes in language development, articulation disorders, and communication skills for children with autism and developmental delays.",
      credentials: "M.S. Speech-Language Pathology, CCC-SLP"
    },
    {
      name: "Dr. Rohan Patel",
      specialization: "Physiotherapist",
      experience: "12 years experience", 
      description: "Expert in pediatric physiotherapy, motor skill development, and therapeutic exercises for children with physical disabilities.",
      credentials: "DPT, Pediatric Certified Specialist"
    },
    {
      name: "Dr. Meera Singh",
      specialization: "Genetic Counselor",
      experience: "10 years experience",
      description: "Provides comprehensive genetic counseling, testing coordination, and family support for inherited conditions and developmental disorders.",
      credentials: "M.S. Genetic Counseling, CGC"
    },
    {
      name: "Dr. James Thompson",
      specialization: "Occupational Therapist",
      experience: "15 years experience",
      description: "Focuses on sensory integration, fine motor skills, and adaptive strategies to help children achieve independence in daily activities.",
      credentials: "M.S. Occupational Therapy, OTR/L"
    },
    {
      name: "Dr. Sarah Williams",
      specialization: "Child Psychologist", 
      experience: "9 years experience",
      description: "Specializes in behavioral therapy, emotional regulation, and family counseling for children with special needs and their families.",
      credentials: "Ph.D. Clinical Psychology, Licensed Psychologist"
    },
    {
      name: "Dr. Ahmed Hassan",
      specialization: "Pediatric Neurologist",
      experience: "14 years experience",
      description: "Expert in neurological conditions affecting children, including epilepsy, cerebral palsy, and developmental brain disorders.",
      credentials: "M.D. Neurology, Board Certified Pediatric Neurologist"
    }
  ];

  const handleContact = (therapistName: string) => {
    console.log(`Contact initiated for ${therapistName}`);
  };

  return (
    <div className="therapists-page">
      <div className="therapists-header">
        <h1 className="therapists-title">
          Our Expert Therapists
        </h1>
        <p className="therapists-subtitle">
          Meet our dedicated team of licensed professionals committed to providing exceptional care and support for children with special needs.
        </p>
      </div>

      <div className="therapists-grid">
        {therapists.map((therapist, index) => (
          <div key={index} className="therapist-card">
            <div className="therapist-header">
              <div className="therapist-avatar">
                {therapist.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="therapist-info">
                <h3>{therapist.name}</h3>
                <p className="therapist-specialization">
                  {therapist.specialization}
                </p>
              </div>
            </div>
            
            <div className="therapist-details">
              <p className="therapist-experience">
                {therapist.experience}
              </p>
              <p className="therapist-description">
                {therapist.description}
              </p>
              <p className="therapist-credentials">
                {therapist.credentials}
              </p>
            </div>

            <button 
              onClick={() => handleContact(therapist.name)}
              className="contact-btn"
            >
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapists;