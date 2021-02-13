import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.mainBg};
  }
  html, body {
    min-height: 100vh;
  }
`

const theme = {
  colors: {
    primary: '#c4c4c4',
    mainBg: '#4287f5'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
