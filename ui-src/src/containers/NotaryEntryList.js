import React, { Component } from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { selectEntry } from "../actions/index";
import ListEntry from "../components/ListEntry";


class NotaryEntryList extends Component {
  renderNotaryList() {
    return this.props.entries.map((entry) => {
      return (
        <li
          key={entry.subject}
          onClick={() => this.props.selectEntry(entry)}
          className="list-group-item list-entry-item">
          <h6>{entry.subject}: <span>{entry.timestamp}</span></h6>
        </li>
      );
    });
  }

  render() {
    return(
        <ul className="list-group col-sm-4">
          {this.renderNotaryList()}
        </ul>
    );
  }
}

function mapStateToProps(state) {
  return { entries: state.entries };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEntry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotaryEntryList)

{/* <ListEntry
  key={entry.subject}
  onClick={() => this.props.ListEntry(entry)}
  entry = {entry}
/> */}
