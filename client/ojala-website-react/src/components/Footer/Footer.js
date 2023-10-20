import React from "react";
// import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className="container-fluid bg-primary">
      <footer className="container-md  text-start text-white d-flex align-items-center justify-content-center py-5  w-75">
        <div className="row pt-5">
          <div className="col-lg  col-md-6 col-sm-6 col-6 ps-5">
            <h2>About us</h2>
            <ul className="list-unstyled py-2 list">
              <li>Courses</li>
              <li>Mission</li>
              <li>Approach</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col col-lg col-md-6 col-sm-6 col-6 ps-5">
            <h2>Social</h2>
            <ul className="list-unstyled py-2 list">
              <li>
                <a
                  href="https://www.facebook.com/ActionforEdu/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white link-underline "
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/action_for_education_spain/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white link-underline "
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/actionforeducation/about/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white link-underline "
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Action4Edu"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white link-underline "
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-lg col-md-6 col-sm-6  ps-5 pe-5">
            <h2>Download the App</h2>
            <ul className="list-unstyled py-2 list">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.actionforeducation.ojala&hl=es"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white link-underline "
                >
                  ¡Ojalá! for Android
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-lg col-md-6 col-sm-6  ps-5">
            <h2>Privacy and Terms</h2>
            <ul className="list-unstyled py-2 list">
              <li>Community guidelines</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Rights</li>
            </ul>
          </div>

          <div className="row pt-5">
            <div className="col text-center copyright pt-5">
              <i class="bi bi-c-circle">
                Copyright 2023 Ojalá Website. Migracode, Barcelona. All rights
                reserved.
              </i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
