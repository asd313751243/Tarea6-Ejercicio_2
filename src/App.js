import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import ButtonOp from './Components/ButtonOp';
import ButtonEq from './Components/ButtonEq';
import Input from './Components/Input'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input:""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
            <Input input={this.state.input}></Input>
          <div className = "row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <ButtonOp>/</ButtonOp>
          </div>
          <div className = "row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <ButtonOp>*</ButtonOp>
          </div>
          <div className = "row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <ButtonOp>-</ButtonOp>
          </div>
          <div className = "row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>c</Button>
            <ButtonOp>+</ButtonOp>
          </div>
          <div className = "row">
            <ButtonEq>=</ButtonEq>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
