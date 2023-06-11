import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import LookingForBlood from "./components/LookingForBlood";
import WantToDonateBlood from "./components/wantToDonateBlood";
import './App.css';

function App() {
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
                <li className="nav-item">
                  <Link className="nav-link active" to="/wantToDonateBlood">
                    Donate Blood
                  </Link>
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
            <Route path="/LookingForBlood" element={<LookingForBlood />} />
            <Route path="/wantToDonateBlood" element={<WantToDonateBlood />} />
            <Route path="/JoinUs" element={<JoinUs />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
