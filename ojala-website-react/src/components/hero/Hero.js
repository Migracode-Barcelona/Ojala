import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import heroImage from "assets/ojala-header-image.jpg";

function Hero({ handleClickHeader }) {
	return (
		<Container
			fluid
			className="d-flex flex-column align-items-center justify-content-center"
		>
			<Image src={heroImage} alt="Image" width={"50%"} fluid></Image>
			<h1 className="display-1 text-center">
				Use your <span className="orange-color">native language</span>
				<br></br>to learn <span className="orange-color">Spanish</span>
			</h1>
			<Button className="my-2" onClick={handleClickHeader}>
				Start Now
			</Button>
		</Container>
	);
}

export default Hero;
