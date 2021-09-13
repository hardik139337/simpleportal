import "./App.css";
import React, { useState } from "react";
import Header from "./com/header";
import { Route, Switch } from "react-router-dom";
import Login from "./com/login";
import Signup from "./com/Signup";
import Dashboard from "./com/dashboard";
import Add from "./com/add";
import Dashboardedit from "./com/Dashboardedit";
function App() {
  const [items, setitems] = useState([
    { name: "Mark", price: "5", detail: "detail of mark" },
    { name: "Mark", price: "5", detail: "detail of mark" },
    { name: "Mark", price: "5", detail: "detail of mark" },
  ]);

  let additem = (item) => {
    setitems([...items, item]);
  };
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard">
          <Dashboard items={items}></Dashboard>
          {/* <Add additem={additem}></Add> */}
        </Route>
        <Route path="/edit">
          <Dashboardedit items={items} setitems={setitems}></Dashboardedit>

          <Add  additem={additem}></Add>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
