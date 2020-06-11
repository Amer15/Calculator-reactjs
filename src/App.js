import React, { Component } from 'react';
import Result from './components/Result/Result';
import Button from './components/Button/Button';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }

  }

  // functions - calculate , clear/reset, delete
  calculate = () => {
    try {
      let currentResult = this.state.result;
      let calculatedResult;

      if (currentResult.includes('/')) {
        calculatedResult = eval(currentResult).toFixed(2);
      }
      else {
        calculatedResult = eval(currentResult);
      }

      this.setState({
        result: calculatedResult
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };


  onClickHandler(e) {
    // console.log(e.target.innerText);
    let button;
    if (e.target.innerText === "x") {
      button = "*";
    }
    else if (e.target.innerText === "÷") {
      button = "/";
    }
    else {
      button = e.target.innerText;
    }

    if (button === "=") {
      this.calculate();
    }
    else if (button === "CE") {
      this.reset();
    }
    else if (button === "C") {
      this.backspace();
    }
    else {
      this.setState({
        result: this.state.result + button
      });
    }

  };



  render() {
    return (
      <div className="main-container">
        <div className="calculator-container">
          <Result result={this.state.result} />
          <div className="controls-container">
            <div className="row">
              <Button onclick={e => this.onClickHandler(e)}>CE</Button>
              <Button onclick={e => this.onClickHandler(e)}>(</Button>
              <Button onclick={e => this.onClickHandler(e)}>)</Button>
              <Button onclick={e => this.onClickHandler(e)}>C</Button>
            </div>
            <div className="row">
              <Button onclick={e => this.onClickHandler(e)}>1</Button>
              <Button onclick={e => this.onClickHandler(e)}>2</Button>
              <Button onclick={e => this.onClickHandler(e)}>3</Button>
              <Button onclick={e => this.onClickHandler(e)}>+</Button>
            </div>
            <div className="row">
              <Button onclick={e => this.onClickHandler(e)}>4</Button>
              <Button onclick={e => this.onClickHandler(e)}>5</Button>
              <Button onclick={e => this.onClickHandler(e)}>6</Button>
              <Button onclick={e => this.onClickHandler(e)}>-</Button>
            </div>
            <div className="row">
              <Button onclick={e => this.onClickHandler(e)}>7</Button>
              <Button onclick={e => this.onClickHandler(e)}>8</Button>
              <Button onclick={e => this.onClickHandler(e)}>9</Button>
              <Button onclick={e => this.onClickHandler(e)}>x</Button>
            </div>
            <div className="row">
              <Button onclick={e => this.onClickHandler(e)}>.</Button>
              <Button onclick={e => this.onClickHandler(e)}>0</Button>
              <Button onclick={e => this.onClickHandler(e)}>=</Button>
              <Button onclick={e => this.onClickHandler(e)}>÷</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
