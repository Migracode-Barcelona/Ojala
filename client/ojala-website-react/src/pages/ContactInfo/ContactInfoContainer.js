import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import schema from "schema/schemaValidation";
import Container from "react-bootstrap/Container";
import Header from "components/Header/Header";
import Image from "react-bootstrap/Image";
import heroImage from "assets/ojala-header-image.jpg";
import inputFieldData from "data/inputFieldData";
import ContactInfoInputField from "./presentational/ContactInfoInputField";

function ContactInfoContainer() {
	const { Formik } = formik;

	const handleSubmit = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<Container fluid className="px-0">
			<Header />

			<Container fluid className="my-2 w-50 text-center">
				<Image src={heroImage} alt="Image" width={"75%"} fluid></Image>
			</Container>

			<Container fluid className="w-75">
				<Formik
					validationSchema={schema}
					onSubmit={handleSubmit}
					initialValues={{
						firstName: "",
						lastName: "",
						age: "",
						email: "",
					}}
				>
					{({
						handleSubmit,
						handleChange,
						values,
						touched,
						errors,
					}) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Row className="mb-3 gy-2">
								{inputFieldData.map((input) => (
									<ContactInfoInputField
										md={input.md}
										label={input.label}
										type={input.type}
										name={input.name}
										values={values}
										handleChange={handleChange}
										touched={touched}
										errors={errors}
									/>
								))}

								<Form.Group as={Col} md="12" className="gy-4">
									<Form.Select
										name="issue"
										value={values.issue}
										onChange={handleChange}
										isInvalid={!touched.issue && !!errors.issue}
									>
										<option>Choose the type of issue</option>
										<option value="app-install">Installing the App</option>
										<option value="app-mistake">
											There is a mistake in the App
										</option>
										<option value="other">Other issue</option>
									</Form.Select>
									<Form.Control.Feedback type="invalid">
										{errors.select}
									</Form.Control.Feedback>
								</Form.Group>
							</Row>

							<Container fluid className="w-75 my-4 mb-5 text-center">
								<Button type="submit">Submit form</Button>
							</Container>
						</Form>
					)}
				</Formik>
			</Container>
		</Container>
	);
}

export default ContactInfoContainer;
