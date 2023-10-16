import React from "react";
import FeaturesLeft from "../../components/FeaturesLeft/FeaturesLeft";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import { Container } from "react-bootstrap";
import Download from "components/Download/Download";
import Cards4 from "components/Cards4/Cards4";
import Header from "components/Header/Header";
function HomeContainer() {
	return (
		<Container fluid>
			<Header/>
			<Hero />
			<FeaturesLeft />
            <Cards4/>
            <Download/>
			<Footer />
		</Container>
	);
}

export default HomeContainer;
