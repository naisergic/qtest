import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { LOGIN_COOKIE_NAME } from './constants';

const HomePage = lazy(() => Promise.all([
  import('./containers/Home/Home'),
  new Promise((resolve) => setTimeout(resolve, 300)),
]).then(([moduleExports]) => moduleExports));

const LoginPage = lazy(() => Promise.all([
  import('./containers/Login/Login'),
  new Promise((resolve) => setTimeout(resolve, 300)),
]).then(([moduleExports]) => moduleExports));

const UserDetailPage = lazy(() => Promise.all([
  import('./containers/UserDetail/UserDetail'),
  new Promise((resolve) => setTimeout(resolve, 300)),
]).then(([moduleExports]) => moduleExports));

const UserTable = lazy(() => Promise.all([
  import('./containers/UserTable/UserTable'),
  new Promise((resolve) => setTimeout(resolve, 300)),
]).then(([moduleExports]) => moduleExports));

const PrivateRoute = (props) => {
  const cookies = new Cookies();
  const tokenCookie = cookies.get(LOGIN_COOKIE_NAME);
  if (tokenCookie) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};


export default function createRoutes() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/users/:id" component={UserDetailPage} />
        <PrivateRoute exact path="/users" component={UserTable} />
      </Switch>
    </>
  );
}
