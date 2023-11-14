import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "components/footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "containers/home/HomeContainer";

const router = createBrowserRouter([{ path: "/", element: <HomeContainer /> }]);

describe("testing for the footer", () => {
  let footer;
  let socialMediaLink;

  beforeEach(() => {
    render(
      <RouterProvider router={router}>
        <Footer />
      </RouterProvider>
    );
    footer = screen.getByRole("footer", { name: "footer tag exists" });
    socialMediaLink = screen.getAllByTitle("social media");
  });

  test("Footer is in the component", () => {
    expect(footer).toBeInTheDocument();
  });

  test("The footer has the blue color Ojala App", () => {
    expect(footer).toHaveStyle({
      backgroundColor: "#007bb6",
    });
  });

  test("All social media links open in a new tab", () => {
    socialMediaLink.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
