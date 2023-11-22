import React, { useState, useEffect } from "react";
import fakeContacts from "data/fake-contacts.json";
import Container from "react-bootstrap/Container";
import DashboardTable from "./presentational/DashboardTable";
import HeaderLogo from "./presentational/HeaderLogo";
import "./AdminDashboard.scss";
import { getContacts, deleteContact } from "services/admin-dashboard-service";
import { getAdminLogout } from "services/admin-login-service";
import { useNavigate } from "react-router-dom";

function AdminDashboardContainer() {
	const [contacts, setContacts] = useState(fakeContacts);

	const navigate = useNavigate();
	function redirectAfter1Sec() {
		setTimeout(function () {
			navigate("/admin-login", { replace: true });
		}, 500);
	}

	useEffect(() => {
		getContacts(setContacts);
	}, []);

	const deleteContactThenSetContacts = async (contactId) => {
		if (await deleteContact(contactId) === "deleted") {
			setContacts((contacts) =>
				contacts.filter((contact) => contact.id !== contactId)
			); //create a new array that includes all contacts except the one with the contactId that matches the id of the contact to be deleted.
		}
	};

	const handleLogout = async () => {
		if (await getAdminLogout() === "logout") {
			redirectAfter1Sec()
		}
	};

	return (
		<Container fluid>
			<HeaderLogo isAdmin={true} handleLogout={handleLogout} className="my-1" />{" "}
			{/* Version of Admin Dashboard */}
			<Container className="my-3">
				{contacts ? (
					<DashboardTable
						contacts={contacts}
						handleDeleteContact={deleteContactThenSetContacts}
					/>
				) : (
					<h1 className="loading">Loading, Please wait</h1>
				)}
			</Container>
		</Container>
	);
}

export default AdminDashboardContainer;
