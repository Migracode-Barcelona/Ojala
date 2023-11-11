function DashboardTableItem({contact}) {
	return (
		<tr
			key={contact.id}
		>
			<td>{contact.first_name}</td>
			<td>{contact.last_name}</td>
			<td>{contact.email}</td>
			<td>{contact.issue}</td>
			<td>{contact.submit_date}</td>
		</tr>
	);
}

export default DashboardTableItem;
