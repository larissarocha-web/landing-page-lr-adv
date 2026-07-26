import { FormEvent, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import heroPhoto from '../../assets/larissa-hero-colar-preservada.webp'
import { getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import {
  Actions,
  Container,
  Copy,
  Hero,
  IntakeCard,
  Portrait,
  SecondaryLink,
  WhatsButton,
} from './styles'

export function Home() {
  const [fullName, setFullName] = useState('')
  const [caseSummary, setCaseSummary] = useState('')
  const whatsappUrl = getWhatsAppUrl()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      `Olá, meu nome é ${fullName.trim()}.`,
      'Gostaria de orientação jurídica.',
      '',
      `Resumo do caso: ${caseSummary.trim()}`,
    ].join('\n')

    trackMarketingEvent('triage_submit', { cta_location: 'hero_triage' })
    trackMarketingEvent('whatsapp_click', { cta_location: 'hero_triage' })
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <Container id="inicio">
      <Hero>
        <Copy>
          <span className="eyebrow">Advocacia em Direito de Família</span>
          <h1>Clareza jurídica para decisões que mudam a sua família.</h1>
          <span className="gold-line" aria-hidden="true" />

          <p>
            Orientação segura e acompanhamento próximo em divórcio, guarda,
            pensão, união estável e inventário.
          </p>

          <Actions>
            <WhatsButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackMarketingEvent('whatsapp_click', {
                  cta_location: 'hero_primary',
                })
              }
            >
              <FaWhatsapp />
              Conversar pelo WhatsApp
            </WhatsButton>

            <SecondaryLink href="#atuacao">
              Conhecer a atuação
              <span aria-hidden="true">→</span>
            </SecondaryLink>
          </Actions>

          <div className="microcopy" aria-label="Informações do atendimento">
            <span>Atendimento online</span>
            <span>Sigilo</span>
            <span>Retorno em horário comercial</span>
          </div>
        </Copy>

        <Portrait>
          <img
            src={heroPhoto}
            alt="Larissa Rocha em seu ambiente de trabalho"
          />
        </Portrait>

        <div
          className="mobile-microcopy"
          aria-label="Informações do atendimento"
        >
          <span>Atendimento online</span>
          <span>Sigilo</span>
          <span>Retorno em horário comercial</span>
        </div>

        <IntakeCard onSubmit={handleSubmit}>
          <span className="form-eyebrow">Atendimento inicial</span>
          <h2>Conte brevemente o seu caso</h2>

          <label htmlFor="hero-full-name">Nome completo</label>
          <input
            id="hero-full-name"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Digite seu nome"
            autoComplete="name"
            minLength={3}
            required
          />

          <label htmlFor="hero-case-summary">Resumo do caso</label>
          <textarea
            id="hero-case-summary"
            name="caseSummary"
            value={caseSummary}
            onChange={(event) => setCaseSummary(event.target.value)}
            placeholder="Explique resumidamente o que aconteceu"
            rows={3}
            minLength={15}
            required
          />

          <button type="submit">
            <FaWhatsapp aria-hidden="true" />
            Falar com a advogada
          </button>

          <small>A mensagem será aberta no WhatsApp.</small>
        </IntakeCard>
      </Hero>
    </Container>
  )
}
