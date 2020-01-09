import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, TD, PageBtnConatiner } from './styledComponents';
import { USER_DETAIL_ROUTE, PAGINATION_ROUTE, TABLE_HEADERS } from './constants';

export const UserTable = ({ tableData, totalPages, page }) => {
  const data = tableData && Array.isArray(tableData[page]) > 0 && tableData[page].map((item) => (
    <tr>
      <td>
        <Link to={`${USER_DETAIL_ROUTE}${item.id}`}>
          <Image className="mb1" alt="user" src={item.avatar} />
        </Link>
      </td>
      <TD>{`${item.first_name} ${item.last_name}`}</TD>
      <TD>{item.email}</TD>
    </tr>
  ));
  const numberOfPagesAvailable = [];
  for (let i = 0; i < totalPages; i += 1) {
    numberOfPagesAvailable[i] = i + 1;
  }
  const paginationBtns = numberOfPagesAvailable.map((item, index) => (
    <Link to={`${PAGINATION_ROUTE}${index + 1}`}>{`${index + 1}`}</Link>
  ));
  return (
    <div>
      <table className="mb1">
        <tr>
          <th>{TABLE_HEADERS[0]}</th>
          <th>{TABLE_HEADERS[1]}</th>
          <th>{TABLE_HEADERS[2]}</th>
        </tr>
        {data}
      </table>
      <PageBtnConatiner>
        {paginationBtns}
      </PageBtnConatiner>
    </div>
  );
};

UserTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  totalPages: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default UserTable;
