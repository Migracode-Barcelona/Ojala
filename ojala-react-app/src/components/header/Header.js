import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import ojala_logo from "assets/ojala_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import cookies from "js-cookie";

const languages = [
	{
		code: 'ar',
		name: 'العربية',
		country_code: 'sa',
		dir: "rtl"
	},
	{
		code: 'en',
		name: 'English',
		country_code: 'gb',
		dir: "ltr"
	},
	{
		code: 'es',
		name: 'Castellano',
		country_code: 'es',
		dir: "ltr"
	}
]

function Header() {
	const currentLanguageCode = cookies.get('i18next') || 'en'
	const currentLanguage = languages.find(l => l.code === currentLanguageCode)
	let location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		document.body.dir = currentLanguage.dir || "ltr"
	}, [currentLanguage])
	
	return (
		<Container fluid className="my-1">
			<Row>
				
				<Col
					xs={4}
					md={2}
					xl={1}
					className="text-center d-flex align-self-center"
				>
					<Image className="header-logo" src={ojala_logo} fluid />
				</Col>

				<Col
					xs={8}
					md={10}
					xl={11}
					className="d-flex flex-wrap justify-content-end align-self-center"
				>
					<Button className="me-1">
						{location.pathname === "/" ? (
							<Link
								to={"/contact"}
								className="link-light link-underline-opacity-0"
							>
								{t('contact')}
							</Link>
						) : (
							<Link to={"/"} className="link-light link-underline-opacity-0">
								{t('home')}
							</Link>
						)}
					</Button>

					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							<i className="bi bi-translate icon-lg"></i>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{languages.map(({ code, name, country_code }) => (
								<Dropdown.Item
									key={country_code}
									onClick={() => i18next.changeLanguage(code)}
									disabled={code === currentLanguageCode}
								>
									{name}
								</Dropdown.Item>
							)
							)
							}
						</Dropdown.Menu>
					</Dropdown>

				</Col>

			</Row>
		</Container>
	);
}

export default Header;