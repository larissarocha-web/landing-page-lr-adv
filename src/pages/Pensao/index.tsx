import { useState } from 'react'
import {
  FiChevronDown,
  FiClock,
  FiFileText,
  FiMinusCircle,
  FiRefreshCw,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { LuScale } from 'react-icons/lu'

import heroPhoto from '../../assets/larissa-hero-colar-preservada.webp'
import { PENSION_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../../constants/brand'
import { trackMarketingEvent } from '../../lib/marketing'
import { Why } from '../Why'
import {
  AccordionContent,
  AccordionItem,
  ContactSection,
  FaqSection,
  HeroCopy,
  HeroPortrait,
  HeroSection,
  HowSection,
  Page,
  SectionHeading,
  SituationGrid,
  SituationsSection,
  Steps,
  WhatsButton,
} from './styles'

const situations = [
  {
    title: 'Pedido inicial',
    description:
      'Análise das necessidades, das possibilidades e dos documentos relevantes para definir a forma adequada de solicitar os alimentos.',
    icon: LuScale,
  },
  {
    title: 'Acordo de pensão',
    description:
      'Orientação para construir e formalizar um acordo claro, com condições compatíveis com a realidade familiar.',
    icon: FiFileText,
  },
  {
    title: 'Revisão do valor',
    description:
      'Avaliação de mudanças relevantes nas necessidades de quem recebe ou nas possibilidades de quem paga.',
    icon: FiRefreshCw,
  },
  {
    title: 'Execução e valores atrasados',
    description:
      'Análise das parcelas em aberto e das medidas jurídicas adequadas para buscar o cumprimento da obrigação.',
    icon: FiClock,
  },
  {
    title: 'Redução e exoneração',
    description:
      'Avaliação jurídica das circunstâncias que podem justificar a redução ou o encerramento da obrigação alimentar.',
    icon: FiMinusCircle,
  },
]

const steps = [
  {
    number: '01',
    title: 'Atendimento inicial',
    description:
      'O contato pelo WhatsApp informa disponibilidade, formato do atendimento e os próximos passos para a consulta.',
  },
  {
    number: '02',
    title: 'Análise jurídica',
    description:
      'Na consulta, Larissa examina a situação, os documentos disponíveis e as possibilidades jurídicas aplicáveis.',
  },
  {
    number: '03',
    title: 'Acompanhamento',
    description:
      'Definida a estratégia, o atendimento segue com orientação clara e comunicação ao longo de cada etapa.',
  },
]

const questions = [
  {
    title: 'Existe percentual fixo para pensão alimentícia?',
    content:
      'Não. O valor é analisado conforme as necessidades de quem recebe, as possibilidades de quem paga e a proporcionalidade no caso concreto. Percentuais divulgados na internet não substituem uma análise individual.',
  },
  {
    title: 'Quando é possível revisar o valor?',
    content:
      'A revisão pode ser analisada quando há mudança relevante nas necessidades de quem recebe ou nas possibilidades financeiras de quem paga. É necessário demonstrar essa alteração e avaliar as circunstâncias atuais.',
  },
  {
    title: 'O que fazer diante de valores atrasados?',
    content:
      'Parcelas não pagas podem ser cobradas judicialmente. A medida adequada depende do título existente, do período em atraso e das particularidades da obrigação, por isso a documentação deve ser examinada.',
  },
  {
    title: 'Quando redução ou exoneração podem ser analisadas?',
    content:
      'Elas podem ser avaliadas diante de mudanças relevantes na necessidade de quem recebe ou na possibilidade de quem paga. A obrigação fixada judicialmente não deve ser interrompida por decisão unilateral.',
  },
  {
    title: 'Um acordo precisa ser formalizado?',
    content:
      'A formalização jurídica traz clareza sobre valor, vencimento, forma de pagamento e atualização, além de permitir o cumprimento do acordo caso ele deixe de ser observado. A forma adequada depende da situação familiar.',
  },
  {
    title: 'É possível receber atendimento online de outro estado?',
    content:
      'Sim. O atendimento inicial e a orientação podem ocorrer online em todo o Brasil. A possibilidade de atuação em eventual processo é confirmada conforme a competência e as particularidades de cada demanda.',
  },
]

export function Pensao() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)
  const whatsappUrl = getWhatsAppUrl(PENSION_WHATSAPP_MESSAGE)

  return (
    <Page>
      <HeroSection id="inicio">
        <HeroCopy>
          <span className="eyebrow">Pensão alimentícia</span>
          <h1>Orientação jurídica clara em pensão alimentícia</h1>
          <span className="gold-line" aria-hidden="true" />
          <p>
            Atendimento online para pedidos, acordos, revisões, execução de
            valores em atraso, redução e exoneração, conforme as
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

          <div className="desktop-microcopy">
            <span>Atendimento online em todo o Brasil</span>
            <span>Sigilo</span>
            <span>Retorno em horário comercial</span>
          </div>
        </HeroCopy>

        <HeroPortrait>
          <img
            src={heroPhoto}
            alt="Larissa Rocha em seu ambiente de trabalho"
          />
        </HeroPortrait>

        <div className="mobile-microcopy">
          <span>Atendimento online em todo o Brasil</span>
          <span>Sigilo</span>
          <span>Retorno em horário comercial</span>
        </div>
      </HeroSection>

      <SituationsSection id="atuacao">
        <SectionHeading>
          <span className="eyebrow">Situações atendidas</span>
          <h2>Orientação para diferentes momentos da pensão alimentícia</h2>
          <p>
            Cada situação exige uma análise própria. Conheça os principais temas
            que podem ser avaliados no atendimento.
          </p>
        </SectionHeading>

        <SituationGrid>
          {situations.map((situation) => {
            const Icon = situation.icon

            return (
              <article key={situation.title}>
                <Icon aria-hidden="true" />
                <h3>{situation.title}</h3>
                <p>{situation.description}</p>
              </article>
            )
          })}
        </SituationGrid>
      </SituationsSection>

      <HowSection id="como-funciona">
        <SectionHeading>
          <span className="eyebrow">Como funciona</span>
          <h2>Clareza desde o primeiro contato</h2>
          <p>
            O atendimento é organizado em etapas para que você compreenda as
            possibilidades e os próximos passos.
          </p>
        </SectionHeading>

        <Steps>
          {steps.map((step) => (
            <article key={step.number}>
              <span className="number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </Steps>
      </HowSection>

      <Why />

      <FaqSection id="duvidas">
        <div className="faq-heading">
          <span className="eyebrow">Dúvidas sobre pensão</span>
          <h2>Informação segura antes de decidir</h2>
          <p>
            Respostas gerais para dúvidas frequentes sobre pensão alimentícia. A
            orientação aplicável depende da análise individual.
          </p>
        </div>

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
                  <span>{question.title}</span>
                  <FiChevronDown aria-hidden="true" />
                </button>

                <AccordionContent
                  id={`pension-faq-${index}`}
                  data-open={isOpen}
                  role="region"
                  aria-labelledby={`pension-faq-title-${index}`}
                  aria-hidden={!isOpen}
                >
                  <p>{question.content}</p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </div>
      </FaqSection>

      <ContactSection id="contato">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Converse com Larissa sobre orientação em pensão alimentícia</h2>
          <p>
            O atendimento começa pelo WhatsApp, com informações sobre
            disponibilidade e próximos passos.
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
            <span>Contato confidencial</span>
            <span>Atendimento em horário comercial</span>
          </div>
        </div>
      </ContactSection>
    </Page>
  )
}
