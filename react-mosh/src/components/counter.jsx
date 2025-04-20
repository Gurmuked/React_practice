import React, { Component } from "react";

class Counter extends Component {

  formatCount = () =>{
    const {value} = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgeClasses(){
    let classes = "inline-block px-2 py-1 rounded m-2 text-white w-15 h-8 ";
        classes += (this.props.counter.value) === 0 ? "bg-yellow-500" : "bg-blue-500";
        return classes;
      }

  render() { 

    return (<div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.props.onIncrement(this.props.counter)} 
               className="w-30 h-8 bg-gray-600 text-white rounded-md">
               Increment
          </button>
          <button onClick={() => this.props.onDelete(this.props.conuter.id)} 
               className="w-30 h-8 bg-red-600 text-white rounded-md">
               Delete
          </button>
       </div>);
  }
}
 
export default Counter;