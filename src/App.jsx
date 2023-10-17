import React, { Component } from 'react'
import sampleData from './sampleData.jsx'
import Row from './Row.jsx'

export default class App extends Component {
  
  
  render() {
    const rows = sampleData.map((row) => {
      return (<Row rowData={row}/>)
    })

    return (
      <div>
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
      </div>
    )
  }
}
