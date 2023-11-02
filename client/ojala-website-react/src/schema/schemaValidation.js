import * as yup from "yup";

const myEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// override the email method with your own logic or regex
yup.addMethod(yup.string, 'email', function validateEmail(message) {
	return this.matches(myEmailRegex, {
	  message,
	  name: 'email',
	  excludeEmptyString: true,
	});
  });

const schema = yup
	.object({
		firstName: yup.string().required("First name is required.").min(2, (min) => `Write at least ${min.min} characters.`).trim(),
		lastName: yup.string().required("Last name is required.").min(2, (min) => `Write at least ${min.min} characters.`).trim(),
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
		issue: yup.string().matches(/app-install|app-mistake|other/, {message:"Select an issue"}).required("Select an issue"),
	})
	.required();

export default schema;
