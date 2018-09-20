import React, { Component } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
//import Dropdowns from './components/ui/Dropdowns';
import * as Design from 'reactstrap';
import Sidebar from './components/ui/Sidebar';
//import List from './components/ui/List';
//import Checkbox from './components/ui/Checkbox';
//import Panel from './components/ui/Panel';
//import Drawer from './components/ui/Drawer';
//import Dhis2 from './components/ui/Dhis2';
class App extends Component { 
 
  render() {
    return (

<Design.Container>
<Design.Row>
<Design.Col md="12">
<Header />
</Design.Col>
<Design.Col md="8" sm="9">
 <Sidebar />
</Design.Col>
{/* <Design.Col md="4" sm="3">
<List />
</Design.Col> */}
<Design.Col md="12" sm="12">
<Footer />
</Design.Col>
</Design.Row>  
</Design.Container>
    );
  }
}

export default App;
