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

  const schema = (t) =>
  yup
    .object()
    .shape({
      firstName: yup
        .string()
        .required(t("fNameMsg"))
        .min(2, (min) => t("minChar", { min: min.min }))
        .trim(),
      lastName: yup
        .string()
        .required(t("lNameMsg"))
        .min(2, (min) => t("minChar", { min: min.min }))
        .trim(),
      age: yup
        .number()
        .typeError(t("ageMsg1"))
        .integer(t("ageMsg2"))
        .min(18, (min) => t("ageMsg3", { min: min.min }))
        .required(t("ageMsg4")),
      email: yup.string().email(t("emailMsg1")).required(t("emailMsg2")),
      issue: yup
        .string()
        .matches(/app-install|app-mistake|other/, {
          message: t("issueMsg")
        })
        .required(t("issueMsg"))
    })
    .required();

export default schema;
