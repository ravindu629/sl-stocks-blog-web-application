import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="main-nav navbar navbar-expand-lg">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            class="logo-main"
            src={logo}
            alt="logo"
            style={{ width: "200px", height: "35px", objectFit: "cover" }}
          />
        </Link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#mainNav"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse nav-list" id="mainNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/latest"
                style={{
                  color: "#2A2E35",
                  fontSize: "1.1rem", // Increased font size
                  fontWeight: "bold", // Optional: makes the text bold
                  paddingTop: "20px",
                }}
              >
                Latest Trends{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category_1"
                style={{
                  color: "#3E4A5B",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Economy{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category_2"
                style={{
                  color: "#4C5567",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Markets{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category_3"
                style={{
                  color: "#5A6378",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Stocks{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category_4"
                style={{
                  color: "#6B7280",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                News{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/category_5"
                style={{
                  color: "#7D8495",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                Books{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: "#7D8495",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  paddingTop: "20px",
                }}
              >
                About Us{" "}
              </Link>
            </li>
          </ul>

          {/* <ul class="main-nav-social">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
