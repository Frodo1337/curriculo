import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//import {Route, BrowserRouter, Switch} from "react-router-dom";
import {Route, HashRouter} from "react-router-dom";

import Curriculo from "./Paginas/Curriculo";
import Portfolio from "./Paginas/Portfolio";

ReactDOM.render(
  /*
  <BrowserRouter>
    <Switch>
      <Route exact path = "/curriculo/home" component = {Curriculo}/>
      <Route exact path = "/curriculo/portfolio" component = {Portfolio}/>
      <Route render = {() => <div><center><h1>404 Error: Not Found</h1></center></div>}/>
    </Switch>
  </BrowserRouter>,
  */
  <HashRouter>
    <Route exact path = "/curriculo" component = {Curriculo}/>
    <Route exact path = "/portfolio" component = {Portfolio}/>
    <Route render = {() => <div><center><h1>404 Error: Not Found</h1></center></div>}/>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
