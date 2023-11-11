import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

function Description() {
	const { t } = useTranslation();
	return (
		<Container fluid className="description-full-height">
			<h1 className="display-1 my-4">{t('ojala')}</h1>
			<Row className="mt-4 mx-5">
				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-people-arrows icon-description" />
					<h2>{t('needed')}</h2>
					<h3 className="small">have faith</h3>
					<p className="small">
						{t('neededText')}
					</p>
				</Col>

				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-search-location icon-description" />
					<h2>{t('incontext')}</h2>
					<h3 className="small">have faithalot</h3>
					<p className="small">
						{t('incontextText')}
					</p>
				</Col>

				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-hands icon-description" />
					<h2>{t('inclusive')}</h2>
					<h3 className="small">wewill doit</h3>
					<p className="small">
						{t('inclusiveText')}
					</p>
				</Col>

				<Col xs={12} md={3} className="mb-3 text-center">
					<i className="fas fa-money-bill-alt icon-description" />
					<h2>{t('free')}</h2>
					<h3 className="small">letsgo</h3>
					<p className="small">
						{t('freeText')}
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Description;
