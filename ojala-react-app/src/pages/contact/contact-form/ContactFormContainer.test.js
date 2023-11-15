import React from "react";
import { render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactFormContainer from "./ContactFormContainer";
import { cleanup } from '@testing-library/react';

afterEach(() => {
	jest.clearAllMocks();
	cleanup();
  });

describe("ContactFormContainer", () => {
	
	test("should render the form with all expected fields", () => {
		render(<ContactFormContainer />);

		const form = screen.getByRole("form");
		expect(form).toBeInTheDocument();

		const firstNameInput = screen.getByLabelText(/first name/i);
		expect(firstNameInput).toBeInTheDocument();

		const lastNameInput = screen.getByLabelText(/last name/i);
		expect(lastNameInput).toBeInTheDocument();

		const ageInput = screen.getByLabelText(/age/i);
		expect(ageInput).toBeInTheDocument();

		const emailInput = screen.getByLabelText(/email/i);
		expect(emailInput).toBeInTheDocument();

		const issueSelect = screen.getByRole("combobox", { name: /issue/i });
		expect(issueSelect).toBeInTheDocument();

		const submitButton = screen.getByRole("button", { name: /submit/i });
		expect(submitButton).toBeInTheDocument();
	});

	test("should allow the user to enter text into the input fields while the input fields are correctly updated with the typed values", async () => {
		const user = userEvent.setup();
		render(<ContactFormContainer />);

		const firstNameInput = screen.getByLabelText(/first name/i);
		await user.type(firstNameInput, "Steve");
		expect(firstNameInput.value).toBe("Steve");

		const lastNameInput = screen.getByLabelText(/last name/i);
		await user.type(lastNameInput, "Jobs");
		expect(lastNameInput.value).toBe("Jobs");

		const ageInput = screen.getByLabelText(/age/i);
		await user.type(ageInput, "32");
		expect(ageInput.value).toBe("32");

		const emailInput = screen.getByLabelText(/email/i);
		await user.type(emailInput, "steve@cloud.com");
		expect(emailInput.value).toBe("steve@cloud.com");
	});
	
	test("should show error messages for invalid inputs", async () => {
		const user = userEvent.setup();
		render(<ContactFormContainer />);

		const fields = [
			{
				label: /first name/i,
				value: "a",
				errorMessage: /First name is required./i,
			},
			{
				label: /email/i,
				value: "notAnEmail",
				errorMessage: /An email is required./i,
			},
			// Add more fields here...
		];

		const errorChecks = fields.map(async ({ label, value, errorMessage }) => {
			const input = screen.getByLabelText(label);
			user.type(input, value);

			const submitButton = screen.getByRole("button", { name: /submit/i });
			await user.click(submitButton);

			await waitFor(() => {
				expect(screen.getByText(errorMessage)).toBeInTheDocument();
			});
		});

		// Instead of using waitFor for each error message, you could use Promise.all to wait for all error messages at once. This can make your tests run faster.
		await Promise.all(errorChecks);
	});

	test("should call the function handleSubmit when the form is submitted correctly when the submit button is clicked while validation pass", async () => {
		// We recommend invoking userEvent.setup() before the component is rendered.
		const user = userEvent.setup();
		const handleSubmitMock = jest.fn();

		render(<ContactFormContainer handleSubmit={handleSubmitMock}/>);
		
		// for some reason when the first textarea is typed, it types extra words that result in a different expected result.
		// So I write, clear and write again
		const firstNameInput = screen.getByLabelText(/first name/i);
		await user.type(firstNameInput, "Steve");
		await user.clear(firstNameInput);
		await user.type(firstNameInput, "Steve");

		const lastNameInput = screen.getByLabelText(/last name/i);
		await user.type(lastNameInput, "Jobs");

		const ageInput = screen.getByLabelText(/age/i);
		await user.type(ageInput, "32");

		const emailInput = screen.getByLabelText(/email/i);
		await user.type(emailInput, "steve@cloud.com");

		const issueSelect = screen.getByRole("combobox", { name: /issue/i });
		await user.selectOptions(issueSelect, "app-install");

		// Act
		const submitButton = screen.getByRole("button", { name: /submit/i });
		userEvent.click(submitButton);

		// Assert
		// The expect.any(Object) expect another object, one that is submited along the form contact info object.
		await waitFor(() =>
			expect(handleSubmitMock).toHaveBeenCalledWith(expect.objectContaining({
				firstName: "Steve",
				lastName: "Jobs",
				age: 32,
				email: "steve@cloud.com",
				issue: "app-install",
			}), expect.any(Object))
		);

	});

});
