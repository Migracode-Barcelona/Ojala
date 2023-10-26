import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import user2 from "assets/Darija-Card.png";

function DarijaCard() {
    return (
        <Col xs={12} md={10}>
            <Card className="overflow-auto">
                <Ratio aspectRatio={150}>
                    <Card.Img src={user2} className="object-fit-cover" />
                </Ratio>
                <Card.ImgOverlay className="d-flex align-items-end">
                    <Container className="gray-transparent-background">
                        <Card.Title className="text-end">داريجة</Card.Title>
                        <Card.Text className="cards-text text-end">
                            هاد المنصة كتوفر وسيلة متاحة وفعالة للناس لي كايتكلمو
                            الدارجة باش يتعلمو اللغة الإسبانية بسهولة،
                            وكتخلي عملية التعلم ممتعة
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );  
};

export default DarijaCard;