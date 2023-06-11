import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import LookingForBlood from "./components/LookingForBlood";
import WantToDonateBlood from "./components/wantToDonateBlood";
import ContactUs from "./components/contact";
import Patients from "./components/patients";
import Donor from "./components/donor";
import Dashboard from "./components/Dashboard";
import LoginDonor from "./components/LoginDonor";
import Login from "./components/Login";


function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              <img src="https://www.clipartmax.com/png/middle/149-1497912_blood-donation-up-donor-darah-logo-png.png" style={{ width: "70px" }} alt="Blood Donation Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-menu collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/LookingForBlood">
                    Recipient
                  </Link>
                </li>
                <li
                  className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={handleDropdownToggle}
                >
                  <div className="nav-link dropdown-toggle">
                    Donate Blood
                  </div>
                  <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                    <Link className="dropdown-item" to="/wantToDonateBlood">
                      Register as Donor
                    </Link>
                    <Link className="dropdown-item" to="/Login">
                      Login as Donor
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/JoinUs">
                    Join Network
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/LookingForBlood" element={<Patients />} />
            <Route path="/wantToDonateBlood" element={<WantToDonateBlood />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Login" element={<LoginDonor />} />
          </Routes>

        </div>
      </header>
    </div>
  );
}

export default App;