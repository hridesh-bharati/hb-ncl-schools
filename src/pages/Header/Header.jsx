import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* 🔹 Top Info Bar */}
      <div className="topbar text-white small py-2">
        <div className="container-fluid px-3">
          <div className="row align-items-center text-center text-md-start">
            {/* Left: Contact Info */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center gap-2 flex-wrap py-1">
              <i className="bi bi-telephone-fill"></i> +91 98765 43210
              <span className="d-none d-md-inline">|</span>
              <i className="bi bi-envelope-fill ms-md-3"></i> info@hrideshschools.in
            </div>

            {/* Right: Quick Links */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3 flex-wrap py-1">
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-1">
                <i className="bi bi-geo-alt-fill"></i> Find Us
              </a>
              <a href="#" className="text-white text-decoration-none d-flex align-items-center gap-1">
                <i className="bi bi-bell-fill"></i> Notices
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon shadow-sm sticky-top">
        <div className="container-fluid px-3">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold fs-5 text-warning d-flex align-items-center gap-2" to="/">
            🎓
            HB School
          </NavLink>

          {/* Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Students", path: "/students" },
                { name: "Teachers", path: "/teachers" },
                { name: "Gallery", path: "/gallery-page" },
                { name: "Contact", path: "/contact" },
                { name: "Login", path: "/login" },
              ].map((link) => (
                <li key={link.path} className="nav-item">
                  <NavLink
                    end
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* 🔹 Custom CSS */}
      <style>{`
        /* Top Bar */
        .topbar {
          background: linear-gradient(90deg, #7b1113, #b71c1c);
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        /* Navbar Maroon Theme */
        .bg-maroon {
          background: linear-gradient(90deg, #7b1113, #b71c1c);
        }

        .navbar-brand img {
          background: rgba(255, 255, 255, 0.15);
          padding: 3px;
        }

        .navbar-nav .nav-link {
          color: #fff !important;
          font-weight: 500;
          padding: 0.6rem 0.9rem;
          position: relative;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #ffeb3b, #ff9800);
          transition: width 0.3s ease;
        }

        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.active::after {
          width: 100%;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #ffeb3b !important;
        }

        .navbar-toggler {
          outline: none !important;
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .navbar-nav .nav-link {
            text-align: center;
            padding: 0.8rem;
          }

          .navbar-brand {
            font-size: 1rem;
          }

          .topbar {
            font-size: 0.85rem;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
