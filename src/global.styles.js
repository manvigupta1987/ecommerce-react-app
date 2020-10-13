import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media screen and (max-width:800px) {
      padding:10px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }

  /* this is to avoid the padding around the form inputs fields */
  * {
    box-sizing: border-box; 
  }
`;
