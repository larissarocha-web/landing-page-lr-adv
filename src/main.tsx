// Importa o React (necessário para JSX funcionar)
import React from 'react'

// Importa o ReactDOM para renderizar no navegador
import ReactDOM from 'react-dom/client'

// Importa o componente principal da aplicação
import App from './App.tsx'

// Cria a raiz da aplicação no elemento HTML com id="root"
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Modo estrito do React (ajuda a identificar problemas)
  <React.StrictMode>
    {/* Renderiza toda a aplicação */}
    <App />
  </React.StrictMode>,
)
