import Table from 'react-bootstrap/Table';
import DashboardTableItem from './DashboardTableItem';

function DashboardTable({contacts}) {
	return (
        (contacts) ? 
		<Table>
			<thead>
				<tr>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Email</th>
					<th scope="col">Issue</th>
					<th scope="col">Submit date</th>
				</tr>
			</thead>
            <tbody>
				{contacts.map(i => (
                        <DashboardTableItem contact={i} />
				))}
			</tbody>
		</Table> : <span>loading</span>
	);
}

export default DashboardTable;
