import React, { Component } from 'react'

export default class About extends Component {

  render() {
    let{name,price,category,stocked}=this.props.data;
    return (<>
       {(category=='Fruits')?<tr><td className={!stocked?'text-danger':''}>{name}</td><td>{price}</td></tr>:''}
      </>
    )
  }
}
