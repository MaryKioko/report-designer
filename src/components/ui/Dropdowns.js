import React, { Component } from 'react';
import { Card, CardBody,Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

class Dropdowns extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    Country
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Kenya</DropdownItem>
                    <DropdownItem disabled>Tanzania</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card divider />
            <Card>
              
              <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    County
                  </DropdownToggle>
                  <DropdownMenu>
                  <DropdownItem header>Nairobi</DropdownItem>
                    <DropdownItem disabled>Makueni</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card divider/>
            <Card>
              
              <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    Sub-County
                  </DropdownToggle>
                  <DropdownMenu>
                  <DropdownItem header>Dagoreti North</DropdownItem>
                  <DropdownItem disabled>Kibwezi North</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card>
              
              <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    Facility Type
                  </DropdownToggle>
                  <DropdownMenu>
                  <DropdownItem header>Health Center</DropdownItem>
                    <DropdownItem disabled>Dispensary</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>
            <Card>
              
              <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    Facility List
                  </DropdownToggle>
                  <DropdownMenu>
                  <DropdownItem header>Kibra Health Center</DropdownItem>
                  <DropdownItem disabled>Yikithuki Dispensary</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                  this.toggle(0);
                }}>
                  <DropdownToggle caret>
                    Report Type
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem >GIS</DropdownItem>
                    <DropdownItem>Pivot Table</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card> 
            {/* <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Dropdowns</strong>
                <small> sizing</small>
              </CardHeader> */}
              {/* <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen[2]} toggle={() => {this.toggle(2);}} size="lg" className="mb-3">
                  <DropdownToggle caret>
                    Country
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown divider/>
                <Dropdown isOpen={this.state.dropdownOpen[2]} toggle={() => {this.toggle(2);}} size="lg" className="mb-3">
                  <DropdownToggle caret>
                    County
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={this.state.dropdownOpen[2]} toggle={() => {this.toggle(2);}} size="lg" className="mb-3">
                  <DropdownToggle caret>
                    Sub-County
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardBody>
            </Card> */}
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dropdowns;
