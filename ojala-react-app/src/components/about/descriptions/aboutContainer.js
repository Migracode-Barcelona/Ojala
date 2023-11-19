import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import Image from "react-bootstrap/Image";

function AboutContainer({ image, text, isImageFirst }) {
    const { t } = useTranslation();

    return (
        <Container fluid className="percent-85-height">
            <Row className="my-5 mx-5">
                {isImageFirst ? (
                    <Col xs={12} md={6} className="mb-3 text-center">
                        <Image src={image} fluid className="mx-auto w-50"/>
                    </Col>
                ) : (
                    <Col xs={12} md={6} className="mb-3 text-center d-flex align-items-center">
                        <h1>
                        {t(text)}
                        </h1>
                    </Col>
                )}

                {!isImageFirst ? (
                    <Col xs={12} md={6} className="mb-3 text-center">
                        <Image src={image} fluid className="mx-auto w-50"/>
                    </Col>
                ) : (
                    <Col xs={12} md={6} className="mb-3 text-center d-flex align-items-center">
                        <h1>
                        {t(text)}
                        </h1>
                    </Col>
                )}
            </Row>    
        </Container>
    )
}

export default AboutContainer;