/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import sound from "assets/yery-sorry-baby.m4a";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const classesLinkFooter =
    "link-light link-underline-opacity-0 link-underline-opacity-75-hover link-offset-3-hover";
  const classesUlFooter = "list-unstyled py-2 list";

  let audio = new Audio(sound);
  const start = () => {
    audio.play();
  };

  return (
    <Container
      fluid
      className="bg-primary text-white d-flex align-items-center justify-content-center"
    >
      <footer
        role="footer"
        style={{ backgroundColor: "#007bb6" }}
        title="footer"
        className="w-75 pt-4"
      >
        <Row>
          <Col>
            <h4>{t("aboutUs")}</h4>
            <ul className={classesUlFooter}>
              <li>{t("courses")}</li>
              <li>{t("mission")}</li>
              <li>{t("approach")}</li>
              <li>
                <Link to={"/contact"} className={classesLinkFooter}>
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>{t("social")}</h4>
            <ul className={classesUlFooter}>
              <li>
                <a
                  title="social media"
                  href="https://www.facebook.com/ActionforEdu/"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  title="social media"
                  href="https://www.instagram.com/action_for_education_spain/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  title="social media"
                  href="https://www.linkedin.com/company/actionforeducation/about/"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  title="social media"
                  href="https://twitter.com/Action4Edu"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>{t("download")}</h4>
            <ul className={classesUlFooter}>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.actionforeducation.ojala&hl=es"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  {t("getNowText")}
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>{t("privacyAndTerms")}</h4>
            <ul className={classesUlFooter}>
              <li>{t("guidelines")}</li>
              <li>{t("terms")}</li>
              <li>{t("privacy")}</li>
              <li>{t("rights")}</li>
            </ul>
          </Col>

          <Row>
            <Col className="text-center copyright py-3">
              <i onClick={start} className="fa-solid fa-copyright" />
              <span>
                {" "}
                Copyright 2023 Ojalá Website. Migracode, Barcelona. All rights
                reserved.
              </span>
            </Col>
          </Row>
        </Row>
      </footer>
    </Container>
  );
}

{
  /* return (
    <Container
      fluid
      className="bg-primary text-white d-flex align-items-center justify-content-center"
    >
      <footer
        role="footer"
        style={{ backgroundColor: "#007bb6" }}
        title="footer tag exists"
        className="w-75 pt-4"
      >
        <Row>
          <Col>
            <h4>About us</h4>
            <ul className={classesUlFooter}>
              <li>Courses</li>
              <li>Mission</li>
              <li>Approach</li>
              <li>
                <Link to={"/contact"} className={classesLinkFooter}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>Social</h4>
            <ul className={classesUlFooter}>
              <li>
                <a
                  title="social media"
                  href="https://www.facebook.com/ActionforEdu/"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  title="social media"
                  href="https://www.instagram.com/action_for_education_spain/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/actionforeducation/about/"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  title="social media"
                  href="https://twitter.com/Action4Edu"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>Download</h4>
            <ul className={classesUlFooter}>
              <li>
                <a
                  title="social media"
                  href="https://play.google.com/store/apps/details?id=com.actionforeducation.ojala&hl=es"
                  rel="noreferrer"
                  target="_blank"
                  className={classesLinkFooter}
                >
                  ¡Ojalá! for Android
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <h4>Privacy and Terms</h4>
            <ul className={classesUlFooter}>
              <li>Community guidelines</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Rights</li>
            </ul>
          </Col>

          <Row>
            <Col className="text-center copyright py-3">
              <i onClick={start} className="fa-solid fa-copyright" />
              <span>
                {" "}
                Copyright 2023 Ojalá Website. Migracode, Barcelona. All rights
                reserved.
              </span>
            </Col>
          </Row>
        </Row>
      </footer>
    </Container>
  );
} */
}

export default Footer;
