import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { PENSION_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import {
  AboutSection,
  AccordionContent,
  AccordionItem,
  ContactSection,
  FaqSection,
  HeroSection,
  HowSection,
  Page,
  PrincipleSection,
  SituationsSection,
  WhatsButton,
} from './styles'

const situations = [
  'Filhos menores ou maiores',
  'Alimentos gravídicos',
  'Ex-cônjuges e ex-companheiros',
  'Pais e outros familiares',
  'Responsabilidade complementar dos avós',
  'Acordo e formalização',
  'Revisão, redução ou exoneração',
  'Parcelas atrasadas e execução',
]

const steps = [
  'Contato pelo WhatsApp e informações sobre disponibilidade.',
  'Consulta e análise dos fatos e documentos.',
  'Orientação sobre possibilidades e próximos passos.',
]

const questions = [
  {
    title: 'Existe percentual fixo, como 30%?',
    content:
      'Não. O valor depende das necessidades de quem recebe, dos recursos de quem paga e da proporcionalidade no caso concreto.',
  },
  {
    title: 'O que pode ser considerado na definição do valor?',
    content:
      'Podem ser avaliadas despesas com alimentação, moradia, saúde, educação, transporte, vestuário e outras necessidades, além da capacidade contributiva das pessoas responsáveis.',
  },
  {
    title: 'Quem pode pedir pensão alimentícia?',
    content:
      'A análise pode envolver filhos, gestantes, ex-cônjuges ou ex-companheiros, pais e outros parentes. A responsabilidade dos avós é complementar e depende da impossibilidade total ou parcial dos responsáveis principais.',
  },
  {
    title: 'Um acordo particular precisa ser formalizado?',
    content:
      'A formalização adequada oferece clareza sobre valor, vencimento, reajuste e forma de pagamento. A modalidade judicial ou extrajudicial depende da situação e das pessoas envolvidas.',
  },
  {
    title: 'Quando o valor pode ser revisto, reduzido ou encerrado?',
    content:
      'Mudanças relevantes nas necessidades ou na capacidade financeira podem justificar revisão, redução, aumento ou exoneração. Alterações de renda ou desemprego não modificam automaticamente a obrigação.',
  },
  {
    title: 'A pensão termina automaticamente aos 18 anos?',
    content:
      'Não. A maioridade não encerra automaticamente a pensão; o cancelamento depende de decisão judicial com oportunidade de manifestação de quem recebe.',
  },
  {
    title: 'O que pode ser feito quando existem parcelas atrasadas?',
    content:
      'Os valores podem ser cobrados judicialmente. As três prestações anteriores ao início da execução e as vencidas durante o processo podem admitir o rito da prisão, enquanto outros valores podem seguir meios patrimoniais de cobrança.',
  },
  {
    title: 'É possível receber atendimento online de qualquer estado?',
    content:
      'Sim. A consulta e a orientação inicial podem ocorrer online em todo o Brasil. Competência territorial e possibilidade de atuação no processo serão verificadas individualmente.',
  },
]

export function Pensao() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)
  const whatsappUrl = getWhatsAppUrl(PENSION_WHATSAPP_MESSAGE)

  return (
    <Page>
      <HeroSection id="inicio">
        <div className="hero-layout">
          <div className="hero-context">
            <span className="eyebrow">Pensão alimentícia</span>
            <p className="trust-line">
              Atendimento online em todo o Brasil
              <span aria-hidden="true">•</span>
              OAB/DF nº 65.877
              <span aria-hidden="true">•</span>
              Sigilo
            </p>
          </div>

          <div className="hero-copy">
            <h1>
              Orientação clara para diferentes situações de pensão alimentícia
            </h1>
            <p>
              Atendimento jurídico em pedidos, acordos, revisões, exoneração e
              cobrança de alimentos para filhos, gestantes, ex-cônjuges,
              companheiros, pais e outros familiares, conforme as
              particularidades de cada caso.
            </p>

            <WhatsButton
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackMarketingEvent('whatsapp_click', {
                  cta_location: 'pension_hero',
                })
              }
            >
              <FaWhatsapp aria-hidden="true" />
              Conversar pelo WhatsApp
            </WhatsButton>
          </div>
        </div>
      </HeroSection>

      <PrincipleSection>
        <div className="principle-layout">
          <span className="section-index">01</span>
          <div>
            <span className="eyebrow">Análise individual</span>
            <h2>Pensão alimentícia não segue uma fórmula única</h2>
            <p>
              Não existe um percentual obrigatório aplicável a todas as
              famílias. A definição considera as necessidades de quem recebe, os
              recursos de quem paga e a proporcionalidade diante das
              circunstâncias concretas.
            </p>
          </div>
        </div>
      </PrincipleSection>

      <SituationsSection id="atuacao">
        <div className="section-heading">
          <div>
            <span className="section-index">02</span>
            <span className="eyebrow">Possibilidades de orientação</span>
          </div>
          <h2>Situações que podem ser analisadas</h2>
        </div>

        <ol>
          {situations.map((situation, index) => (
            <li key={situation}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{situation}</h3>
            </li>
          ))}
        </ol>
      </SituationsSection>

      <HowSection id="como-funciona">
        <div className="section-heading">
          <div>
            <span className="section-index">03</span>
            <span className="eyebrow">Etapas</span>
          </div>
          <h2>Como o atendimento acontece</h2>
        </div>

        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </HowSection>

      <AboutSection id="sobre">
        <div>
          <span className="section-index">04</span>
          <span className="eyebrow">Sobre Larissa Rocha</span>
        </div>
        <p>
          Larissa Rocha é advogada inscrita na OAB/DF nº 65.877, com atuação em
          Direito de Família e Sucessões. O atendimento é realizado online, com
          análise individual e comunicação objetiva sobre as possibilidades
          jurídicas.
        </p>
      </AboutSection>

      <FaqSection id="duvidas">
        <div className="faq-heading">
          <span className="section-index">05</span>
          <span className="eyebrow">Perguntas essenciais</span>
          <h2>Dúvidas frequentes sobre pensão alimentícia</h2>
          <p>
            Informação geral para compreender o tema antes de uma análise
            individual.
          </p>
        </div>

        <div className="faq-column">
          <div className="faq-list">
            {questions.map((question, index) => {
              const isOpen = openQuestion === index

              return (
                <AccordionItem key={question.title}>
                  <button
                    id={`pension-faq-title-${index}`}
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`pension-faq-${index}`}
                  >
                    <span className="question-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="question-title">{question.title}</span>
                    <span className="question-state" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <AccordionContent
                      id={`pension-faq-${index}`}
                      role="region"
                      aria-labelledby={`pension-faq-title-${index}`}
                    >
                      <div>
                        <p>{question.content}</p>
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              )
            })}
          </div>

          <p className="faq-note">
            As respostas são gerais e não substituem a análise jurídica
            individual.
          </p>
        </div>
      </FaqSection>

      <ContactSection id="contato">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Converse com Larissa Rocha</h2>
          <p>
            Entre em contato pelo WhatsApp para informações sobre o atendimento
            jurídico em pensão alimentícia.
          </p>

          <WhatsButton
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackMarketingEvent('whatsapp_click', {
                cta_location: 'pension_final',
              })
            }
          >
            <FaWhatsapp aria-hidden="true" />
            Conversar pelo WhatsApp
          </WhatsButton>

          <div className="contact-microcopy">
            <span>Atendimento online</span>
            <span>Sigilo</span>
            <span>Retorno em horário comercial</span>
          </div>
        </div>
      </ContactSection>
    </Page>
  )
}
