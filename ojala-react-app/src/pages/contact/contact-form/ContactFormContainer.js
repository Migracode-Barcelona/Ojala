import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import schema from "schema/schema-validation";
import inputFieldData from "data/input-field-data";
import ContactFormInput from "./presentational/ContactFormInput";

function ContactFormContainer({handleSubmit}) {

    const { Formik } = formik;

	return (
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
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<Form role="form" noValidate onSubmit={handleSubmit}>
					<Row className="mb-3 gy-2">
						{inputFieldData.map((input) => (
							<ContactFormInput
								key={input.id}
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
							<Form.Label htmlFor="issue">"Issue"</Form.Label>
							<Form.Select
								id="issue"
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
						<Button name="submit" type="submit">
							Submit form
						</Button>
					</Container>
				</Form>
			)}
		</Formik>
	);
}

export default ContactFormContainer;
