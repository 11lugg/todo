import React, { Component } from "react";
import styles from "./InputField.module.scss";

class InputField extends Component {
  state = { inputValue: "", showValue: "", isInputVisible: true };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleInputChange = () => {
    this.setState({ isInputVisible: !this.state.isInputVisible });
  };

  lockInputValue = event => {
    event.preventDefault();
    this.setState({ showValue: this.state.inputValue });
    this.setState({ inputValue: "" });
    this.handleInputChange();
  };

  removeInput = () => {
    if (this.state.isInputVisible) {
      return (
        <form action="">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
          <input
            type="submit"
            value="Create Task"
            onClick={this.lockInputValue}
          />
        </form>
      );
    }
  };

  render() {
    return (
      <div>
        {this.removeInput()}
        <h3>{this.state.showValue}</h3>
      </div>
    );
  }
}

export default InputField;
