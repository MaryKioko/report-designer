//import React from 'react';
import ReactBootstrap from 'react';
//import ReactDOM from 'react';
import $ from 'jquery';
import React, { Component } from 'react';
const Grid = ReactBootstrap.Grid;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;
const Panel = ReactBootstrap.Panel;
const ButtonToolbar = ReactBootstrap.ButtonToolbar;
const Button = ReactBootstrap.Button;
const Form = ReactBootstrap.Form;
class Panel1 extends Component {
    handleClick = (reference, e) => {
  
      if ($(reference + "-options").css('display') === 'none'){
          $(reference + "-options").css("display", "block");
      }else{
        $(reference + "-options").css("display", "none");
      }
  
    }
  render() {
    return (
    <div>
      <Panel defaultExpanded header="Field Name Multi Value" collapsible>
        <label style={{marginLeft: "0px", marginRight: "10px"}} className="checkbox-inline"><input type="checkbox"/><span>Value 1</span></label>
      <label style={{marginLeft: "0px", marginRight: "10px"}} className="checkbox-inline"><input type="checkbox"/><span>Value 2</span></label>
      <label style={{marginLeft: "0px", marginRight: "10px"}} className="checkbox-inline"><input type="checkbox"/><span>Value 3</span></label>
      <label  style={{marginLeft: "0px", marginRight: "10px"}} className="checkbox-inline"><input type="checkbox"/><span>Value 4</span></label>
      <ButtonToolbar style={{ marginTop: 10}}>
        <Button style={{marginTop: 5}} bsSize="small">Select All</Button>
        <Button style={{marginTop: 5}}  bsSize="small">Remove All</Button>
      </ButtonToolbar>
  </Panel> 
      <Panel defaultExpanded header="Field Name Single Value" collapsible>
     <label style={{marginLeft: "0px", marginRight: "10px"}} className="radio-inline"><input type="radio" name="fildname"/><span>Value 1</span></label>
     <label style={{marginLeft: "0px", marginRight: "10px"}} className="radio-inline"><input type="radio" name="fildname"/><span>Value 2</span></label>
     <label style={{marginLeft: "0px", marginRight: "10px"}} className="radio-inline"><input type="radio" name="fildname"/><span>Value 3</span></label>
     <label style={{marginLeft: "0px", marginRight: "10px"}} className="radio-inline"><input type="radio" name="fildname"/><span>Value 4</span></label>
   </Panel>      
      <div className="row-fluid">
        <div className="span12">
              <div style={{display: "inline-block"}}>some content</div>
              <div style={{display: "inline-block"}}>some content</div>
        </div>
      </div>
    </div>
);
  }
}

export default Panel;