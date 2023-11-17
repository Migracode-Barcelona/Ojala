import React, { useState, useEffect } from "react";
import fakeContacts from "data/fake-contacts.json";
import Container from "react-bootstrap/Container";
import DashboardTable from "./presentational/DashboardTable";
import HeaderLogo from "./presentational/HeaderLogo";
import "./AdminDashboard.scss";
import getContacts from "services/admin-dashboard-service";

function AdminDashboardContainer() {
	const [contacts, setContacts] = useState(fakeContacts);

	useEffect(() => {
		getContacts(setContacts);
	}, []);

	return (
		<Container fluid>
			<HeaderLogo isAdmin={true} className="my-1" /> {/* Version of Admin Dashboard */}
			<Container className="my-3">
				{contacts ? (
					<DashboardTable contacts={contacts} />
				) : (
					<h1 className="loading">Loading, Please wait</h1>
				)}
			</Container>
		</Container>
	);
}

export default AdminDashboardContainer;
