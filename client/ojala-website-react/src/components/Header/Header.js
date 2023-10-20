import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ojala_logo from "assets/ojala_logo.png";

function Header() {
	/* const [button1Clicked, setButton1Clicked] = useState(false);
	const [button2Clicked, setButton2Clicked] = useState(false);

	const handleButton1Click = () => {
		setButton1Clicked(!button1Clicked);
	};

	const handleButton2Click = () => {
		setButton2Clicked(!button2Clicked);
	};

	<Button
		variant="primary"
		onClick={handleButton1Click}
		style={{
			backgroundColor: button1Clicked ? "red" : "",
			color: button1Clicked ? "white" : "",
			transition: "0.8s",
			borderRadius: "5px",
			margin: "5px",
		}}
	></Button>; */

	return (
		
		<Container fluid className="my-2">
			<Row>
				<Col xs={4} md={2}>
					<Container fluid className="text-center">
						<Image width={"60%"} src={ojala_logo} fluid />
					</Container>
				</Col>

				<Col
					xs={8}
					md={10}
					className="d-flex flex-wrap justify-content-end align-self-center"
				>
					<p className="mx-3 my-auto">لغة الصفحة</p>
					<Button>عربي</Button>
					<div className="mx-3"></div>
					<p className="mx-3 my-auto">Idioma de la página</p>
					<Button className="me-4">Castellano</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
