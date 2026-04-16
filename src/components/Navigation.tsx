import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/photos/logo1.png";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function Navigation() {
  return (
    <BrowserRouter>
      <nav>
        <div className="d-flex mb-4" style={{ backgroundColor: "" }}>
          <div className="w-50 mt-2">
            <div className="d-flex justify-content-center">
              <img
                className="me-2"
                src={logo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "",
                }}
              />
              <h1>Onyx</h1>
            </div>
          </div>
          <div className="d-flex w-50 ">
            <div className="nav_elements me-3 btn btn-lg ">
              <Link to="/" className="text-decoration-none text-center">
                Home
              </Link>
            </div>
            <div className="nav_elements me-3 btn btn-lg">
              <Link to="/about" className="text-decoration-none">
                About
              </Link>
            </div>
            <div className=" nav_elements me-3 btn btn-lg">
              <Link to="/projects" className="text-decoration-none">
                Projects
              </Link>
            </div>
            <div className=" nav_elements me-3 btn btn-lg">
              <Link to="/expertise" className="text-decoration-none">
                Expertise
              </Link>
            </div>
            <div className=" nav_elements me-3 btn btn-lg">
              <Link to="/contact" className="text-decoration-none">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
