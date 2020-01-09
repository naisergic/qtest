import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormConatiner, InputConatiner, Input, CheckBox, SubmitBtn,
} from './styledComponents';
import ErrorComponent from '../common/Error/Error';
import RedirectComponent from '../common/Redirect/Redirect';
import {
  ERROR_MSG, CHECK_BOX_LABEL, EMAIL_LABEL, PASSWORD_LABEL, REDIRECT_ROUTE,
} from './constant';


export const Login = ({ submitHandler, isLoggedIn, isError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepMeSignIn, setKeepMeSignIn] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckBox = (e) => {
    setKeepMeSignIn(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(email, password, keepMeSignIn);
  };
  return (
    <>
      {isLoggedIn && <RedirectComponent to={REDIRECT_ROUTE} />}
      <Form Method="POST" onSubmit={submitHandler}>
        <FormConatiner>
          {isError && <ErrorComponent errorMsg={ERROR_MSG} />}
          <InputConatiner className="mb1">
            <label htmlFor="email" className="mb1">
              {' '}
              {EMAIL_LABEL}
            </label>
            <Input id="email" type="email" value={email} onChange={(e) => { handleEmailChange(e); }} />
          </InputConatiner>
          <InputConatiner className="mb1">
            <label htmlFor="password" className="mb1">{PASSWORD_LABEL}</label>
            <Input id="password" type="password" value={password} onChange={(e) => { handlePasswordChange(e); }} />
          </InputConatiner>
          <InputConatiner columnDirection="row">
            <div className="mb1">
              <CheckBox type="checkbox" onChange={(e) => { handleCheckBox(e); }} />
              {' '}
              <span>{CHECK_BOX_LABEL}</span>
            </div>
            <SubmitBtn type="button" value="Login" onClick={(e) => { handleSubmit(e); }} />
          </InputConatiner>
        </FormConatiner>
      </Form>
    </>
  );
};

Login.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Login;
