import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import HomeContainer from "containers/home/HomeContainer";
import ContactInfoContainer from "pages/contact-form/ContactFormContainer";
import ErrorPage from "pages/error-page/ErrorPage";
// import AdminDashboardContainer from "pages/admin-dashboard/AdminDashboardContainer";

const router = createBrowserRouter([
	{ path: "/", element: <HomeContainer />, errorElement: <ErrorPage /> },
	{ path: "contact", element: <ContactInfoContainer /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
