// THIS IS THE ENTRY POINT TO THE APPLICATION
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import React, { Component } from 'react';
import './Props';
const headers ={
  headers:{
    'Authorization': `Basic ${btoa('MaryKK:33465412mM')}`
  }
  }

  
class Sidebar extends Component {
  constructor(){
    super();
    this.state={
        isLoading: false,
        data: [],
        filterText: ''
    }
}
componentDidMount(){
 fetch('http://197.136.81.99:8082/test/api/organisationUnitLevels/?fields=:all&format=json&page_size=50', headers
  ).then( (Response)=> Response.json() )
  .then(( findresponse) => {
      console.log(findresponse.organisationUnitLevels )
      this.setState({
          data:findresponse.organisationUnitLevels,
      })
  })
}

  handleClick = (reference, e) => {

    if ($(reference + "-options").css('display') === 'none'){
        $(reference + "-options").css("display", "block");
    }else{
      $(reference + "-options").css("display", "none");
    }

  }

  render() {
    const { isLoading } = this.state;
    
    return (
      <div className="container">
      <div className="row">
        <div className="col-4">
        <div class="container">
  
      <div class="card">
      <div class="card-body">
      <div class="panel-group">
      <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1">Data</a>
      </h4>
    </div>
    
    <div id="collapse1" class="panel-collapse collapse">
    <div class="list-group">
     {    this.state.data.map( (dynamicData,key) =>
         <p>{dynamicData.name}</p> 
    )}
   </div>
    
    </div>
    
    
  </div>
</div>

 <div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="second" href="#collapse2">Period</a>
      </h4>
    </div>
    <div id="collapse2" class="panel-collapse collapse">
    <div class="list-group" multiple>
    {    this.state.data.map( (dynamicData,key) =>
         <p>{dynamicData.name}</p> 
    )}
</div>
      
    </div>
    
  </div>
</div>
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="third" href="#collapse3">Org Units</a>
      </h4>
    </div>
    <div id="collapse3" class="panel-collapse collapse">
    <div class="list-group" multiple>
    {    this.state.data.map( (dynamicData,key) =>
         <p>{dynamicData.name}</p> 
    )}
    
</div>
      
    </div>
    
  </div>
</div>

</div>
</div> 
</div>
    </div>
    
    <div className="col-8" id="action_panel">
      <div class="container">
      <div class="card">
      <div class="card-body">
    <h3> selected Items</h3>
  <div class="panel panel-default">
    <div class="panel-body">
     </div>
  </div>
  </div>
  </div>
  </div>
      </div>
      </div>
      </div>
    



    );
  }
}



 export default Sidebar; 