import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle<{ theme: any }>`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
  }
`;
