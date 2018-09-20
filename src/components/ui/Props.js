import React, { Component } from 'react';
import Panel from 'react';
class Tabpane extends Component {
    constructor(props){
        super(props);
        this.handleChangeState = this.handleChangeState.bind(this);
    }

    handleChangeState(message) {
        this.InputChange(message);
    }
    InputChange = (params) => {
        this.props.changeHandler(params);
    };
    render() {
    return (
        <div class="panel-group">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="first" href="#collapse1">Data</a>
              <a data-toggle="second" href="#collapse2">Period</a>
              <a data-toggle="third" href="#collapse3">Org Units</a>
            </h4>
          </div>
          <Panel eventKey="first">Data</Panel>
          <Panel eventKey="second">Period</Panel>
          <Panel eventKey="third">Org Units</Panel>
          </div>
        </div>
    );
  }
}

export default Tabpane;