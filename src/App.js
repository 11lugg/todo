import React from "react";
import "./App.css";
import ListContainer from "./containers/ListContainer";

function App() {
  return (
    <div>
      <header>
        <h1>My To Do List</h1>
      </header>
      <main className="App">
        <ListContainer />
        <ListContainer />
        <ListContainer />
        <ListContainer />
      </main>
    </div>
  );
}

export default App;
