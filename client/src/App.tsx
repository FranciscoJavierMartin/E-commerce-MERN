import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from './constants/routes';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} component={Home} />
        <Route exact path={LOGIN_PAGE_ROUTE} component={Login} />
        <Route exact path={REGISTER_PAGE_ROUTE} component={Register} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
