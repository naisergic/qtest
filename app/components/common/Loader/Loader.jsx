import React from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
position:fixed;
background-color: dary-gray;
z-index: 1000
top: 0;
background-color: azure;
height:100%;
width:100%;    
text-align: center;
padding-top: 20%;
`;
const Loader = () => (
  <LoadingDiv>Loading...</LoadingDiv>
);

export default Loader;
