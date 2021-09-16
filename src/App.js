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
import I18n from "./com/i18n";
import Home from "./com/home";
import Temp from "com2/temp";
function App() {
  const [islogin, setIslogin] = useState(false);
  const [items, setitems] = useState([
    { id: 1, name: "Mark", price: 2, detail: "detail of mark" },
    { id: 2, name: "Mark", price: 7, detail: "detail of mark" },
    { name: "Mark", price: 5, detail: "detail of mark", id: 3 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 4 },
    { name: "garf", price: 5, detail: "detail of mark", id: 5 },
    { name: "aga", price: 5, detail: "detail of mark", id: 5 },
    { name: "afsga", price: 5, detail: "detail of mark", id: 6 },
    { name: "ragar", price: 5, detail: "detail of mark", id: 7 },
    { name: "ragaer", price: 5, detail: "detail of mark", id: 8 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 9 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 10 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 11 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 12 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 13 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 14 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 15 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 16 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 17 },
    { name: "Mark", price: 5, detail: "detail of mark", id: 18 },
  ]);
  let additem = (item) => {
    setitems([...items, item]);
  };
  return (
    <div>
      <I18n></I18n>
      <Header {...{ islogin, setIslogin }}></Header>
      <div className="ms-5" style={{ width: "60%" }}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/temp" component={Temp} exact />

          <Route path="/signup" component={Signup} />
          <Route path="/login">
            <Login {...{ islogin, setIslogin }}></Login>
          </Route>

          <Islogin>
            <Route path="/dashboard">
              <Dashboard items={items} setitems={setitems}></Dashboard>
            </Route>
            <Route path="/edit">
              <div style={{ height: "20px" }}></div>

              <Add {...{ additem }}></Add>
              <div style={{ height: "20px" }}></div>
              <Dashboardedit {...{ items, setitems }}></Dashboardedit>
            </Route>
            <Route path="/Details/:id">
              <Details {...{ items, setitems }}></Details>
            </Route>
          </Islogin>
        </Switch>
      </div>
    </div>
  );
}

export default App;
