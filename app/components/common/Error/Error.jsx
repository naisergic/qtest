import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorComp = styled.div`
color: red;
`;
const Error = ({ errorMsg }) => (
  <ErrorComp>{errorMsg}</ErrorComp>
);

Error.propTypes = {
  errorMsg: PropTypes.string,
};

Error.defaultProps = {
  errorMsg: 'There is some error please check the values',
};

export default Error;
