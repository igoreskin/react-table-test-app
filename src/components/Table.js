import React from 'react';
import TableRow from './TableRow';
import styles from './Table.module.css';

const Table = (props) => {
const renderRows = props.users.map(user => <TableRow user={user} key={user.id}/>)
  return (
    <table className={styles.table}>
      <colgroup>
        <col style={{width: "20%"}}></col>
        <col style={{width: "30%"}}></col>
        <col style={{width: "30%"}}></col>
        <col style={{width: "20%"}}></col>
      </colgroup>
      <thead>
        <tr>
          <th>User Id</th>
          <th>ID</th>
          <th>Title</th>
          <th>Completed ID</th>
        </tr>
      </thead>
      <tbody className={styles.users}>
        {renderRows}
      </tbody>
    </table>
  )
}

export default Table;