import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import HeaderDiv from './styledComponent';
import {
  LOGIN_ROUTE, LOGIN_TEXT, LOGOUT_TEXT, LOGOUT_ROUTE,
} from './constant';
import { LOGIN_COOKIE_NAME } from '../../constants';

const Header = ({ makeLogout }) => {
  const cookies = new Cookies();
  const checkCookie = cookies.get(LOGIN_COOKIE_NAME);
  let route = LOGIN_ROUTE;
  let text = LOGIN_TEXT;
  if (checkCookie) {
    text = LOGOUT_TEXT;
    route = LOGOUT_ROUTE;
  }
  const handleClick = () => {
    cookies.remove(LOGIN_COOKIE_NAME);
    makeLogout();
  };
  return (
    <HeaderDiv>
      <Link to={route} onClick={handleClick}>{text}</Link>
    </HeaderDiv>
  );
};
Header.propTypes = {
  makeLogout: PropTypes.func.isRequired,
};
export default Header;
