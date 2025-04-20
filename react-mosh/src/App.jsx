import React, {Component} from 'react';
import Counters from './components/counters';
import Movies from './components/Movies';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    counters:[
      {id:1, value:0},
      {id:2, value:4},
      {id:3, value:0},
      {id:4, value:0},
    ]
  } ;
  
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleDelete =(counterId)=>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }
  handleReset =()=>{
    const counters = this.state.counters.map(c =>{
      c.value= 0;
      return c;
    });
    this.setState({counters});
  }
render(){
  return (
    <React.Fragment>
      <Movies />
      <NavBar totalCountres={this.state.counters.filter(c => c.value>0).length}/>
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}  
      onIncrement={this.handleIncrement} 
      onDelete={this.handleDelete}
      />
      
    </React.Fragment>
  )
}
}
export default App
