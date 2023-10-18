import React from "react";
import FeaturesLeft from "../../components/FeaturesLeft/FeaturesLeft";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Container } from "react-bootstrap";
import Download from "components/Download/Download";
import Cards from "components/Cards/Cards";
import Header from "components/Header/Header";
function HomeContainer() {
	return (
		<Container fluid>
			<Header/>
			<Hero />
			<FeaturesLeft />
            <Cards/>
            <Download/>
			<Footer />
		</Container>
	);
}

export default HomeContainer;
