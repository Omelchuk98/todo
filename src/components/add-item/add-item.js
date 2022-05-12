import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
   render() {
      return (
         <div className="add-item">
            <button type='button' className="btn btn-outline-secondary"
               onClick={() => this.props.onItemAdded('Hello world')}>
               Add Item
            </button>
         </div>
      )
   }
}