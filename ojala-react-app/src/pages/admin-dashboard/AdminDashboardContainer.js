import React, { useState, useEffect } from "react";
import fakeContacts from "data/fake-contacts.json";
import Container from "react-bootstrap/Container";
import DashboardTable from "./presentational/DashboardTable";
import HeaderLogo from "./presentational/HeaderLogo";
import "./AdminDashboard.scss";
import { getContacts, deleteContact } from "services/admin-dashboard-service";

function AdminDashboardContainer() {
	const [contacts, setContacts] = useState(fakeContacts);

	useEffect(() => {
		getContacts(setContacts);
	}, []);

	const deleteContactThenSetContacts = async (contactId) => {
		if (await deleteContact(contactId) === "deleted") {
			setContacts(contacts => contacts.filter(contact => contact.id !== contactId)); //create a new array that includes all contacts except the one with the contactId that matches the id of the contact to be deleted. 
		}
	}

	return (
		<Container fluid>
			<HeaderLogo isAdmin={true} className="my-1" /> {/* Version of Admin Dashboard */}
			<Container className="my-3">
				{contacts ? (
					<DashboardTable contacts={contacts} deleteContact={deleteContactThenSetContacts}/>
				) : (
					<h1 className="loading">Loading, Please wait</h1>
				)}
			</Container>
		</Container>
	);
}

export default AdminDashboardContainer;
