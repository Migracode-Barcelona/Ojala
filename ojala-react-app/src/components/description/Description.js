import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function Description() {
	const { t } = useTranslation();
	return (
		<Container fluid className="percent-85-height">
			<h1 className="display-1 my-1">{t("ojala")}</h1>
			<Row className="mt-1 mx-2 gx-5 gy-5">
				<Col xs={12} md={6} xl={3} className="text-center">
					<Card className="border border-secondary shadow-sm p-3 h-100">
						<i className="fas fa-people-arrows icon-description" />
						<h2>{t("needed")}</h2>
						<h3 className="small">havefaith</h3>
						<p className="w-75 mx-auto">{t("neededText")}</p>
					</Card>
				</Col>

				<Col xs={12} md={6} xl={3} className="text-center">
					<Card className="border border-secondary shadow-sm p-3 h-100">
						<i className="fas fa-search-location icon-description" />
						<h2>{t("incontext")}</h2>
						<h3 className="small">hav sfaithalot</h3>
						<p className="w-75 mx-auto">{t("incontextText")}</p>
					</Card>
				</Col>

				<Col xs={12} md={6} xl={3} className="text-center">
					<Card className="border border-secondary shadow-sm p-3 h-100">
						<i className="fas fa-hands icon-description" />
						<h2>{t("inclusive")}</h2>
						<h3 className="small">wewilldoit</h3>
						<p className="w-75 mx-auto">{t("inclusiveText")}</p>
					</Card>
				</Col>

				<Col xs={12} md={6} xl={3} className="text-center">
					<Card className="border border-secondary shadow-sm p-3 h-100">
						<i className="fas fa-money-bill-alt icon-description" />
						<h2>{t("free")}</h2>
						<h3 className="small">letsgo</h3>
						<p className="w-75 mx-auto">{t("freeText")}</p>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Description;
