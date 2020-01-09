import React from 'react';
import PropTypes from 'prop-types';
import {
  DivContainer, DivWithBg, Image, PersonalDiv,
} from './styledComponents';


export const UserDetail = ({
  first_name, last_name, detail, detail2, phoneNumber, email, avatar,
}) => (
  <DivContainer>
    <DivWithBg>
      <Image className="mb1" alt="user" src={avatar} />
      <div className="mb1">{`Mr. ${first_name} ${last_name}`}</div>
      <div>{detail}</div>
      <div className="mb1">{detail2}</div>
      <PersonalDiv>
        <div>{phoneNumber}</div>
        <div>{email}</div>
      </PersonalDiv>
    </DivWithBg>
  </DivContainer>
);

UserDetail.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  detail2: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

UserDetail.defaultProps = {
  detail: 'Co-founder & CEO at Bravo Incorporation',
  detail2: '(It enabled service)',
  phoneNumber: '+17899048786',
};

export default UserDetail;
