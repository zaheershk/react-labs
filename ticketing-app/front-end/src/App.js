import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/shared/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/main/dashboard/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar></Navbar>
          <div className="App container">
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/' component={Login} />
              <Route exact path='/sign-in' component={Login} />
              <Route exact path='/sign-up' component={Register} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
