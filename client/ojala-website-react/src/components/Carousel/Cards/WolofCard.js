import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import user3 from "assets/Wolof-Card.png";

function WolofCard() {
    return (
        <Col xs={12} md={10}>
            <Card className=" overflow-auto">
                <Ratio aspectRatio={150}>
                    <Card.Img src={user3} className="object-fit-cover" />
                </Ratio>
                <Card.ImgOverlay className="d-flex align-items-end">
                    <Container className="gray-transparent-background">
                        <Card.Title>Wolof</Card.Title>
                        <Card.Text className="cards-text">
                            Bi platforme bëgg nañu njëkk ci gëstu yomb, ak seen ak jëfandik,
                            bu jogeul ci jigéen wolof ci español, di wax nañu defar bi tey.
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );  
};

export default WolofCard;