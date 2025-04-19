import React, { Component } from "react";

class Counter extends Component {
  state = { 
    value:this.props.value
   };

  formatCount = () =>{
    return this.state.value === 0 ? "zero" : this.state.value;
  }

  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  }

  getBadgeClasses(){
    let classes = "inline-block px-2 py-1 rounded m-2 text-white w-15 h-8 ";
        classes += (this.state.value) === 0 ? "bg-yellow-500" : "bg-blue-500";
        return classes;
      }



  render() { 

    return (<div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={() => this.handleIncrement()} 
               className="w-30 h-8 bg-gray-600 text-white rounded-md">
               Increment
          </button>
       </div>);
  }
}
 
export default Counter;