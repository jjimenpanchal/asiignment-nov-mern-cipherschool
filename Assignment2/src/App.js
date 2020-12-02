import logo from './logo.svg';
import './App.css';
import Pizza from './example';
import { Component } from 'react';

class App extends Component {
  state=
  {

    count:0
  }
  increment=()=>
  {
    let x=this.state.count
    // document.body.style.background='red'
    // document.App.style.background='blue'
    // document.div.style.background='blue'
    this.setState({
      count: x+1
    })
  }
  decrement=()=>
  {
    let x=1
    if (this.state.count>0)
    {
      x= this.state.count
    }
    this.setState(
      {
        count:x-1

      }
    )
  }
  generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  refresh=()=>{
    this.setState(
      {
        count:0
      }
    )
  }

  render(){
  return (
    <div className="App">
      
      <Pizza count={this.state.count} increment={this.increment} decrement={this.decrement} refresh={this.refresh} color ={this.generateRandomColor()}></Pizza>
      
    </div>
  )
  }
}

export default App;
