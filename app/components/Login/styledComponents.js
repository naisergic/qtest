import styled from 'styled-components';

export const FormConatiner = styled.div`
border: 1px solid #887e7e;
padding: 2rem;
background-color: #fff;
margin: 0 20px;
width:450px;
@media (max-width: 767px) {
    width:auto;
  }
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
vertical-align: middle;
justify-content: center;
height: 100%;
@media (max-width: 767px) {
    height: 60%
  }
`;

export const InputConatiner = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 768px) {
    flex-direction: ${(props) => (props.columnDirection ? props.columnDirection : 'column')}
    justify-content: ${(props) => (props.columnDirection ? 'space-between' : 'initial')}
  }
`;

export const Input = styled.input`
height: 30px;
`;

export const SubmitBtn = styled(Input)`
border-radius: 25px;
padding: 5px 20px;
background-color: #74cedc;
color: white;
`;

export const CheckBox = styled(Input)`
height: auto;
`;
