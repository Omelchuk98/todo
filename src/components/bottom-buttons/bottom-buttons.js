import React, { Component } from "react";
import './bottom-buttons.css';


export default class BottomButtons extends Component {
   render() {
      const { onDeleteButtons, onDeleteDone } = this.props;
      return (
         <div className="bottom__buttons d-flex">
            <button type="button"
               className="btn btn-outline-secondary"
               onClick={() => onDeleteDone()}>
               Delete done tasks
            </button>

            <button type="button"
               className="btn btn-outline-secondary"
               onClick={() => onDeleteButtons()}>
               Delete all tasks
            </button>
         </div>
      )
   }
}