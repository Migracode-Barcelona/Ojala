import Container from "react-bootstrap/Container";
import { useRouteError, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import errorGif from "utils/ErrorPage/fall-error.gif";
import React, { useEffect } from "react";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	const navigate = useNavigate();

	useEffect(() => {
		function redirectAfter5Seconds() {
			setTimeout(function () {
				console.log("kskdj");
				navigate("/", { replace: true });
			}, 5000);
		}
		redirectAfter5Seconds();
	}, [navigate]);

	return (
		<Container id="error-page" className="text-center my-4">
			<h1 className="display-1">Oops!</h1>
            <h3>willberight</h3>
			<h2>Sorry, an unexpected error has occurred.</h2>
			<p>You will be redirected in seconds.</p>
			<Image src={errorGif} alt="Image" width={"50%"} fluid></Image>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Container>
	);
}
