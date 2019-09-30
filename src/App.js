import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ContactData from "./containers/ContactData/ContactData";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/" exact component={ContactData} />
        </Switch>
      </div>
    );
  }
}

export default App;
