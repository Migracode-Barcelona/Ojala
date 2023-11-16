function DashboardTableItem({ contact }) {
	return (
	  <tr className="table-item">
		<td>{contact.first_name}</td>
		<td>{contact.last_name}</td>
		<td>{contact.email}</td>
		<td>{contact.issue}</td>
		<td>{contact.submit_date}</td>
	  </tr>
	);
  }
  
  export default DashboardTableItem;
  
