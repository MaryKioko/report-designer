{/* <h2>Accordion Example</h2>
  <p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p> */}
  {/* <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Country</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse in">
        <div class="panel-body">Kenya<br/>
        Tanzania<br/>
        Uganda
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">County</a>
        </h4>
      </div>
      <div id="collapse2" class="panel-collapse collapse">
        <div class="panel-body">Nairobi <br/>
        Makueni<br/>
        Kakamega</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Sub-County</a>
        </h4>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body">Dangoreti <br/>
        Kibwezi <br/>
        Mumias.</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Facility-Type</a>
        </h4>
      </div>
      <div id="collapse4" class="panel-collapse collapse">
        <div class="panel-body">Clinic <br/>
        Health Center <br/>
        Dispensary</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Facility-List</a>
        </h4>
      </div>
      <div id="collapse5" class="panel-collapse collapse">
        <div class="panel-body">Dangoreti Clinic <br/>
        Kibwezi Health Center <br/>
        Mumias Dispensary.</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Report-Type</a>
        </h4>
      </div>
      <div id="collapse6" class="panel-collapse collapse">
        <div class="panel-body">GIS <br/>
        Pivot Table <br/>
        Visualizer.</div>
      </div>
    </div>
  </div> 
</div>
</div>
      <div className="col-8" id="action_panel">
      <div class="container"> */}

{/* <ul className="list-group">
          
          <li className="list-group-item" id="Country" onClick={(e) => this.handleClick("#country-tab", e)}>Country</li>
              <li className="list-group-item disabled" id="country-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Kenya</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Uganda</label>
                  </div>
                  <br/>
                  <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Nigeria</label>
                  </div>
                  </div>
              </li>
             <li className="list-group-item" id="County" onClick={(e) => this.handleClick("#county-tab", e)}>County</li>
              <li className="list-group-item hidden" id="county-tab-options">
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
              <li className="list-group-item" id="Sub-County" onClick={(e) => this.handleClick("#subcounty-tab", e)}>Sub-County</li>
                <li className="list-group-item hidden" id="subcounty-tab-options">
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
              
              <li className="list-group-item" id="Facility Type" onClick={(e) => this.handleClick("#facilitytype-tab", e)} >Facility Type</li>
              <li className="list-group-item hidden" id="facilitytype-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Health Center</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Clinic</label>
                  </div>
                  <br/>
                  </div>
              </li>
              <li className="list-group-item" id="Facility List-tab" onClick={(e) => this.handleClick("#facilitylist-tab", e)}>Facility List</li>
              <li className="list-group-item hidden" id="facilitylist-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Dangoreti Health Center</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Kibwezi Hospital</label>
                  </div>
                  
                  <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Lurambi Clinic</label>
                  </div>
                  </div>
              </li>
              <li className="list-group-item" id="Report Type-tab" onClick={(e) => this.handleClick("#reporttype-tab", e)}>Report Type</li>
              <li className="list-group-item hidden" id="reporttype-tab-options">
                <div className="row container">
                <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">GIS</label>
                  </div>
                  <div className="col form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label className="form-check-label">Pivot Table</label>
                  </div>
                  
                  <div className="col form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                  <label className="form-check-label">Visualizer</label>
                  </div>
                  </div>
              </li>
              
            </ul> */}
            {/* <div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse4">Facility-Type</a>
      </h4>
    </div>
    <div id="collapse4" class="panel-collapse collapse">
    <select class="list-group" multiple>
    <option selected="selected">Clinic</option>
    <option>Hospital</option>
    <option selected="selected">Dispensary</option>
    
</select>
      
    </div>
    
  </div>
</div>
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse5">Facility-List</a>
      </h4>
    </div>
    <div id="collapse5" class="panel-collapse collapse">
    <select class="list-group" multiple>
    <option selected="selected">Nairobi Hospital</option>
    <option>Kisumu Dispensary</option>
    <option selected="selected">St Mary's Clinic</option>
    
</select>
      
    </div>
    
  </div>
</div>
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse6">Report-Type</a>
      </h4>
    </div>
    <div id="collapse6" class="panel-collapse collapse">
    <select class="list-group" multiple>
    <option selected="selected">GIS</option>
    <option>Pivot Table</option>
    <option selected="selected">Visualizer</option>
    </select>
   </div> 
  </div>
</div> */}