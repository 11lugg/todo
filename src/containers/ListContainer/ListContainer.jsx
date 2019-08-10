import React, { Component } from "react";
import styles from "./ListContainer.module.scss";
import NameList from "../../components/NameList";
import ListItem from "../../components/ListItem";

class ListContainer extends Component {
  state = {};
  render() {
    return (
      <div className={styles.listContainer}>
        <NameList />
        <ListItem />
      </div>
    );
  }
}

export default ListContainer;
