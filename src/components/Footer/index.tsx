// Importa os componentes estilizados (estrutura visual do footer)
import { Container, Wrapper, Div1, Div2, Div3, Div4 } from './styles'

// Importa a logo
import logo from '../../assets/logofooter.png'

// Importa ícone do WhatsApp
import { FaWhatsapp } from 'react-icons/fa'

// Componente Footer
export function Footer() {
  return (
    // Container principal do footer (fundo + identificação)
    <Container id="footer">
      {/* Wrapper centraliza e organiza o conteúdo */}
      <Wrapper>
        {/* ================= BLOCO SUPERIOR ================= */}
        {/* Logo + descrição institucional */}
        <Div3>
          {/* Logo do escritório */}
          <img src={logo} alt="Larissa Rocha Advogada" />

          {/* Texto institucional */}
          <p>
            Advocacia em Direito de Família com atendimento online, foco em
            orientação clara, objetiva e segura.
          </p>
        </Div3>

        {/* ================= BLOCO CENTRAL ================= */}
        {/* 3 colunas de informações */}
        <Div1>
          {/* COLUNA 1 - Atendimento */}
          <div>
            <h4>Atendimento</h4>
            <p>Consultas 100% online</p>
            <p>Horário comercial</p>
            <p>Resposta rápida via WhatsApp</p>
          </div>

          {/* COLUNA 2 - Área de atuação */}
          <div>
            <h4>Área de atuação</h4>
            <p>Direito de Família</p>
            <p>Divórcio, guarda, pensão</p>
            <p>Inventário e sucessões</p>
          </div>

          {/* COLUNA 3 - Contato */}
          <div>
            <h4>Contato</h4>
            <p>WhatsApp direto</p>
            <p>Atendimento personalizado</p>
          </div>
        </Div1>

        {/* ================= CALL TO ACTION ================= */}
        {/* Botão principal de conversão */}
        <Div2>
          <a
            href="https://wa.me/5561991742090"
            target="_blank" // abre em nova aba
            rel="noreferrer" // segurança
          >
            {/* Ícone */}
            <FaWhatsapp size={28} />
            {/* Texto do botão */}
            Falar no WhatsApp
          </a>
        </Div2>
      </Wrapper>

      {/* ================= RODAPÉ FINAL ================= */}
      {/* Direitos autorais */}
      <Div4>
        {/* Ano automático + nome */}© {new Date().getFullYear()} Larissa Rocha
        Advogada • Todos os direitos reservados
      </Div4>
    </Container>
  )
}
