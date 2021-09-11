import React from "react";
import "./style.css";
import { useTable } from 'react-table';


function EmployeeTable(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'name.first', 
      },
      {
        Header: 'Last Name',
        accessor: 'name.last',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Country',
        accessor: 'location.country',
      },
    ],
    []
  )
  const data = React.useMemo( 
    () => props.data,
    []
    )

  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {
        headerGroups.map(headerGroup => (
          
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
            headerGroup.headers.map(column => (
              
              <th {...column.getHeaderProps()}>
                {
                column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {}
      <tbody {...getTableBodyProps()}>
        {
        rows.map(row => {
          
          prepareRow(row)
          return (
            
            <tr {...row.getRowProps()}>
              {
              row.cells.map(cell => {
                
                return (
                  <td {...cell.getCellProps()}>
                    {
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default EmployeeTable;
