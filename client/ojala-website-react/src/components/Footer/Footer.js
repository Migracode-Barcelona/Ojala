import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
	return (
		<Container
			fluid
			className="bg-primary text-white d-flex align-items-center justify-content-center"
		>
			<footer className="w-75 pt-4">
				<Row>
					<Col>
						<h4>About us</h4>
						<ul className="list-unstyled py-2 list">
							<li>Courses</li>
							<li>Mission</li>
							<li>Approach</li>
							<li>Contact us</li>
						</ul>
					</Col>

					<Col>
						<h4>Social</h4>
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
					</Col>

					<Col>
						<h4>Download</h4>
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
					</Col>

					<Col>
						<h4>Privacy and Terms</h4>
						<ul className="list-unstyled py-2 list">
							<li>Community guidelines</li>
							<li>Terms</li>
							<li>Privacy</li>
							<li>Rights</li>
						</ul>
					</Col>

					<Row>
						<Col className="text-center copyright py-3">
							<i class="bi bi-c-circle">
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
