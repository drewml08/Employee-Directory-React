import React from "react";
import "./style.css";

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
      Header: 'Time Zone',
      accessor: 'timezone.description',
    },
  ],
  []
)

function EmployeeTable(props) {
  return (
    <div></div>
  );
}

export default EmployeeTable;
