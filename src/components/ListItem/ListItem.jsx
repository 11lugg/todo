import React, { Component } from "react";
import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

class ListItem extends Component {
  state = {
    term: "",
    items: [],
    complete: false
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
    return this.state.items.map((item, index) => (
      <li type="radio" key={index}>
        <FontAwesomeIcon icon={faCheckSquare} onClick={this.completeTask} />{" "}
        {item}
      </li>
    ));
  };

  completeTask = () => {
    this.setState({ complete: !this.state.complete });
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
