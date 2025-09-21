
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css"
import noyauImage from '../Logo/noyau.jpeg';

const NavBar = () => {
  return (
    <header>
      <p className="z-2 text-secondary position-absolute">Looking good today :)</p>
      <nav className="navbar bg-light navbar-expand-sm navbar-light px-3">
        <div className="container-fluid text-center">
          <Link id="liO" className="navbar-brand" to="/"><img src={noyauImage} alt="Noyau" width={35} className="rounded-circle" /></Link>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav gap-2">
              <li id="liA" className="nav-item">
                <Link className="nav-link" to="/Base">Base</Link>
              </li>
              <li id="liB" className="nav-item">
                <Link className="nav-link" to="/Community">Community</Link>
              </li>
              <li id="liC" className="nav-item">
                <Link className="nav-link" to="/Notes">Notes</Link>
              </li>    
              <li id="liD" className="nav-item">
                <Link className="nav-link" to="/OurLab">OurLab</Link>
              </li>    
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar