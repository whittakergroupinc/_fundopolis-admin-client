/*!

=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import RtlLayout from "layouts/RTL.js";
import AdminLayout from "layouts/Admin.js";
import { Auth0Provider } from "./utils/react-auth0-spa";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

// console.log(React.version);

const hist = createBrowserHistory();

// const onRedirectCallback = appState => {
//   Router.push(
//     appState && appState.targetUrl ? appState.targetUrl : '/admin'
//   );
// };

ReactDOM.render(
  <Auth0Provider
    domain={"fundopolis-dev.auth0.com"}
    client_id={"hR9FTtYqQ7jmWVNFXCG6ECFuvoS3NMjl"}
    redirect_uri={"http://localhost:3000"}
    onRedirectCallback={"http://localhost:3000/admin"}
  >
    <Router history={hist}>
      <Switch>
        <Route path="/rtl" component={RtlLayout} />
        <Route path="/auth" component={AuthLayout} />
        <Route path="/admin" component={AdminLayout} />
        <Redirect from="/" to="/auth" />
      </Switch>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);
