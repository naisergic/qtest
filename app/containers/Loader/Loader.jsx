import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoaderComponent from '../../components/common/Loader/Loader';

const Loader = (props) => {
  const { numberOfCalls } = props;
  if (numberOfCalls > 0) {
    return (<LoaderComponent />);
  }
  return null;
};

const mapStateToProps = (state) => ({
  numberOfCalls: state.get('global').callNumber,
});

Loader.propTypes = {
  numberOfCalls: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Loader);
