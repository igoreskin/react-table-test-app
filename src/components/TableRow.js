import React from 'react';

const TableRow = (props) => {
  const user = props.user;
  return (
    <tr>
      <td>{user.userId}</td>
      <td>{user.id}</td>
      <td>{user.title}</td>
      <td>{`${user.completed}`}</td>
    </tr>
  )
}

export default TableRow;