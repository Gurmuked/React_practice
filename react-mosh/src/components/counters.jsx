import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
 

  render() { 

    const {onReset,counters, onIncrement, onDelete, onDecrement} = this.props;
    return (
    
      <div>
          <button onClick={onReset} 
            className="w-50 h-8 bg-blue-500 text-white rounded-md ml-15 mt-10 mb-5">
            Reset
          </button>
        {counters.map(counter =>( 
          <Counter 
            key={counter.id} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement} 
            onDelete={onDelete} 
            counter={counter} />
          ))}
      </div>
    ); 
  }
}
 
export default Counters;