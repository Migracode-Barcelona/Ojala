import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ratio from "react-bootstrap/Ratio";
import user1 from "assets/Arabic-Card.png";
import user2 from "assets/Darija-Card.png";
import user3 from "assets/English-Card.png";
import user4 from "assets/French-Card.png";
import user5 from "assets/Spanish-Card.png";
import user6 from "assets/Wolof-Card.png";

function Cards() {
	return (
		<Container fluid>
			<hr></hr>
			<h1>Cards</h1>
			<Row xs={1} md={2} className="g-4">

				<Col xs={12} md={4}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user1} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container className="gray-transparent-background">
								<Card.Title className="rtl-text">الفصحى</Card.Title>
								<Card.Text className="rtl-text">
								توفر هذه المنصة وسيلة متاحة وفعالة للمتحدثين باللغة العربية
								لاكتساب اللغة الإسبانية بسهولة، مما يجعل عملية التعلم شيقة وممتعة
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				<Col xs={12} md={4}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user2} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container className="gray-transparent-background">
								<Card.Title className="rtl-text">داريجة</Card.Title>
								<Card.Text className="rtl-text">
								هاد المنصة كتوفر وسيلة متاحة وفعالة للناس لي كايتكلمو
								الدارجة باش يتعلمو اللغة الإسبانية بسهولة،
								وكتخلي عملية التعلم ممتعة
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				<Col xs={12} md={4}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user3} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container className="gray-transparent-background">
								<Card.Title>English</Card.Title>
								<Card.Text>
								This language learning platform provides an accessible and effective way
								for English speakers to acquire proficiency in Spanish, making the learning 
								process engaging and enjoyable.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				<Col xs={12} md={4}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user4} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container className="gray-transparent-background">
								<Card.Title>Français</Card.Title>
								<Card.Text>
								Cette plateforme offre une manière accessible et efficace aux locuteurs 
								francophones d'acquérir des compétences en espagnol, rendant le processus 
								d'apprentissage engageant et agréable.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

				

				<Col xs={12} md={4}>
					<Card className="bg-dark text-white overflow-auto">
						<Ratio aspectRatio={130}>
							<Card.Img src={user6} className="object-fit-cover" />
						</Ratio>
						<Card.ImgOverlay className="d-flex align-items-end">
							<Container className="gray-transparent-background">
								<Card.Title>Wolof</Card.Title>
								<Card.Text>
								Bi platforme bëgg nañu njëkk ci gëstu yomb, ak seen ak jëfandik,
								bu jogeul ci jigéen wolof ci español, di wax nañu defar bi tey.
								</Card.Text>
							</Container>
						</Card.ImgOverlay>
					</Card>
				</Col>

			</Row>
		</Container>
	);
}

export default Cards;
