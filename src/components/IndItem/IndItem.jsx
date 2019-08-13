import React, { Component } from "react";
import styles from "./IndItem.module.scss";

class IndItem extends Component {
  state = {
    checked: false,
    filteredItems: []
  };
  handleClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const complete = { textDecorationLine: "line-through", color: "grey" };
    const notComplete = { color: "black" };
    const isTaskComplete = this.state.checked ? complete : notComplete;
    return (
      <li>
        <input type="checkbox" onClick={this.handleClick} />
        <span style={isTaskComplete}>{this.props.item}</span>
      </li>
    );
  }
}

export default IndItem;
