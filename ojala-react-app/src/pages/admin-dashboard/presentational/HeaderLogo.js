import React from "react";
import ojalaLogo from "assets/ojala_logo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function HeaderLogo({ isAdmin, handleLogout }) {
	return (
		<Container className="header-logo-container my-1" fluid>
			<Container
				fluid
				className="d-flex align-items-center justify-content-between"
			>
				<div className="d-flex align-items-center">
					<div>
						<Image
							className="header-logo"
							src={isAdmin ? ojalaLogo : "path/to/normal_logo.png"}
							fluid
						/>
					</div>
					<div className="text-center ms-3">
						<span className="mx-2 header-app-name">Dashboard</span>
					</div>
				</div>
				{isAdmin && (
					<div className="d-flex align-items-center">
						<InputGroup className="search-bar">
							<FormControl
								name="search"
								placeholder="Search"
								aria-label="Search"
								className="rounded"
							/>
							<Button variant="primary" id="button-addon2" className="ms-3">
								Search
							</Button>
						</InputGroup>
						<Button variant="primary" onClick={handleLogout} className="ms-1">
							Logout
						</Button>
					</div>
				)}
			</Container>
		</Container>
	);
}

export default HeaderLogo;
