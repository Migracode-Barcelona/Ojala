async function getContacts(setContacts) {
	const url = `${process.env.REACT_APP_API_URL}/contact/`;

	try {
		const resp = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		if (!resp.ok) {
			const message = `An error has occured: ${resp.status}`;
			throw new Error(message);
		}
		const contacts = await resp.json();
		contacts.forEach(
			(contact) => (contact.submit_date = contact.submit_date.split("T")[0])
		);
		setContacts(contacts);
	} catch (err) {
		alert(err);
	}
}

async function deleteContact(contactId) {
	const url = `${process.env.REACT_APP_API_URL}/contact`;

	try {
		const resp = await fetch(`${url}/${contactId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		if (!resp.ok) {
			const message = `An error has occured: ${resp.status}`;
			throw new Error(message);
		}
		if (resp.ok) {
			alert(`You deleted ${contactId}`);
			return "deleted";
		}
	} catch (err) {
		alert(err);
	}
}

export {
	getContacts,
	deleteContact,
};
