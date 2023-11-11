import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function ContactFormInput({
	md,
	label,
	type,
	name,
	values,
	handleChange,
	touched,
	errors,
}) {
	return (
		<Form.Group as={Col} md={md}>
			<Form.Label for={name}>{label}</Form.Label>
			<Form.Control
				id={name}
				type={type}
				name={name}
				value={values[name]}
				onChange={handleChange}
				isInvalid={touched[name] && !!errors[name]}
			/>
			<Form.Control.Feedback type="invalid">
				{errors[name]}
			</Form.Control.Feedback>
		</Form.Group>
	);
}

export default ContactFormInput;
