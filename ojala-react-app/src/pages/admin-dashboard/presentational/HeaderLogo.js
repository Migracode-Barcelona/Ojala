import React from "react";
import ojalaLogo from "assets/ojala_logo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function HeaderLogo({ isAdmin }) {
	return (
		<Container className="header-logo-container my-1" fluid>
			<Container fluid>
				<Image
					className="header-logo"
					src={isAdmin ? ojalaLogo : "path/to/normal_logo.png"}
					fluid
				/>
				<span className="header-text">Welcome Back Admin!</span>
			</Container>
			<Container fluid>
				{isAdmin && (
					<Container className="search-bar-container">
						<InputGroup className="search-bar">
							<FormControl
								placeholder="Search"
								aria-label="Search"
								aria-describedby="basic-addon2"
								style={{ maxWidth: "200px" }}
							/>
							<Button variant="outline-secondary" id="button-addon2">
								Search
							</Button>
						</InputGroup>
					</Container>
				)}
			</Container>
		</Container>
	);
}

export default HeaderLogo;
