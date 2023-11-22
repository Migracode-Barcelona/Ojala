import Container from "react-bootstrap/Container";
import Header from "components/header/Header";
import Image from "react-bootstrap/Image";
import formCover from "assets/form-cover.png";
import postContactForm from "services/contact-form-service";
import ContactFormContainer from "./contact-form/ContactFormContainer";

function ContactPageContainer() {
	const handleSubmit = (values) => {
		postContactForm(values);
	};

	return (
		<Container fluid className="px-0">
			<Header />

			<Container fluid className="my-4 w-75 text-center">
				<Image src={formCover} alt="Image" fluid></Image>
			</Container>

			<Container fluid className="w-75">
				<ContactFormContainer handleSubmit={handleSubmit}/>
			</Container>

		</Container>
	);
}

export default ContactPageContainer;
