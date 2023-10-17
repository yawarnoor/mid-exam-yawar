import React, { Component } from 'react'
import sampleData from './sampleData.jsx'
import Row from './Row.jsx'

export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
       nameFilter: "",
       ageFilter: "",
       filteredUsers: []
    }
    this.foundName = []
    this.handleChange = this.handleChange.bind(this)
    // this.handleSearchName = this.handleSearchName.bind(this)
    this.handleFilter = this.handleFilter.bind(this)

  }

CommonItemsArray(array_1, array_2) {
    var commonArray = []; // Create an array for common items in another two arrays.
    for (var i = 0; i < array_1.length; i++) {
       for (var j = 0; j < array_2.length; j++) {
          if (array_1[i] == array_2[j]) { // If the item is common in both arrays
             commonArray.push(array_1[i]); // Push common items to the array
          }
       }
    }
    return commonArray; // Return the common items
 }

  handleChange(event){
    const {name,value} = event.target
    this.setState({ [name] : value} )
    console.log(value)
  }

handleFilter = () => {
  const filtered = sampleData.filter(user => user.name.includes(this.state.nameFilter));
  const filtered2 = sampleData.filter(user => user.age.includes(this.state.ageFilter));
  var commonItem= this.CommonItemsArray(filtered, filtered2);
  
  this.setState({filteredUsers: commonItem})
  console.log(commonItem)
};
  
  render() {
    const rows = sampleData.map((row) => {
      return (<Row key={row.id} rowData={row}/>)
    })

    const filteredRow = this.state.filteredUsers.map((row) => {
      return (<Row key={row.id} rowData={row}/>)
    })

    return (
      <div>
        <input type="text" placeholder='filter name' name="nameFilter" value={this.state.nameFilter} onChange={this.handleChange} />
        <input type="text" placeholder='filter age' name="ageFilter" value={this.state.ageFilter} onChange={this.handleChange}/>
        <button onClick={this.handleFilter}>Search</button>
        <button>Reset</button>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
          {rows}
        </table>
        <hr />
        <h1>
          Filtered Data
        </h1>
        <table>
          {filteredRow}
        </table>

      </div>
    )
  }
}
 