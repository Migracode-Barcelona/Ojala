import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import user1 from "assets/Arabic-Card.png";

function ArabicCard() {
    return (
        <Col xs={12} md={10}>
            <Card className="overflow-auto language-cards">
                <Ratio aspectRatio={150}>
                    <Card.Img src={user1} className="object-fit-cover"/>
                </Ratio>
                <Card.ImgOverlay className="d-flex align-items-end">
                    <Container className="gray-transparent-background">
                        <Card.Title className="text-end">الفصحى</Card.Title>
                        <Card.Text className="cards-text text-end">
                            توفر هذه المنصة وسيلة متاحة وفعالة للمتحدثين باللغة العربية
                            لاكتساب اللغة الإسبانية بسهولة، مما يجعل عملية التعلم شيقة وممتعة
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );  
};

export default ArabicCard;