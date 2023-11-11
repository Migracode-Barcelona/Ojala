import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactFormContainer from "./ContactFormContainer";
import postContactForm from "services/contact-form-service";

jest.mock("services/contact-form-service");

describe("ContactFormContainer", () => {
	test("submits the form correctly", async () => {
    const handleSubmit = jest.fn()
		render(<ContactFormContainer onSubmit={handleSubmit}/>);
    const user = userEvent.setup()

    await user.type(screen.getByRole('textbox', {name: /first name/i}), 'Steve')
    await user.type(screen.getByRole('textbox', {name: /last name/i}), 'Jobs')
    await user.type(screen.getByRole('spinbutton', {name: /age/i}), "19")
    await user.type(screen.getByRole('textbox', {name: /email/i}), 'steve@apple.com')
    await user.type(screen.getByRole('combobox', {name: /issue/i}), 'app-install')
		// Use userEvent to select an option
		// await user.selectOptions(issueSelect, "app-install");

		// Trigger form submission
		await user.click(screen.getByRole('button', {name: /submit/i}))

		// expect(issueSelect).toHaveValue("app-install");
		// Assert that the postContactForm function was called with the correct values

		await waitFor(() =>
			expect(handleSubmit).toHaveBeenCalledWith({
				firstName: "Steve",
				lastName: "Jobs",
				age: 19,
				email: "steve@apple.com",
				issue: "app-install",
			})
		);
	});
});
