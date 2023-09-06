import React, { Component } from 'react'
import FruitsFile from './FruitsFile'
import VegtablesFile from './VegtablesFile'

export default class Home extends Component {

  state={
    ischecked:false,
  products:[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  }
  
  render() {
    return (
      <div className='m-5'>
      <input type='text' placeholder='search ..'></input>
      <br/>
      <input type="checkbox"/>
      <span>only show products in stock</span>
      <table>
        <th>
          <td>Name</td>
          <td>Price</td>
        </th>
        <tr className='text-center fw-bold'>
          <td>Fruits</td>
        </tr>
        {this.state.products.map((prod)=><FruitsFile data={prod}/>)}
        <tr className='text-center fw-bold'><td>Vegtables</td></tr>
        {this.state.products.map((prod)=><VegtablesFile data={prod}/>)}
      </table>
      </div>
    )
  }
}
