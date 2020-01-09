import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserDetailComponent from '../../components/UserDetail/UserDetail';
import { fetchUserDetail } from './actions';

export const UserDetail = (props) => {
  const [userData, setuserData] = useState({});
  const { location, data } = props;
  const { pathname } = location;
  const id = pathname.slice(pathname.lastIndexOf('/') + 1);
  useEffect(() => {
    if (data && !data[id]) {
      props.getUserDetail(id);
    }
  }, [location]);
  useEffect(() => {
    setuserData(data);
  }, [data]);
  
  return (<UserDetailComponent {...userData[id]} userId={id} />);
};

const mapStateToProps = (state) => ({
  data: state.get('userDetail').data,
});

const mapDispathToProps = (dispatch) => ({
  getUserDetail: (id) => dispatch(fetchUserDetail(id)),
});


UserDetail.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  getUserDetail: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispathToProps)(UserDetail));
