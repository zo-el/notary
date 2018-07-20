import React, { Component } from "react";
import { Row, Col, CardPanel, Navbar, NavItem, Input, Modal, Button } from 'react-materialize';
import NotaryEntryList from "../containers/NotaryEntryList";
import EntryItem from "../containers/EntryItem";
import { addEntry } from "../actions/index";

class App extends Component {
  render() {
    return(
      <div>
        <Navbar style={{background:"#0a0d3c", width:"100%", color:"#e9e6c4"}} brand="Welcome Notary" right>
          {/* <NavItem className="nav-item"><h4>Notary Journal</h4></NavItem> */}
          <NavItem>
            <Modal
              header='Add a Notary Entry'
              trigger={<Button>Add Entry</Button>}>
              <Row>
                <Input s={6} label="Full Name" />
                <Input s={6} label="Notarial Event" />
                <Input s={12} label="Notary" />
              </Row>
            </Modal>
          </NavItem>
        </Navbar>

        <div className="app journal-background">
          <div className="dash-border"></div>
          <div className="dash-border"></div>
          <h1 className="jumbotron">Review the Notorial Events Below</h1>


          <Row>
              <Col s={12} m={4}>
                  <CardPanel className="lighten-4 black-text card-panel">
                      <h4 className="title">Notary Entries</h4>
                      {/* <hr/> */}
                      <NotaryEntryList/>
                  </CardPanel>
              </Col>
              <Col s={12} m={8}>
                <CardPanel className="lighten-4 black-text card-panel">
                    <h4 className="title">Entry Details</h4>
                    {/* <hr/> */}
                    <EntryItem />
                </CardPanel>
              </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App;
