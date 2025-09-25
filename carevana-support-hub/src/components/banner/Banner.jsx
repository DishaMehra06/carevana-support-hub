import "./banner.css"
import ellipse from "../../assets/images/ellipse.png"
import doctor from "../../assets/images/banner-doctor.png"

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">

                <div className="banner-heading">
                    <h2>CAREVANA<br />ONE STOP INCLUSIVE PLATFORM FOR ALL<br />health</h2>
                </div>

                <div className="banner-subheading">
                    <p>We are here to serve people with sepcial abilities by providing them varied services to make their lives better.</p>
                </div>

                <div className="banner-buttons">
                    <button className="banner-appointment-button">Request appointment</button>
                    <button className="banner-learn-button">Learn More</button>
                </div>

            </div>

            <div className="banner-graphic">
                <img src={ellipse} alt="ellipse" />
                <img src={doctor} alt="doctor" />
            </div>

        </div>
    )
}

export default Banner