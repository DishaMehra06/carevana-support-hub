import "./facilities.css"
import facility1 from "../../assets/images/facility1.jpg"
import facility2 from "../../assets/images/facility2.jpg"

const Facilities = () => {
  return (
    <div className="facilities-container">
        <h3>Our Facilities</h3>

        <div className="facilities-wrapper">

            <div className="facility-details">
                <div className="facility-detail-head">
                    <h6>Providing essential resources for the care, therapy, and overall development of individuals with Down syndrome<br />Carevana offers a comprehensive range of services tailored to their unique needs. Our platform connects families and caregivers with specialized therapies, medical support, educational guidance, and rehabilitation programs.</h6>
                </div>
                <div className="facility-detail-body">
                    <p>From personalized therapy sessions to skill-building activities and healthcare assistance, Carevana ensures holistic support that enhances the quality of life and fosters growth and independence for every individual we serve.</p>
                </div>
                <div className="facility-detail-button">
                    <button>Find Out More</button>
                </div>
            </div>

            <div className="facility-images">
                <img className="facility1" src={facility1} alt="facility1" />
                <img className="facility2" src={facility2} alt="facility2" />
            </div>

        </div>
    </div>
  )
}

export default Facilities