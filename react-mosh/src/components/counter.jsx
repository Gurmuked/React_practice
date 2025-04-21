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

    return (<div className="flex">
       <div className="col-1">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
       </div>
      <div className="col">
      <button onClick={() => this.props.onIncrement(this.props.counter)} 
               className="w-20 h-8 bg-gray-600 text-white text-4xl items-center text-center rounded-md">
               +
          </button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} 
               className="w-20 h-8 bg-gray-600 text-white text-4xl items-center text-center rounded-md m-2"
                disabled = {this.props.counter.value === 0 ? "disabled" : ""}>
               -
          </button>
          <button onClick={() => this.props.onDelete(this.props.conuter)} 
               className="w-20 h-8 bg-red-600 text-white rounded-md text-4xl items-center text-center">
               X
          </button>
      </div>  
       </div>);
  }
}
 
export default Counter;