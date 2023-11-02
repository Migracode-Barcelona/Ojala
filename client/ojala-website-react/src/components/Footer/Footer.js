import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';

function Footer() {

	const classesLinkFooter = "link-light link-underline-opacity-0 link-underline-opacity-75-hover link-offset-3-hover";
	const classesUlFooter = "list-unstyled py-2 list";

	return (
		<Container
			fluid
			className="bg-primary text-white d-flex align-items-center justify-content-center"
		>
			<footer className="w-75 pt-4">
				<Row>
					<Col>
						<h4>About us</h4>
						<ul className={classesUlFooter}>
							<li>Courses</li>
							<li>Mission</li>
							<li>Approach</li>
							<li><Link to={"/contact"} className={classesLinkFooter}>Contact Us</Link></li>
						</ul>
					</Col>

					<Col>
						<h4>Social</h4>
						<ul className={classesUlFooter}>
							<li>
								<a
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
							<i className="bi bi-c-circle">
								 Copyright 2023 Ojalá Website. Migracode, Barcelona. All rights
								reserved.
							</i>
						</Col>
					</Row>
					
				</Row>
			</footer>
		</Container>
	);
}

export default Footer;
