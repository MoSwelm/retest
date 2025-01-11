import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import Footer from './../Footer/Footer';

export default function Navbar() {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-body-dark nav-bg-color p-4">
      <div className="container">
        <Link className="navbar-brand fs-2 fw-bold text-uppercase" to="/home">
          Start Framework
        </Link>
        <button
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarScroll"
          data-bs-toggle="collapse"
          type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll fs-5 fw-bold"
            style={{
              "--bs-scroll-height": "100px",
            }}>
            <li className="nav-item me-3">
              <Link aria-current="page" className="nav-link" to="about">
                About
              </Link>
            </li>         
            <li className="nav-item me-3">
              <Link aria-current="page" className="nav-link" to="portfolio">
                Portfolio
              </Link>
            </li>         
            <li className="nav-item">
              <Link aria-current="page" className="nav-link" to="contact">
                Contact
              </Link>
            </li>         
          </ul>
        </div>
      </div>
    </nav>   
    <Outlet />

    <Footer/>
   </>
  )
}
