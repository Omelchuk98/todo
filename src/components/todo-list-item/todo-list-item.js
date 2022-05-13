import React, { Component } from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {

   render() {
      const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
      let classNames = 'todo-list-item';
      if (done) {
         classNames += ' done';
      }
      if (important) {
         classNames += ' important'
      }
      return (
         <div className={classNames}>
            <div
               className="todo-list-item-label"
               onClick={onToggleDone}>
               {label}
            </div>
            <div>
               <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDeleted}>
                  <span>&#215;</span>
               </button>

               <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onToggleImportant}>
                  <span>&#33;</span>
               </button>
            </div>
         </div>
      );
   };
}
