import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import user1 from "assets/user1.jpg";
import user2 from "assets/user2.jpg";
import Ratio from "react-bootstrap/Ratio";

function Cards4() {
	return (
		<Container fluid>
			<hr></hr>
			<h1>Cards4</h1>
			<Row xs={1} md={2} className="g-4">

				<Col xs={12} md={6}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user2} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				<Col xs={12} md={6}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user1} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				<Col xs={12} md={6}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user1} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				<Col xs={12} md={6}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user2} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

			</Row>
		</Container>
	);
}

export default Cards4;
