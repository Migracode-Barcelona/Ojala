import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import Image from "react-bootstrap/Image";
import { useInView } from "react-intersection-observer";

function AboutContainer({ image, text, isImageFirst }) {
    const { t } = useTranslation();
    const animations = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            animations.start("visible");
        }
    }, [animations, inView]);

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const animationProps = {
        ref,
        initial: "hidden",
        animate: animations,
        variants: fadeInUpVariants,
        transition: { duration: 1 },
    };

    return (
        <Container fluid className="percent-85-height">
            <Row className="my-5 mx-5">
                {isImageFirst ? (
                    <Col xs={12} md={6} className="mb-3 text-center">
                        <motion.div {...animationProps}>
                            <Image src={image} fluid className="mx-auto w-50" />
                        </motion.div>
                    </Col>
                ) : (
                    <Col xs={12} md={6} className="mb-3 text-center d-flex align-items-center">
                        <motion.div {...animationProps}>
                            <h1>{t(text)}</h1>
                        </motion.div>
                    </Col>
                )}

                {!isImageFirst ? (
                    <Col xs={12} md={6} className="mb-3 text-center">
                        <motion.div {...animationProps}>
                            <Image src={image} fluid className="mx-auto w-50" />
                        </motion.div>
                    </Col>
                ) : (
                    <Col xs={12} md={6} className="mb-3 text-center d-flex align-items-center">
                        <motion.div {...animationProps}>
                            <h1>{t(text)}</h1>
                        </motion.div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default AboutContainer;