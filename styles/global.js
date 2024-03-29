import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors['background']};
  }

  body, input, textarea, button {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1rem;
  }
`