import { FormEvent, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiBookOpen, FiGlobe, FiUser } from 'react-icons/fi'

import photo from '../../assets/larissa-sobre-sorrindo.webp'
import { buildWhatsAppUrl, OAB_LABEL } from '../../constants/brand'
import { Container, Content, Credentials, IntakeCard, Wrapper } from './styles'

export function Why() {
  const [fullName, setFullName] = useState('')
  const [caseSummary, setCaseSummary] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      `Olá, meu nome é ${fullName.trim()}.`,
      'Gostaria de orientação jurídica.',
      '',
      `Resumo do caso: ${caseSummary.trim()}`,
    ].join('\n')

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <Container id="sobre">
      <Wrapper>
        <div className="photo">
          <img src={photo} alt="Larissa Rocha em seu ambiente de trabalho" />
        </div>

        <IntakeCard onSubmit={handleSubmit}>
          <span className="form-eyebrow">Atendimento inicial</span>
          <h3>Conte brevemente o seu caso</h3>
          <p>Preencha em menos de um minuto e continue pelo WhatsApp.</p>

          <label htmlFor="full-name">Nome completo</label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Digite seu nome"
            autoComplete="name"
            minLength={3}
            required
          />

          <label htmlFor="case-summary">Resumo do caso</label>
          <textarea
            id="case-summary"
            name="caseSummary"
            value={caseSummary}
            onChange={(event) => setCaseSummary(event.target.value)}
            placeholder="Explique resumidamente o que aconteceu"
            rows={4}
            minLength={15}
            required
          />

          <button type="submit">
            <FaWhatsapp aria-hidden="true" />
            Falar com a advogada
          </button>

          <small>
            Seus dados não são armazenados. A mensagem será aberta no WhatsApp.
          </small>
        </IntakeCard>

        <Content>
          <span className="eyebrow">Sobre Larissa Rocha</span>
          <h2>Técnica, clareza e acolhimento em momentos delicados.</h2>
          <span className="gold-line" aria-hidden="true" />

          <p>
            Atuação em Direito de Família com orientação objetiva, comunicação
            próxima e atenção às particularidades de cada caso.
          </p>

          <Credentials aria-label="Informações profissionais">
            <li>
              <FiUser aria-hidden="true" />
              <span>Advogada • {OAB_LABEL}</span>
            </li>
            <li>
              <FiGlobe aria-hidden="true" />
              <span>Atendimento online em todo o Brasil</span>
            </li>
            <li>
              <FiBookOpen aria-hidden="true" />
              <span>Atuação em Direito de Família e Sucessões</span>
            </li>
          </Credentials>
        </Content>
      </Wrapper>
    </Container>
  )
}
