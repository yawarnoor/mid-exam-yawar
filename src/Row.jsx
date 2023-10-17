import React, { Component } from 'react'

export default class Row extends Component {
  
    render() {
    return (
      <tr>
        <th>{this.props.rowData.id}</th>
        <th>{this.props.rowData.name}</th>
        <th>{this.props.rowData.age}</th>
        <th>{this.props.rowData.city}</th>
        <th>{this.props.rowData.occupation}</th>
      </tr>
    )
  }
}
