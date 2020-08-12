import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter, Switch} from "react-router-dom";

import Home from "./Paginas/Curriculo";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = "/curriculo" component = {Home}/>
      <Route render = {() => <div><center><h1>404 Error: Not Found</h1></center></div>}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
