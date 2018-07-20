import React from "react";
import { Table } from 'react-materialize';

const ListEntry = ({entry}) => {
  return (
    <Table className="list-entry-item" striped responsive hoverable centered>
      <tbody>
        <tr>
          <td>{entry.subject}</td>
          <td>{entry.timestamp}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListEntry;
