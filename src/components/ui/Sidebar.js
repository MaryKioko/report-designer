// THIS IS THE ENTRY POINT TO THE APPLICATION
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import React, { Component } from 'react';
//import './App.css';
class App extends Component {


  handleClick = (reference, e) => {

    if ($(reference + "-options").css('display') === 'none'){
        $(reference + "-options").css("display", "block");
    }else{
      $(reference + "-options").css("display", "none");
    }

  }

   
  render() {
    return (
     <div className="container">
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
              <li className="list-group-item" id="Couuntry-tab" onClick={(e) => this.handleClick("#weekly-tab", e)}>Weekly</li>
              <li className="list-group-item hidden" id="weekly-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Kenya</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Uganda</label>
                  </div>
                  
                  <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Nigeria</label>
                  </div>
                  </div>
              </li>
              <li className="list-group-item" id="County" onClick={(e) => this.handleClick("#quarterly-tab", e)}>Quarterly</li>
              <li className="list-group-item hidden" id="quarterly-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Nairobi</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Makueni</label>
                  </div>
                  <br/>
                  <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Kakamega</label>
                  </div>
                  </div>
              </li>
              <li className="list-group-item" id="Sub-County" onClick={(e) => this.handleClick("#semi-annually-tab", e)}>Semi-Annually</li>
                <li className="list-group-item hidden" id="semi-annually-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Kibwezi North</label>
                  </div>
                  <br/>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Dangoreti South</label>
                  </div>
                  <br/>
                  </div>
              </li>
              
              <li className="list-group-item" id="annually-tab" onClick={(e) => this.handleClick("#annually-tab", e)} >Annually</li>
              <li className="list-group-item hidden" id="annually-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">2018</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">2017</label>
                  </div>
                  <br/>
                  <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">2016</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">2015</label>
                  </div>
                  </div>
              </li>
              <li>className</li>
            </ul>
        </div>
        <div className="col-9" id="action_panel"></div>
      </div>
     </div>
    );
  }
}

export default App;