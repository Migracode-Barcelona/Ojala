import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import heroImage from "assets/ojala-header-image.jpg";
import { useTranslation } from "react-i18next";

function Hero({ handleClickHeader }) {
	const { t } = useTranslation();

	return (
		<Container
			fluid
			className="d-flex flex-column align-items-center justify-content-center"
		>
			<Image src={heroImage} alt="Image" width={"50%"} fluid></Image>
			<h1 className="display-1 text-center">
				{t('heroText1')} <span className="orange-color">{t('heroText2')}</span>
				<br></br>{t('heroText3')} <span className="orange-color">{t('heroText4')}</span>
			</h1>
			<Button className="my-2" onClick={handleClickHeader}>
				{t('start')}
			</Button>
		</Container>
	);
}

export default Hero;
