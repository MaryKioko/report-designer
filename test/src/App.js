//should contain list of programs
import React, {Component} from 'react'



const headers ={
headers:{
  'Authorization': `Basic ${btoa('MaryKK:33465412mM')}`
}
}


class Programs extends Component{
constructor(){
    super();
    this.state={
        data: [],
    }

}



componentDidMount(){
    fetch('http://197.136.81.99:8082/test/api/organisationUnits/?fields=:all&format=json&page_size=50', headers
    ).then( (Response)=> Response.json() )
    .then(( findresponse) => {
        console.log(findresponse.organisationUnits )
        this.setState({
            data:findresponse.organisationUnits,
        })
    })


}




render(){
  return(


      <div>
          <h1>Description</h1>
         {    this.state.data.map( (dynamicData,key) =>

         <div>
            <label>
               facility type name
             <a href={dynamicData.href}>{dynamicData.name}</a>
             </label>
            
            
             
          </div>




      )}

      </div>


  )
}
}

export default Programs

//    // tableexample(){
//    //     const deta=[this.state.data],


//    //     <div>
//    //     <ReactTable
//    //       data={deta}
//    //       columns={columns}
//    //      // defaultPageSize = {3}
//    //       //pageSizeOptions = {[3, 6]}
//    //     />
//    // </div>


//    // }

//    componentDidMount(){
//        //let filters = this.state.filterText
//        //http://197.136.81.99:8082/test/api/programDataElements.json?fields=:all&paging=false  ---- default
//        fetch('http://api.kmhfltest.health.go.ke/api/facilities/facilities/?&format=json&page_size=50 ', headers
//        ).then( (Response)=> Response.json() )
//        .then(( findresponse) => { //filter the findresponse using the filters variable to display only what is in the input


//            console.log(findresponse.facilities[0]) //hapa ndio jackpot


//            this.setState({
//                data:findresponse.facilities,
//            })
//        })


//    }


//    updateSearch(event){
//        this.setState({
//            filterText:event.target.value.substr(0,20)

//        })
//        console.log(this.state.filterText)


//    }


//    render(){
//        return(
//            <div>

//            <input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} />

//                 {/* nameslist is == to data */}
//                <h1>Data elements</h1>




//               {    this.state.data
//               .filter( dynamicData =>{

//                    //console.log(dynamicData.name)
//                    return dynamicData.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
//               } )
//               .map( (dynamicData,key) =>

//               <div key={dynamicData.id} >

//                    <Link to={{ pathname:`/details/${ dynamicData.id }` ,
//                        state: { dynamicData:dynamicData.facility_type_name }
//                    }}> {dynamicData.facility_type_name}  </Link>


//                </div>


//            )}{/* end of map */}


//            </div>


//        )
//    }
// }

// export default Programs