import React from 'react';
import { useTable } from 'react-table';
import DashboardTableItem from './DashboardTableItem';
import 'pages/admin-dashboard/AdminDashboard.scss';

function DashboardTable({ contacts, deleteContact }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'id', 
      },
      {
        Header: 'First Name',
        accessor: 'first_name', 
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Issue',
        accessor: 'issue',
      },
      {
        Header: 'Submit date',
        accessor: 'submit_date',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: contacts });

  return (
    <div className="custom-table-container">
      <table {...getTableProps()} className="custom-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return <DashboardTableItem key={row.id} contact={row.original} deleteContact={deleteContact} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;



