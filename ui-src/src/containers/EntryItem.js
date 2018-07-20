import React, { Component } from "react";
import { Table } from 'react-materialize';
import { connect } from "react-redux"

class EntryItem extends Component {
  render() {
    if(!this.props.selectedEntry.entry) {
      return (
        <Table striped responsive hoverable centered>
          <thead>
            <tr>
              <th data-field="first">Name</th>
              <th data-field="date">Date</th>
              <th data-field="content">Content</th>
              <th data-field="content">Notary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.selectedEntry.subject}</td>
              <td>{this.props.selectedEntry.timestamp}</td>
              <td>{this.props.selectedEntry.content}</td>
              <td>{this.props.selectedEntry.notary}</td>
            </tr>
          </tbody>
        </Table>
      );
    };

    return (
      <Table striped responsive hoverable centered>
        <thead>
          <tr>
            <th data-field="first">Name</th>
            <th data-field="date">Date</th>
            <th data-field="content">Content</th>
            <th data-field="content">Notary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.selectedEntry.entry.subject}</td>
            <td>{this.props.selectedEntry.entry.timestamp}</td>
            <td>{this.props.selectedEntry.entry.content}</td>
            <td>{this.props.selectedEntry.entry.notary}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
};

function mapStateToProps(state) {
  //console.log("entry", state.selectedEntry.entry);
  return {selectedEntry: state.selectedEntry};
}

export default connect(mapStateToProps)(EntryItem)
