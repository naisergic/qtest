import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,body {
    height: 100%;
}

body {
    background-color: #eee;
}

#root {
    height: 100%;
}

.mb1 {
    margin-bottom: 1rem;
}

table {
    width: 50%;
    text-align: center;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyle;
