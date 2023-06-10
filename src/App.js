

import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import LookingForBlood from "./components/LookingForBlood";
import wantToDonateBlood from "./components/wantToDonateBlood";
import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useParams
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="">
              <img src="" style={{width:"100px"}}/>
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
      
                <li className="nav-item ">
                  <Link className="nav-link active" to="">
                    About Us
                  </Link>
                </li>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="LookingForBlood">
                      Looking For Blood
                    </Link>
                  </li>
                </div>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="wantToDonateBlood">
                      Want To Donate Blood
                    </Link>
                  </li>
                </div>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="JoinUs">
                      Join Us
                    </Link>
                  </li>
                </div>
                
                
              </ul>
            </div>
          </nav>
          
    
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/LookingForBlood" element={<LookingForBlood/>} />
            <Route path="/wantToDonateBlood" element={<wantToDonateBlood/>} />
            <Route path="/JoinUs" element={ <JoinUs/>} />
            

          </Routes>
   
        </div>
      </header>

    </div>
  );
}

export default App;
