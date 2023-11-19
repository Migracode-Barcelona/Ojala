import React from "react";
import Container from "react-bootstrap/Container";
import AboutContainer from "./descriptions/aboutContainer";
import aboutData from "./descriptions/aboutData";

function About() {
    let isImageFirst = true;
    return (
        <Container fluid className="percent-85-height">
            {aboutData.map((card) => {
                const currentProps = {
                    key: card.id,
                    image: card.image,
                    text: card.text,
                    isImageFirst: isImageFirst,
                };

                isImageFirst = !isImageFirst;

                return <AboutContainer {...currentProps} />;
            })}
        </Container>
    )
}

export default About