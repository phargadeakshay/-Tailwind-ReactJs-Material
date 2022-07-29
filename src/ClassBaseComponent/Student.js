import React, { Component } from "react";

export default class Student extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChecked = this.handleChecked.bind(this);
  }
  handleChecked() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    var msg;
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
      <div>
        <section>
          <input
            type="checkbox"
            onChange={this.handleChecked}
            defaultChecked={this.state.checked}
          />
          <h1>Checkbox is {msg}</h1>
        </section>
      </div>
    );
  }
}

// class Child extends Component {
//   // state = {
//   //   counter: this.props.value,
//   // };

//   constructor() {
//     super();
//   }
//   render() {
//     return <div>{this.props.name}</div>;
//   }
// }
