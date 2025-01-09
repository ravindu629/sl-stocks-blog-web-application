import React from "react";
import blob1 from "../assets/images/about/blob1.svg";
import blob2 from "../assets/images/about/blob2.svg";
import banner from "../assets/images/about/about.jpg";
import thilki from "../assets/images/about/thilki.jpg";

export default function About() {
  return (
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="about-me">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={thilki}
                  alt="image"
                  style={{
                    borderRadius: "50%", // Makes the image round
                    width: "150px", // Adjust size as needed
                    height: "150px", // Adjust size as needed
                  }}
                />
                <h3>Hi I'm Thilki Wijerathne</h3>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. , consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo{" "}
              </p>
              <div class="banner">
                <div class="about-shape-right-top">
                  <img src={blob1} alt="svg" />
                </div>
                <div class="about-shape-left-bottom">
                  <img src={blob2} alt="svg" />
                </div>
                <img src={banner} alt="banner" />
              </div>
              <h3>Hey there, what’s up?</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. <br /> <br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet. consetetur sadipscing elitr, sed diam nonumy.
              </p>
              <h3>Contact Us</h3>
              <ul class="soicel-icon">
                <li>
                  {" "}
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
