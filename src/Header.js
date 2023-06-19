import {React } from 'react';
import { Link } from "react-router-dom";
import Simpolo from './assets/Logo.png';
const HeaderPageLayout = () => {

    return (
      <>
    {/* Creating Navbar */} 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Link className="navbar-brand" to="/"><img className='header-logo' src={Simpolo} alt="logo" /></Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            COLLECTIONS
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> VITRIFIED TILES
            <li>
              <div className="dropdown-divider">
              </div>
            </li>
            <li><Link className="dropdown-item" to="#">LOCATIONS</Link></li>
            <li><Link className="dropdown-item" to="#">Livingroom</Link></li>
            <li><Link className="dropdown-item" to="#">Bathroom</Link></li>
            <li><Link className="dropdown-item" to="#">Kitchen</Link></li>
            <li><Link className="dropdown-item" to="#">Outdoor</Link></li>
            <li><Link className="dropdown-item" to="#">Balcony</Link></li>
            <li><Link className="dropdown-item" to="#">Staircase</Link></li>
            <li><Link className="dropdown-item" to="#">Elevation</Link></li>
            <li><Link className="dropdown-item" to="#">Commercial</Link></li>
          </ul>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">LOCATIONS</Link></li>
            <li><Link className="dropdown-item" to="#">Livingroom</Link></li>
            <li><Link className="dropdown-item" to="#">Bathroom</Link></li>
            <li><Link className="dropdown-item" to="#">Kitchen</Link></li>
          </ul>
        </li> */}
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            INTERACTIVE
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Tiles Calculator</Link></li>
          </ul>
        </li> */}
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            WHERE TO BUY
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/RND">Dealer</Link></li>
            <li><Link className="dropdown-item" to="#">Simpolo Exclusive</Link></li>

          </ul>
        </li> */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            ABOUT US
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Director's Message</Link></li>
            <li><Link className="dropdown-item" to="/company">Company Profile</Link></li>
            <li><Link className="dropdown-item" to="mission-vision">Mission & Vision</Link></li>
            <li><Link className="dropdown-item" to="/RND">R & D</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Products
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Silica Sand</Link></li>
            <li><Link className="dropdown-item" to="#">Ball Clay</Link></li>
            <li><Link className="dropdown-item" to="#">Bentonite</Link></li>
            <li><Link className="dropdown-item" to="/RND">Kaolin</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/applications">Applications</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/downloads">Downloads</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            CONTACT US
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Enquiry</Link></li>
            <li><Link className="dropdown-item" to="#">Feedback</Link></li>
            <li><Link className="dropdown-item" to="#">Contact Details</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            MEDIA
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Blog</Link></li>
            <li><Link className="dropdown-item" to="#">CSR</Link></li>
            <li><Link className="dropdown-item" to="#">TV Commercials</Link></li>
            <li><Link className="dropdown-item" to="#">Corporate Videos</Link></li>
            <li><Link className="dropdown-item" to="#">Pulse Newsletter</Link></li>
          </ul>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </>
    )
}

export default HeaderPageLayout;