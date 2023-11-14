import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import HomeContainer from "containers/home/HomeContainer";
import ContactInfoContainer from "pages/contact-form/ContactFormContainer";
import ErrorPage from "pages/error-page/ErrorPage";
import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
	supportedLngs: ["ar", "en", "es"],
	fallbackLng: "en",
	detection: {
		order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
		caches: ['cookie']
	},
	backend: {
		loadPath: '/locales/{{lng}}/translation.json',
	},
	react: { useSuspense: false }
});

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
