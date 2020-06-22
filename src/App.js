import React, { useEffects } from "react";
import "./App.scss";
import store from "./store";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/landing/HomePage";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import ResetPassword from "./components/auth/ResetPassword";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Store from "./components/store/Store";
import ClothPage from "./components/cloth/ClothPage";
import { authenticate } from "./actions/auth";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/resetpass" component={ResetPassword} />
          <Route exact path="/store/:pagination" component={Store} />
          <Route exact path="/cloth/:id" component={ClothPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
