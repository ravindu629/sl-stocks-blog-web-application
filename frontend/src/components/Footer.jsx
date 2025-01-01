import { Link } from "react-router-dom";
import footerImage_1 from "../assets/images/blog/case-studies-1.jpg";
import footerImage_2 from "../assets/images/blog/case-studies-2.jpg";
import footerImage_3 from "../assets/images/blog/case-studies-3.jpg";
import footerImage_4 from "../assets/images/blog/case-studies-4.jpg";
import footerImage_5 from "../assets/images/blog/case-studies-5.jpg";
import footerImage_6 from "../assets/images/blog/case-studies-6.jpg";

const Footer = () => {
  return (
    <>
      <section class="instagram">
        <a href="#">
          {/* <i class="fa fa-instagram" aria-hidden="true"></i> */}

          <span>SL STOCKS</span>
        </a>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="instagram-item">
                <div class="instagram-item-thum">
                  <img
                    src={footerImage_1}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="instagram-item-thum">
                  <img
                    src={footerImage_2}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="instagram-item-thum">
                  <img
                    src={footerImage_3}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="instagram-item-thum">
                  <img
                    src={footerImage_4}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="instagram-item-thum">
                  <img
                    src={footerImage_5}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div class="instagram-item-thum">
                  <img
                    src={footerImage_6}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="footer-nav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Home{" "}
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      About{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="sociale-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                    </a>
                  </li>
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
                      <i class="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="copy-right">
                <p>
                  © Copyright <span id="copyrightYear"></span> - All Rights
                  Reserved by{" "}
                  <a href="" target="_blank">
                    SL STOCKS
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
