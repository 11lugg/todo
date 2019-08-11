import React, { Component } from "react";
import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { grey } from "ansi-colors";

class ListItem extends Component {
  state = {
    term: "",
    items: [],
    isComplete: false
  };

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  listItems = () => {
    const complete = { textDecorationLine: "line-through", color: "grey" };
    const notComplete = { color: "black" };
    const isTaskComplete = this.state.isComplete ? complete : notComplete;
    return this.state.items.map((item, index) => (
      <li key={index} style={isTaskComplete}>
        <FontAwesomeIcon icon={faStop} onClick={this.completeTask} /> {item}
      </li>
    ));
  };

  completeTask = () => {
    this.setState({ isComplete: !this.state.isComplete });
  };

  render() {
    return (
      <section className={styles.listWrapper}>
        <form onSubmit={this.onSubmit} className={styles.listItem}>
          <input
            value={this.state.term}
            onChange={this.onChange}
            placeholder="Name your task...."
          />
          <input type="submit" />
        </form>
        <ul>{this.listItems()}</ul>
      </section>
    );
  }
}

export default ListItem;
