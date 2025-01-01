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
            style={{ width: "200px", height: "60px", objectFit: "cover" }}
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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/latest" style={{ color: "#2A2E35" }}>
                Latest{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/category_1"
                style={{ color: "#3E4A5B" }}
              >
                Economic Trends{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/category_2"
                style={{ color: "#4C5567" }}
              >
                Global Markets{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/category_3"
                style={{ color: "#5A6378" }}
              >
                Stock Insights{" "}
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/category_4"
                style={{ color: "#6B7280" }}
              >
                Corporate News{" "}
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link"
                to="/category_5"
                style={{ color: "#7D8495" }}
              >
                Book Insights{" "}
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
