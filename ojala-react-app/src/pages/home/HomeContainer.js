import React, { useRef } from "react";
import FeaturesLeft from "../../components/features-left/FeaturesLeft";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { Container } from "react-bootstrap";
import Description from "components/description/Description";
import Download from "components/download/Download";
import Carousel from "components/carousel/Carousel";
import Header from "components/header/Header";
import About from "components/about/About";

function HomeContainer() {
  const refDownload = useRef(null);

  const handleClickHeaderScrollToDownload = () => {
    refDownload.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container fluid className="px-0">
      <Container fluid className="full-height px-0">
        <Header />
        <Hero handleClickHeader={handleClickHeaderScrollToDownload} />
      </Container>
      <Description />
      <About />
      <FeaturesLeft />
      <Carousel />
      <Download refDownload={refDownload} />
      <Footer />
    </Container>
  );
}

export default HomeContainer;
