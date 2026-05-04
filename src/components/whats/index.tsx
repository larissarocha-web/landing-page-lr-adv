// Importa o estilo do botão flutuante
import { Whats } from './styles'

// Importa o ícone do WhatsApp
import { FaWhatsapp } from 'react-icons/fa'

// Componente do botão flutuante de WhatsApp
export function WhatsApp() {
  return (
    // Container estilizado (posição fixa na tela)
    <Whats>
      {/* Link direto para WhatsApp com mensagem pré-definida */}
      <a href="https://wa.me/5561991010204?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20jurídica.">
        {/* Ícone do WhatsApp */}
        <FaWhatsapp size={30} />
      </a>
    </Whats>
  )
}
