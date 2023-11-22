import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import schema from "schema/contact-form-schema-validation";
import inputFieldData from "data/input-field-data";
import ContactFormInput from "./presentational/ContactFormInput";
import { useTranslation } from "react-i18next";

function ContactFormContainer({ handleSubmit }) {
	const { t } = useTranslation();
	const { Formik } = formik;

	return (
		<Formik
			validationSchema={schema(t)}
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
						{inputFieldData.map(({id, md, label, type}) => (
							<ContactFormInput
								key={id}
								md={md}
								label={t(label)}
								type={type}
								id={id}
								values={values}
								handleChange={handleChange}
								touched={touched}
								errors={errors}
							/>
						))}

						<Form.Group as={Col} md="12" className="gy-4">
							<Form.Label htmlFor="issue">{t("issue")}</Form.Label>
							<Form.Select
								id="issue"
								name="issue"
								value={values.issue}
								onChange={handleChange}
								isInvalid={!touched.issue && !!errors.issue}
							>
								<option >{t("issueType")}</option>
								<option value="app-install">{t("installing")}</option>
								<option value="app-mistake">{t("mistake")}</option>
								<option value="other">{t("other")}</option>
							</Form.Select>
							<Form.Control.Feedback type="invalid">
								{errors.select}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>

					<Container fluid className="w-75 my-4 mb-5 text-center">
						<Button type="submit">{t("sbmtBtn")}</Button>
					</Container>
				</Form>
			)}
		</Formik>
	);
}

export default ContactFormContainer;
