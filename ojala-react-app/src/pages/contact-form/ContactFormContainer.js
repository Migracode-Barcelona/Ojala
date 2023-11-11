import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import schema from "schema/schema-validation";
import Container from "react-bootstrap/Container";
import Header from "components/header/Header";
import Image from "react-bootstrap/Image";
import formCover from "assets/form-cover.png";
import inputFieldData from "data/input-field-data";
import ContactFormInput from "./presentational/ContactFormInput";
import postContactForm from "services/contact-form-service";
import { useTranslation } from "react-i18next";

function ContactFormContainer() {
	const { t } = useTranslation();
	const { Formik } = formik;

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
						<Form noValidate onSubmit={handleSubmit}>
							<Row className="mb-3 gy-2">

								{inputFieldData.map((input) => (
									<ContactFormInput
										key={input.id}
										md={input.md}
										label={t(input.label)}
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
										<option>{t('issueType')}</option>
										<option value="app-install">{t('installing')}</option>
										<option value="app-mistake">{t('mistake')}</option>
										<option value="other">{t('other')}</option>
									</Form.Select>
									<Form.Control.Feedback type="invalid">
										{errors.select}
									</Form.Control.Feedback>
								</Form.Group>

							</Row>

							<Container fluid className="w-75 my-4 mb-5 text-center">
								<Button type="submit">{t('sbmtBtn')}</Button>
							</Container>

						</Form>
					)}
				</Formik>
			</Container>
			
		</Container>
	);
}

export default ContactFormContainer;
