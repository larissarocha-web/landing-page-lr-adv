import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Container,
  Wrapper,
} from './styles'

const questions = [
  {
    title: 'Como funciona o primeiro atendimento?',
    content:
      'O primeiro contato permite compreender a situação, identificar os pontos jurídicos relevantes e orientar os próximos passos.',
  },
  {
    title: 'Meu caso pode ser resolvido online?',
    content:
      'O atendimento pode ser realizado online. A viabilidade de atos e procedimentos remotos depende das particularidades de cada caso.',
  },
  {
    title: 'Quais documentos devo separar?',
    content:
      'Os documentos variam conforme o assunto. Após uma breve análise, você recebe orientação sobre o que será necessário apresentar.',
  },
]

export function Perguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Container id="duvidas">
      <Wrapper>
        <div className="faq-heading">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Antes de decidir, entenda suas possibilidades</h2>
          <p>
            Informações iniciais para ajudar você a compreender como funciona o
            atendimento jurídico.
          </p>
        </div>

        <AccordionContainer>
          {questions.map((item, index) => {
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
    </Container>
  )
}
