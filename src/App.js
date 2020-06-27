import React from 'react';
import { Provider } from "react-redux";
import store from './stores/vmboxes.js';
import VMBoxes from './components/VMBoxes.jsx';
import VMBoxDetail from './components/VMBoxDetail.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <ViewVMBoxes />
          </Route>
          <Route path="/detail">
            <ViewVMBoxDetail />
          </Route>
      </Switch>
    </Router>
  );
}

// VMBoxes View

function ViewVMBoxes() {
  return (
    <Provider store={store}>
      <main>
        <VMBoxes />
      </main>
    </Provider>
  )
}

// VMBox Detail View

function ViewVMBoxDetail() {
  console.log(useLocation());

  return (
    <Provider store={store}>
      <main>
        <VMBoxDetail />
      </main>
    </Provider>
  )
}

export default App;
