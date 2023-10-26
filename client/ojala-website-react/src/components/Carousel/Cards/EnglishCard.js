import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import user4 from "assets/English-Card.png";

function EnglishCard() {
    return (
        <Col xs={12} md={10}>
            <Card className="overflow-auto">
                <Ratio aspectRatio={150}>
                    <Card.Img src={user4} className="object-fit-cover" />
                </Ratio>
                <Card.ImgOverlay className="d-flex align-items-end">
                    <Container className="gray-transparent-background">
                        <Card.Title>English</Card.Title>
                        <Card.Text className="cards-text">
                            This language learning platform provides an accessible and effective way
                            for English speakers to acquire proficiency in Spanish, making the learning
                            process engaging and enjoyable.
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );  
};

export default EnglishCard;