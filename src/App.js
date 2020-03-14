import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import ButtonOp from './Components/ButtonOp';
import ButtonCl from './Components/ButtonCl'
import ButtonEq from './Components/ButtonEq';
import Input from './Components/Input'
//Una libreria para hacer evaluaciones de operaciones matematicas
import * as math from 'mathjs';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input:""
    };
  }

  
  Clear = () => {
    this.setState({
      input: ""
    })
  }

  ToInput = (val) => {
      this.setState({
        input: this.state.input + val
      })
  }

  OpToInput = (val) => {
    if(this.state.input.charAt(this.state.input.length-1) === "/" ||
    this.state.input.charAt(this.state.input.length-1) === "*" ||
    this.state.input.charAt(this.state.input.length-1) === "-" ||
    this.state.input.charAt(this.state.input.length-1) === "+" ||
    this.state.input.charAt(this.state.input.length-1) === ""){
      val="";
    }
    else{
      this.setState({
        input: this.state.input + val
      })
    }

  }

  PunToInput = (val) => {
    if(this.state.input.indexOf('.') != -1){
      val = "";
    }
    if(this.state.input == ""){
      this.state.input = 0;
    }
    this.setState({
      input: this.state.input + val
    })
  }

  Calc = () => {

    if(this.state.input.charAt(this.state.input.length-1) === "/" ||
    this.state.input.charAt(this.state.input.length-1) === "*" ||
    this.state.input.charAt(this.state.input.length-1) === "-" ||
    this.state.input.charAt(this.state.input.length-1) === "+" ||
    this.state.input.length <= 0){

      return null;

    }
    else{
      let history = {
        Operation: this.state.input,
        Result: math.evaluate(this.state.input)
      }

      if(localStorage.getItem('Histories') == null){
        let histories = [];
        histories.push(history);
        localStorage.setItem("Histories", JSON.stringify(histories));
      }
      else{
        let histories = JSON.parse(localStorage.getItem('Histories'));
        histories.push(history);
        localStorage.setItem("Histories", JSON.stringify(histories));
      }

      this.setState({
        input: math.evaluate(this.state.input)
      })
    }
  }

  render() {
    return (
      <div className="App">  
        <div className="calc-wrapper">
          <div className="row">
            <Input input={this.state.input}></Input>
          </div>
          <div className = "row">
            <Button handleClick={this.ToInput}>7</Button>
            <Button handleClick={this.ToInput}>8</Button>
            <Button handleClick={this.ToInput}>9</Button>
            <ButtonOp handleClick={this.OpToInput}>/</ButtonOp>
          </div>
          <div className = "row">
            <Button handleClick={this.ToInput}>4</Button>
            <Button handleClick={this.ToInput}>5</Button>
            <Button handleClick={this.ToInput}>6</Button>
            <ButtonOp handleClick={this.OpToInput}>*</ButtonOp>
          </div>
          <div className = "row">
            <Button handleClick={this.ToInput}>1</Button>
            <Button handleClick={this.ToInput}>2</Button>
            <Button handleClick={this.ToInput}>3</Button>
            <ButtonOp handleClick={this.OpToInput}>-</ButtonOp>
          </div>
          <div className = "row">
            <Button handleClick={this.PunToInput}>.</Button>
            <Button handleClick={this.ToInput}>0</Button>
            <ButtonCl handleClear={this.Clear}>c</ButtonCl>
            <ButtonOp handleClick={this.OpToInput}>+</ButtonOp>
          </div>
          <div className = "row">
            <ButtonEq handleEqual={this.Calc}>=</ButtonEq>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
