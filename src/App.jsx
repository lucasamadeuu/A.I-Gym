import LandingPage from './Page/index'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
