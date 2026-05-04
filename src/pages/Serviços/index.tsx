// Importa os estilos da seção
import { Container, Wrapper, Cards } from './styles'

// Componente da seção "Atuação / Serviços"
export function Servicos() {
  return (
    // ID usado para navegação via menu (#consulta)
    <Container id="consulta">
      {/* Wrapper centraliza e controla largura */}
      <Wrapper>
        {/* Título da seção */}
        <h2>Como posso te ajudar</h2>

        {/* Texto de apoio (explica o serviço) */}
        <p>
          Atuação em Direito de Família com orientação clara, atendimento ágil e
          acompanhamento completo do seu caso.
        </p>

        {/* Grid de serviços */}
        <Cards>
          {/* CARD 1 */}
          <div>
            <h3>Divórcio</h3>
            <p>
              Orientação e condução completa do processo, com segurança jurídica
              e clareza em cada etapa.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <h3>Guarda e pensão</h3>
            <p>
              Atuação focada na proteção dos interesses familiares, com
              equilíbrio e responsabilidade.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <h3>Inventário e sucessões</h3>
            <p>
              Organização patrimonial com orientação segura, evitando conflitos
              e garantindo tranquilidade.
            </p>
          </div>
        </Cards>
      </Wrapper>
    </Container>
  )
}
