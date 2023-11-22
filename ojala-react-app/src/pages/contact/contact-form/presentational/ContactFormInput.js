import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function ContactFormInput({
	md,
	label,
	type,
	id,
	values,
	handleChange,
	touched,
	errors,
}) {
	// In the context of the Formik library, which is used in this project,
	// the name prop is crucial. It associates the input field with the corresponding value in the form's state. 
	return (
		<Form.Group as={Col} md={md}>
			<Form.Label htmlFor={id}>{label}</Form.Label>
			<Form.Control
				id={id}
				type={type}
				name={id}
				value={values[id]}
				onChange={handleChange}
				isInvalid={touched[id] && !!errors[id]}
			/>
			<Form.Control.Feedback type="invalid">
				{errors[id]}
			</Form.Control.Feedback>
		</Form.Group>
	);
}

export default ContactFormInput;
