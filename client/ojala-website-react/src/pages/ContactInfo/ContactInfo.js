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

function ContactInfo() {
	const { Formik } = formik;
	let wasSubmitBtnClicked = false;

	return (
		<Container fluid>
			<Header />

			<Container fluid className="my-4 w-75 text-center">
				<Image src={heroImage} alt="Image" width={"75%"} fluid></Image>
			</Container>

			<Container fluid className="w-75">
				<Formik
					validationSchema={schema}
					onSubmit={console.log}
					initialValues={{
						firstName: "",
						lastName: "",
						age: "",
						email: "",
					}}
				>
					{({ handleSubmit, handleChange, values, touched, errors }) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Row className="mb-3 gy-2">
								<Form.Group as={Col} md="6">
									<Form.Label>First name</Form.Label>
									<Form.Control
										type="text"
										name="firstName"
										value={values.firstName}
										onChange={handleChange}
										isInvalid={touched.firstName && !!errors.firstName}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.firstName}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md="6">
									<Form.Label>Last name</Form.Label>

									<Form.Control
										type="text"
										name="lastName"
										value={values.lastName}
										onChange={handleChange}
										isInvalid={touched.lastName && !!errors.lastName}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.lastName}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md="4">
									<Form.Label>Age</Form.Label>

									<Form.Control
										type="number"
										name="age"
										value={values.age}
										onChange={handleChange}
										isInvalid={touched.age && !!errors.age}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.age}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md="8">
									<Form.Label>Email</Form.Label>

									<Form.Control
										type="text"
										name="email"
										value={values.email}
										onChange={handleChange}
										isInvalid={touched.email && !!errors.email}
									/>
									<Form.Control.Feedback type="invalid">
										{errors.email}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md="12" className="gy-4">
									<Form.Select
										name="select"
										value={values.select}
										onChange={handleChange}
										isInvalid={wasSubmitBtnClicked && !!errors.select}
									>
										<option>Choose the type of issue</option>
										<option value="1">Installing the App</option>
										<option value="2">There is a mistake in the App</option>
										<option value="3">Other issue</option>
									</Form.Select>
									<Form.Control.Feedback type="invalid">
										{errors.select}
									</Form.Control.Feedback>
								</Form.Group>
							</Row>

							<Container fluid className="w-75 my-3 text-center">
								<Button onClick={() => wasSubmitBtnClicked=true} type="submit">
									Submit form
								</Button>
							</Container>
						</Form>
					)}
				</Formik>
			</Container>
		</Container>
	);
}

export default ContactInfo;
