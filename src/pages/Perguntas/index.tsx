import { useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Card,
  Container,
  Depoimentos,
  DepoimentosWrapper,
  Wrapper,
} from './styles'

const perguntas = [
  {
    title: 'Como funciona o atendimento?',
    content:
      'O atendimento é realizado de forma online, com praticidade e acompanhamento completo do seu caso.',
  },
  {
    title: 'Preciso ir até um escritório?',
    content:
      'Não. Todo o atendimento pode ser feito de forma remota, com segurança e validade jurídica.',
  },
  {
    title: 'Quais casos você atende?',
    content:
      'Atuação em Direito de Família, incluindo divórcio, guarda, pensão, inventário e sucessões.',
  },
  {
    title: 'Quanto tempo demora um processo?',
    content:
      'O prazo depende de cada caso, mas você recebe orientação clara desde o início.',
  },
]

export function Perguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Container id="perguntas">
      <Wrapper>
        <div className="faq-heading">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Informação clara desde o primeiro contato</h2>
          <p>
            Cada situação exige uma análise individual. Estas respostas ajudam
            você a entender como funciona o atendimento.
          </p>
        </div>

        <AccordionContainer>
          {perguntas.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <AccordionItem key={item.title}>
                <AccordionTitle
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span>{item.title}</span>
                  <FiChevronDown aria-hidden="true" />
                </AccordionTitle>

                <AccordionContent
                  id={`faq-${index}`}
                  isOpen={isOpen}
                  aria-hidden={!isOpen}
                >
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </AccordionContainer>
      </Wrapper>

      <DepoimentosWrapper>
        <span className="eyebrow">Relatos de atendimento</span>
        <h2>Confiança construída com clareza e acolhimento</h2>

        <Depoimentos>
          <Card>
            <FaQuoteLeft aria-hidden="true" />
            <p>
              “Fui muito bem orientada em um momento difícil. Atendimento claro
              e rápido.”
            </p>
            <span>Cliente — DF</span>
          </Card>

          <Card>
            <FaQuoteLeft aria-hidden="true" />
            <p>
              “Resolvi tudo sem sair de casa. Atendimento muito prático e
              cuidadoso.”
            </p>
            <span>Cliente — GO</span>
          </Card>

          <Card>
            <FaQuoteLeft aria-hidden="true" />
            <p>
              “Profissional segura e objetiva. Me senti tranquila durante todo
              o processo.”
            </p>
            <span>Cliente — SP</span>
          </Card>
        </Depoimentos>
      </DepoimentosWrapper>
    </Container>
  )
}
