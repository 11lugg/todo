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

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.setState({
          user: null
        });
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  signInAndOut = () => {
    if (this.state.user === null) {
      return this.signIn;
    } else {
      return this.signOut;
    }
  };

  render() {
    const signIn = "Sign in with Google";
    const signOut = "Sign out";
    const signInAndOutText = this.state.user ? signOut : signIn;
    return (
      <div>
        <header>
          <h1>My To Do List</h1>
          <button onClick={this.signInAndOut()}>{signInAndOutText}</button>
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
