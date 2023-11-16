import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "components/footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "containers/home/HomeContainer";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const router = createBrowserRouter([{ path: "/", element: <HomeContainer /> }]);

beforeEach(() => {
	i18next
		.use(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: {}, // you might need to pass your resources here
			lng: "en", // if you're using a language detector, do not define the lng option
			fallbackLng: "en",

			interpolation: {
				escapeValue: false, // react already safes from xss
			},
		});
});

describe("Footer testing", () => {
  let footer;
  let socialMediaLink;

  test("Footer is in the component", () => {
    render(
      <RouterProvider router={router}>
        <Footer />
      </RouterProvider>
    );
    footer = screen.getByRole("footer", { name: "footer" });
    socialMediaLink = screen.getAllByTitle("social media");
    expect(footer).toBeInTheDocument();
  });

  test("The footer has the blue color Ojala App", () => {
    render(
      <RouterProvider router={router}>
        <Footer />
      </RouterProvider>
    );
    footer = screen.getByRole("footer", { name: "footer" });
    socialMediaLink = screen.getAllByTitle("social media");
    expect(footer).toHaveStyle({
      backgroundColor: "#007bb6",
    });
  });

  test("All social media links open in a new tab", () => {
    render(
      <RouterProvider router={router}>
        <Footer />
      </RouterProvider>
    );
    footer = screen.getByRole("footer", { name: "footer" });
    socialMediaLink = screen.getAllByTitle("social media");
    socialMediaLink.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
