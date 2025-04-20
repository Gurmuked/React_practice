import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
 

  render() { 
    return (
      <div>
          <button onClick={this.props.onReset} 
            className="w-50 h-8 bg-blue-500 text-white rounded-md ml-15 mt-10 mb-5">
            Reset
          </button>
        {this.props.counters.map(counter =>( 
          <Counter 
            key={counter.id} 
            onIncrement={this.props.onIncrement} 
            onDelete={this.props.onDelete} 
            counter={counter} />
          ))}
      </div>
    ); 
  }
}
 
export default Counters;