import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* :root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  } */
  *{
    margin:0;
    padding:0px;
    box-sizing:border-box;
    }

    html{

      @media (max-width:1080px){
       font-size: 93.75%;
      }

      @media (max-width:720px){
       font-size: 87.5%;
      }
    }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor:pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-family:'Poppins', sans-serif;
    font-weight: 600;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
