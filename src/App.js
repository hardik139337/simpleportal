import "./App.css";
import React, { useState } from "react";
import Header from "./com/header";
import { Route, Switch } from "react-router-dom";
import Login from "./com/login";
import Signup from "./com/Signup";
import Dashboard from "./com/dashboard";
import Add from "./com/add";
import Dashboardedit from "./com/Dashboardedit";
import Details from "./com/Details";
import Islogin from "./com/route";

function App() {
  const [items, setitems] = useState([
    { id: 1, name: "Mark", price: "5", detail: "detail of mark" },
    { id: 2, name: "Mark", price: "5", detail: "detail of mark" },
    { name: "Mark", price: "5", detail: "detail of mark", id: 3 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 4 },
    { name: "garf", price: "5", detail: "detail of mark", id: 5 },
    { name: "aga", price: "5", detail: "detail of mark", id: 5 },
    { name: "afsga", price: "5", detail: "detail of mark", id: 6 },
    { name: "ragar", price: "5", detail: "detail of mark", id: 7 },
    { name: "ragaer", price: "5", detail: "detail of mark", id: 8 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 9 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 10 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 11 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 12 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 13 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 14 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 15 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 16 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 17 },
    { name: "Mark", price: "5", detail: "detail of mark", id: 18 },
  ]);

  let additem = (item) => {
    setitems([...items, item]);
  };
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/" component={Login} /> */}

        <Islogin>
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard">
            <Dashboard items={items}></Dashboard>
            {/* <Add additem={additem}></Add> */}
          </Route>
          <Route path="/edit">
            <div style={{ height: "20px" }}></div>

            <Add additem={additem}></Add>
            <div style={{ height: "20px" }}></div>
            <Dashboardedit items={items} setitems={setitems}></Dashboardedit>
          </Route>
          <Route path="/Details/:id">
            <Details items={items} setitems={setitems}></Details>
          </Route>
        </Islogin>
      </Switch>
    </div>
  );
}

export default App;
