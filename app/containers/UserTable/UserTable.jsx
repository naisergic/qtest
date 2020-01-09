import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'qs';
import pathOr from 'lodash/fp/pathOr';

import UserTableComponent from '../../components/UserTable/UserTable';
import { fetchUserTable } from './actions';

export const UserTable = (props) => {
  const { location, totalPages } = props;
  const search = pathOr('', 'search', location);
  const pageOption = qs.parse(search, { ignoreQueryPrefix: true });
  const { page } = pageOption;
  const { data } = props;
  const [tableData, setTableData] = useState({});
  useEffect(() => {
    if (data && !data[page]) {
      props.getUserTable(page);
    }
  }, [location]);
  useEffect(() => {
    setTableData(data);
  }, [data]);
  return (<UserTableComponent tableData={tableData} totalPages={totalPages} page={page} />);
};

const mapStateToProps = (state) => ({
  data: state.get('tableData').data,
  totalPages: state.get('tableData').totalPages,
});

const mapDispathToProps = (dispatch) => ({
  getUserTable: (pageNumber) => dispatch(fetchUserTable(pageNumber)),
});

UserTable.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  getUserTable: PropTypes.func.isRequired,
  totalPages: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispathToProps)(UserTable));
