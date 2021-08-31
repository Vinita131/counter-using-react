
import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        
       <div class="container">  

            <div class="box">  

                <div class="box-row"> 
         
          
          <div class="buttons box-cell">
            <Button title={"-"} action={this.decrementCount} />
         </div>
            <div class="count box-cell box2">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
           <div class="buttons box-cell ">
            <Button title={"+"} action={this.incrementCount} />
          </div>
      </div>
     </div>
    </div>
    </div>
    );
  }
}

