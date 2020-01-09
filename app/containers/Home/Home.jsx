import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Msg = styled.div`
color: #1c2392;
text-align: center;
`;
const LoginBtn = styled(Msg)`
color: #1c2392;
text-align: center;
padding: 20px;
a {
    border: 1px solid #1c2392;
    background-color: gray;
    color: #1c2392;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 10px 30px;
    border-radius: 25px;
}
`;
export const Home = () => (
  <div>
    <Msg> Welcome to the test App</Msg>
    <LoginBtn>
      <Link to="/login">Login</Link>
    </LoginBtn>
  </div>
);

export default Home;
