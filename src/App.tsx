// Importa o ThemeProvider (permite usar o tema global em todo o projeto)
import { ThemeProvider } from 'styled-components'

// Importa sua paleta de cores (tema)
import { defaultTheme } from './styles/themes/default'

// Importa estilos globais (tipografia, reset, etc)
import { GlobalStyle } from './global'

// Importa os componentes principais da página
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Servicos } from './pages/Serviços'
import { Why } from './pages/Why'
import { Perguntas } from './pages/Perguntas'
import { Footer } from './components/Footer'

// Função principal do app (estrutura da página)
function App() {
  return (
    // Provider que injeta o tema em TODOS os styled-components
    <ThemeProvider theme={defaultTheme}>
      {/* Cabeçalho fixo */}
      <Header />

      {/* Seção principal (hero) */}
      <Home />

      {/* Seção de serviços */}
      <Servicos />

      {/* Seção "Sobre / Diferenciais" */}
      <Why />

      {/* Seção "Perguntas Frequentes" */}
      <Perguntas />

      {/* Rodapé */}
      <Footer />

      {/* Estilos globais (tipografia, base do site) */}
      <GlobalStyle />
    </ThemeProvider>
  )
}

// Exporta o App
export default App
