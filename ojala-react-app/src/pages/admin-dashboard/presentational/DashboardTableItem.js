function DashboardTableItem({ contact, deleteContact }) {
	return (
	  <tr className="table-item">
		<td>{contact.id}</td>
		<td>{contact.first_name}</td>
		<td>{contact.last_name}</td>
		<td>{contact.email}</td>
		<td>{contact.issue}</td>
		<td>{contact.submit_date}</td>
		<td><i onClick={() => deleteContact(contact.id)} className="fa-solid fa-delete-left"></i></td>
	  </tr>
	);
  }
  
  export default DashboardTableItem;
  
