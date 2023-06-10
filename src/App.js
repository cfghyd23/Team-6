import React from "react";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import LookingForBlood from "./components/LookingForBlood";
import WantToDonateBlood from "./components/wantToDonateBlood";
import foot1 from './assets/foot2.jpeg'
import foot3 from './assets/foot3.png'
import foot5 from './assets/foot5.png'
import './App.css';
import ContactUs from "./components/contact";
import Patients from "./components/patients";
import Donor from "./components/donor";

import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useParams
} from "react-router-dom";
function App() {
  return (
    <div>
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
                    Blood Warriors
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/LookingForBlood" element={<Patients />} />
            <Route path="/wantToDonateBlood" element={<Donor />} />
            <Route path="/JoinUs" element={<JoinUs />} />
          </Routes>

        </div>
      </header>
      
    </div>
    </div>
    
  );
}

export default App;
