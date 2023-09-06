import React, { Component } from 'react'

export default class VegtablesFile extends Component {
  render() {
    let{name,price,category,stocked}=this.props.data;
    return (<>
       {(category=='Vegetables')?<tr><td className={!stocked?'text-danger':''}>{name}</td><td>{price}</td></tr>:''}
      </>
    )
  }
}
