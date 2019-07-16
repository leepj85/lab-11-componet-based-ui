import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        <p> Count: {count}</p>
        <Button title={'+'} task={this.incrementCounter}></Button>
        <Button title={'-'} task={this.decrementCounter}></Button>
      </div>
    )
  }
}



export default class App extends Component {
  render() {
    return (
      < React.Fragment >
        <Counter></Counter>
      </React.Fragment >
    );
  }
}
