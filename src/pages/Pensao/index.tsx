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

import heroPhoto from '../../assets/larissa-pensao-reuniao-natural-v3.webp'
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
      'Orientação sobre pedido, manutenção e continuidade da obrigação.',
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
    description: 'Análise das hipóteses de alimentos entre familiares.',
    icon: FiHome,
  },
  {
    title: 'Responsabilidade complementar dos avós',
    description: 'Responsabilidade subsidiária e complementar quando cabível.',
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
    title: 'Como é calculado o valor da pensão alimentícia?',
    content:
      'Não existe percentual único. A definição considera as necessidades de quem recebe, os recursos de quem paga e a proporcionalidade entre as pessoas responsáveis, conforme as circunstâncias comprovadas.',
  },
  {
    title: 'Existe um valor mínimo de pensão alimentícia?',
    content:
      'Não há um valor mínimo universal aplicável a todos os casos. A quantia ou o percentual depende das necessidades apresentadas e da capacidade contributiva demonstrada.',
  },
  {
    title: 'Quem pode pedir pensão alimentícia?',
    content:
      'A análise pode envolver filhos, gestantes, ex-cônjuges ou ex-companheiros, pais e outros parentes. A responsabilidade dos avós é complementar e subsidiária, dependendo da impossibilidade total ou parcial de cumprimento pelos pais.',
  },
  {
    title: 'Um acordo particular precisa ser formalizado?',
    content:
      'A formalização adequada oferece clareza sobre valor, vencimento, reajuste e forma de pagamento. A modalidade judicial ou extrajudicial depende da situação e das pessoas envolvidas.',
  },
  {
    title: 'Quando o valor pode ser revisto, reduzido, aumentado ou encerrado?',
    content:
      'Mudanças relevantes nas necessidades ou na capacidade financeira podem justificar a revisão. Alterações de renda ou desemprego não modificam automaticamente a obrigação.',
  },
  {
    title: 'A pensão termina automaticamente aos 18 anos?',
    content:
      'Não. A maioridade não encerra automaticamente a pensão; o cancelamento depende de decisão judicial com oportunidade de manifestação de quem recebe.',
  },
  {
    title: 'O que pode acontecer quando a pensão não é paga?',
    content:
      'Os valores podem ser cobrados judicialmente por procedimentos distintos. Conforme as parcelas e os requisitos legais, podem existir medidas patrimoniais, protesto e prisão civil. A via adequada exige análise individual.',
  },
  {
    title: 'É obrigatório ter advogado para tratar de pensão alimentícia?',
    content:
      'Em processos judiciais, a representação por profissional da advocacia ou pela Defensoria Pública, quando cabível, é em regra necessária. A forma adequada para um pedido ou acordo depende do caso.',
  },
  {
    title: 'Meu pedido de pensão foi negado. O que pode ser feito?',
    content:
      'É necessário analisar a decisão, as provas e a fase do processo. Dependendo das circunstâncias e dos prazos, pode haver medida recursal ou possibilidade de novo pedido com elementos diferentes.',
  },
  {
    title: 'Quanto custa contratar uma advogada para pensão alimentícia?',
    content:
      'Os honorários dependem do tipo de atuação necessária, da complexidade e da extensão do trabalho. Após compreender a demanda, a advogada apresenta o escopo do serviço e os honorários antes da contratação.',
  },
  {
    title: 'É possível receber atendimento online de outro estado?',
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
        <div className="hero-stage">
          <div className="hero-media">
            <img
              src={heroPhoto}
              alt="Larissa Rocha em pé, em uma sala de reuniões"
              width="1536"
              height="1024"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="hero-copy">
            <span className="eyebrow">Pensão alimentícia</span>
            <h1>Advogada de Pensão Alimentícia em Brasília‑DF</h1>

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

          <div className="trust-line">
            <span>Atendimento online em todo o Brasil</span>
            <span>OAB/DF nº 65.877</span>
            <span>Sigilo</span>
          </div>
        </div>
      </HeroSection>

      <PrincipleSection>
        <div className="principle-layout">
          <span className="eyebrow">Orientação jurídica</span>
          <h2>Orientação jurídica em pensão alimentícia</h2>
          <span className="gold-line" aria-hidden="true" />
          <p>
            Cada situação exige a análise das necessidades de quem recebe, dos
            recursos de quem paga e da proporcionalidade no caso concreto. Não
            existe um percentual obrigatório aplicável a todas as famílias.
          </p>
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
