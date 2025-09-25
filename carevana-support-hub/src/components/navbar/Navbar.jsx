import "./navbar.css"
import logo from "../../assets/images/carevana logo.jpg"
import search from "../../assets/images/search.png"

const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="logo">
        <img src={ logo} alt="medic-logo" />
      </div>

      <div className="nav-items">
        <h3>Medical Care</h3>
        <h3>Therapy Sessions</h3>
        <h3>Lab Tests</h3>
        <h3>Connect to parents</h3>
        <h3>Medical Contact</h3>
      </div>

      <div className="side-nav-items">
        <h3>Login</h3>
        <img src={search} alt="search" />
      </div>


    </div>
  )
}

export default Navbar