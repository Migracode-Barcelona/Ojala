import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import HomeContainer from "containers/Home/HomeContainer";
import ContactInfo from "pages/ContactInfo/ContactInfo";
import ErrorPage from "utils/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{ path: "/", element: <HomeContainer />, errorElement: <ErrorPage /> },
	{ path: "contact", element: <ContactInfo /> },
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
