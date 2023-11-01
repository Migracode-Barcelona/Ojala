import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import user5 from "assets/French-Card.png";

function FrenchCard() {
    return (
        <Col xs={12} md={10}>
            <Card className=" overflow-auto">
                <Ratio aspectRatio={150}>
                    <Card.Img src={user5} className="object-fit-cover" />
                </Ratio>
                <Card.ImgOverlay className="d-flex align-items-end">
                    <Container className="gray-transparent-background">
                        <Card.Title>Français</Card.Title>
                        <Card.Text className="cards-text">
                            Cette plateforme offre une manière accessible et efficace aux locuteurs
                            francophones d'acquérir des compétences en espagnol, rendant le processus
                            d'apprentissage engageant et agréable.
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );  
};

export default FrenchCard;