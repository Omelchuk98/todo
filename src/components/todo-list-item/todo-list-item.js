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
            <span
               className="todo-list-item-label"
               onClick={onToggleDone}>
               {label}
            </span>
            <div>
               <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDeleted}>
                  <i className="fa fa-minus" />
               </button>

               <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onToggleImportant}>
                  <i className="fa fa-plus" />
               </button>
            </div>
         </div>
      );
   };
}