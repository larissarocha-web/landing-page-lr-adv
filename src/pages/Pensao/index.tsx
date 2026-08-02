import { useState } from 'react'
import { FaBaby, FaWhatsapp } from 'react-icons/fa'
import {
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiHome,
  FiRefreshCw,
  FiShield,
  FiUserMinus,
  FiUsers,
} from 'react-icons/fi'

import { PENSION_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import {
  AccordionContent,
  AccordionItem,
  ContactSection,
  FaqSection,
  HeroSection,
  Page,
  PrincipleSection,
  SituationsSection,
  WhatsButton,
} from './styles'

const situations = [
  {
    title: 'Filhos menores ou maiores',
    description:
      'Orientação sobre pedido, manutenção e continuidade da obrigação alimentar.',
    icon: FiUsers,
  },
  {
    title: 'Alimentos gravídicos',
    description:
      'Análise da possibilidade de alimentos durante o período da gestação.',
    icon: FaBaby,
  },
  {
    title: 'Ex-cônjuges e ex-companheiros',
    description: 'Avaliação da obrigação alimentar após o término da relação.',
    icon: FiUserMinus,
  },
  {
    title: 'Pais e outros familiares',
    description: 'Orientação em situações de necessidade entre familiares.',
    icon: FiHome,
  },
  {
    title: 'Responsabilidade complementar dos avós',
    description:
      'Análise da responsabilidade complementar conforme o caso concreto.',
    icon: FiShield,
  },
  {
    title: 'Acordo e formalização',
    description:
      'Definição de valor, vencimento, reajuste e forma de pagamento.',
    icon: FiCheckCircle,
  },
  {
    title: 'Revisão, redução ou exoneração',
    description:
      'Reavaliação diante de mudanças nas necessidades ou na capacidade financeira.',
    icon: FiRefreshCw,
  },
  {
    title: 'Parcelas atrasadas e execução',
    description: 'Orientação sobre a cobrança judicial de valores não pagos.',
    icon: FiClock,
  },
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
          <span className="eyebrow">Pensão alimentícia</span>
          <h1>
            Orientação clara para diferentes situações de pensão alimentícia
          </h1>

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

          <div className="trust-line">
            <span>Atendimento online em todo o Brasil</span>
            <span>OAB/DF nº 65.877</span>
            <span>Sigilo</span>
          </div>
        </div>
      </HeroSection>

      <PrincipleSection>
        <div className="principle-layout">
          <div className="principle-heading">
            <span className="eyebrow">Análise individual</span>
            <h2>Pensão alimentícia não segue uma fórmula única</h2>
          </div>

          <div className="principle-copy">
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
          <span className="eyebrow">Possibilidades de orientação</span>
          <h2>Situações que podem ser analisadas</h2>
        </div>

        <ul className="situation-grid">
          {situations.map((situation) => {
            const Icon = situation.icon

            return (
              <li key={situation.title}>
                <span className="situation-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <h3>{situation.title}</h3>
                  <p>{situation.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </SituationsSection>

      <FaqSection id="duvidas">
        <div className="faq-shell">
          <div className="faq-heading">
            <span className="eyebrow">Perguntas essenciais</span>
            <h2>Dúvidas frequentes sobre pensão alimentícia</h2>
          </div>

          <div className="faq-column">
            <div className="faq-list">
              {questions.map((question, index) => {
                const isOpen = openQuestion === index

                return (
                  <AccordionItem key={question.title} data-open={isOpen}>
                    <button
                      id={`pension-faq-title-${index}`}
                      type="button"
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`pension-faq-${index}`}
                    >
                      <span className="question-title">{question.title}</span>
                      <span className="question-state" aria-hidden="true">
                        <FiChevronDown />
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
