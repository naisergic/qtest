import styled from 'styled-components';

export const Image = styled.img`
height: 100px;
width: 100px;
border-radius: 50px;
`;
export const DivContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
@media (max-width: 767px) {
    height: 60%
  }
`;
export const DivWithBg = styled.div`
background-color: #d7eceb;
padding: 50px;
text-align: center;
`;
export const PersonalDiv = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
`;
