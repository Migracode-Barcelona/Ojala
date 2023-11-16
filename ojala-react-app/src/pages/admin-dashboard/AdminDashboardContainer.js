import React, { useState, useEffect } from "react";
import fakeContacts from "data/fake-contacts.json";
import Container from "react-bootstrap/Container";
import DashboardTable from "./presentational/DashboardTable";
import HeaderLogo from "./presentational/HeaderLogo";
import "./AdminDashboard.scss"

function AdminDashboardContainer() {
	const [contacts, setContacts] = useState(fakeContacts);

	useEffect(() => {
		// do a post request to get information from the server
	}, []);

	return (
		<Container fluid>
      <div className="admin-header">
        <HeaderLogo isAdmin={true} /> {/* Version of Admin Dashboard */}
        {/* Others */}
      </div>
      {contacts ? (
        <DashboardTable contacts={contacts} />
      ) : (
        <h1 className="loading">Loading, Please wait</h1>
      )}
    </Container>
  
	);
}

export default AdminDashboardContainer;   

