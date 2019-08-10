import React, { Component } from "react";
import styles from "./NameList.module.scss";

class NameList extends Component {
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
        <form action="" className={styles.nameList}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
            placeholder="Name your list...."
          />
          <input type="submit" value="Create" onClick={this.lockInputValue} />
        </form>
      );
    } else {
      return <h3 className={styles.namedList}>{this.state.showValue}</h3>;
    }
  };

  render() {
    return <section>{this.removeInput()}</section>;
  }
}

export default NameList;
