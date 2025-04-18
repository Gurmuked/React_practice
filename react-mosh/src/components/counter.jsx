import React, { Component } from 'react';
class Conuter extends Component {
  state = { 
    count:4,
    tags:['tags1', 'tags2', 'tags3']
  } ;
  handleIcrement = () =>{
    const {count} = this.state;
    return this.state.count === 0 ? "zero" : count;

  }

  getBadgeClasses(){
    let classes = "inline-block px-2 py-1 rounded m-2 text-white ";
 classes += this.state.count === 0 ? "bg-yellow-500" : "bg-blue-500";
;
    return classes;
  }

  render() { 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this. handleIcrement()}</span>
         <button className="w-30 h-8 bg-gray-600 text-white rounded-md">Increment</button>
          <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
      </div>
    );
  }
}
 
export default Conuter;