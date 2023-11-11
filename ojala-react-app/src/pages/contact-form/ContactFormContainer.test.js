import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactFormContainer from "./ContactFormContainer";
import postContactForm from "services/contact-form-service";

jest.mock("services/contact-form-service");

describe("ContactFormContainer", () => {
  test("submits the form correctly", async () => {
    render(<ContactFormContainer />);
  
    // You might need to find elements by label, text, placeholder, etc.
    const firstNameInput = screen.getByLabelText(/First name/i);
    const lastNameInput = screen.getByLabelText(/Last name/i);
    const ageInput = screen.getByLabelText(/age/i);
    const emailInput = screen.getByLabelText(/email/i);
    const issueSelect = screen.getByLabelText(/issue/i);
    const submitButton = screen.getByRole("button");
  
    // Mock user input
    fireEvent.change(firstNameInput, { target: { value: "Steve" } });
    fireEvent.change(lastNameInput, { target: { value: "Jobs" } });
    fireEvent.change(ageInput, { target: { value: 12 } });
    fireEvent.change(emailInput, { target: { value: "steve@apple.com" } });
    // Use userEvent to select an option
    await userEvent.selectOptions(issueSelect, "app-install");
  
    // Trigger form submission
    fireEvent.click(submitButton);
  
    expect(issueSelect).toHaveValue("app-install");
    // Assert that the postContactForm function was called with the correct values
    expect(postContactForm).toHaveBeenCalledWith({ firstName: "Steve", lastName: "Jobs", age: 12, email: "steve@apple.com", issue: "app-install"});
  });
});
