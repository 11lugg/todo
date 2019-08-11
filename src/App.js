import React, { Component } from "react";
import "./App.css";
import ListContainer from "./containers/ListContainer";
import firebase, { provider } from "./firebase";

class App extends Component {
  state = {
    user: null,
    error: {}
  };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <header>
          <h1>My To Do List</h1>
          <button onClick={this.signIn}>Sign in with Google</button>
        </header>
        <main className="App">
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
          <ListContainer />
        </main>
      </div>
    );
  }
}

export default App;
