import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";

function LanguageCard(props) {
    return (
        <Col xs={12} md={10}>
            <Card className="overflow-auto">
                <Ratio aspectRatio={150}>
                    <Card.Img src={props.image} className="object-fit-cover" />
                </Ratio>
                <Card.ImgOverlay className="d-flex align-items-end">
                    <Container className="gray-transparent-background">
                        <Card.Title className="text-end">{props.title}</Card.Title>
                        <Card.Text className="cards-text text-end">{props.text}</Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default LanguageCard;