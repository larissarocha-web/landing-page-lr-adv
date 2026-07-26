import { ThemeProvider } from 'styled-components'

import { CookieConsent } from './components/CookieConsent'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LegalCenter } from './components/LegalCenter'
import { StickyContact } from './components/StickyContact'
import { GlobalStyle } from './global'
import { Contato } from './pages/Contato'
import { Home } from './pages/Home'
import { Perguntas } from './pages/Perguntas'
import { Processo } from './pages/Processo'
import { Servicos } from './pages/Serviços'
import { Why } from './pages/Why'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Servicos />
      <Processo />
      <Why />
      <Perguntas />
      <Contato />
      <Footer />
      <StickyContact />
      <CookieConsent />
      <LegalCenter />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
