import React from "react";

function Footer() {
  return (
    <footer class="footer-area">
      <div class="footer-top bg-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footer-widget footer-logo">
                <img src="assets/images/logo2.png" alt="" />
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
                <ul class="socil-icon d-flex">
                  <li>
                    <i class="fa fa-facebook"></i>
                  </li>
                  <li>
                    <i class="fa fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa fa-linkedin"></i>
                  </li>
                  <li>
                    <i class="fa fa-google-plus"></i>
                  </li>
                  <li>
                    <i class="fa fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footer-widget footer-menu">
                <h2>Spacial Menu</h2>
                <ul>
                  <li>My Account</li>
                  <li>Checkout</li>
                  <li>Help</li>
                  <li>Support</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footer-widget footer-contact">
                <h2>Contact us</h2>
                <ul>
                  <li>
                    <i class="fa fa-map-marker"></i>House No. 09 , Road No.25
                    Dhaka,Bangladesh{" "}
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>+1(888)234-56789{" "}
                    <span>+1(888)234-56789</span>{" "}
                  </li>
                  <li>
                    <i class="fa fa-envelope-o"></i>youremail@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footer-widget footer-contact">
                <h2>Join to Newsletter</h2>
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from
                </p>
                <form class="sform">
                  <div class="form_msg">
                    <label class="mt10" for="mc-email"></label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                  <button type="submit" name="submit" id="subscribe-btn">
                    <i class="fa fa-long-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-buttom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12">
              <p>&copy;2018 Your Website Name All Right Reserved</p>
            </div>
            <div class="col-md-6 col-12">
              <ul class="d-flex">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
