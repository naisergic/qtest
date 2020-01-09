import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const RedirectTo = ({ to }) => (
  <Redirect to={to} />
);
RedirectTo.propTypes = {
  to: PropTypes.string.isRequired,
};
export default RedirectTo;
