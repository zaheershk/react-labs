import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './components/shared/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/main/dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App container">
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/' component={Login} />
            <Route exact path='/sign-in' component={Login} />
            <Route exact path='/sign-up' component={Register} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
