import * as yup from "yup";

const schema = yup.object({
	email: yup.string().required("Email is required"),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters")
		.required("Password is required"),
});

export default schema;
