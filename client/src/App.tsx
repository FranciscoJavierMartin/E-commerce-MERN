import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/nav/Header';
import {
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_COMPLETE_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from './constants/routes';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} component={Home} />
        <Route exact path={LOGIN_PAGE_ROUTE} component={Login} />
        <Route exact path={REGISTER_PAGE_ROUTE} component={Register} />
        <Route exact path={REGISTER_COMPLETE_PAGE_ROUTE} component={RegisterComplete} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
