import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </main>
  );
}

export default App;
