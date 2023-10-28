import * as yup from "yup";

const schema = yup
	.object({
		firstName: yup.string().required("First name is required."),
		lastName: yup.string().required("Last name is required."),
		age: yup
			.number()
			.typeError("Age must be a number")
			.integer("Age must be an integer.")
			.min(18, "You must be 18 or older")
			.required("Age is required"),
		email: yup
			.string()
			.email("The email must be valid.")
			.required("An email is required."),
		select: yup.string().matches(/1|2|3/, {message:"Select an issue"}).required("Select an issue"),
	})
	.required();

export default schema;
