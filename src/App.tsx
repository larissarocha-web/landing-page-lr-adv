import { ThemeProvider } from 'styled-components'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GlobalStyle } from './global'
import { Home } from './pages/Home'
import { Perguntas } from './pages/Perguntas'
import { Servicos } from './pages/Serviços'
import { Why } from './pages/Why'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Servicos />
      <Why />
      <Perguntas />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
