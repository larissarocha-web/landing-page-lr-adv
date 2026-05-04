import { useState } from 'react'

import {
  Container,
  Wrapper,
  AccordionContainer,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  DepoimentosWrapper,
  Depoimentos,
  Card,
} from './styles'

import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io'

export function Perguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

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

  return (
    <Container id="perguntas">
      <Wrapper>
        <h2>Atendimento e dúvidas</h2>

        {/* ACCORDION */}
        <AccordionContainer>
          {perguntas.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionTitle onClick={() => toggleAccordion(index)}>
                {openIndex === index ? (
                  <IoIosArrowDropupCircle size={22} />
                ) : (
                  <IoIosArrowDropdownCircle size={22} />
                )}
                {item.title}
              </AccordionTitle>

              <AccordionContent isOpen={openIndex === index}>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>

        {/* DEPOIMENTOS (VERSÃO ESTÁVEL) */}
        <DepoimentosWrapper>
          <h2>O que clientes dizem</h2>

          <Depoimentos>
            <Card>
              <p>
                &ldquo;Fui muito bem orientada em um momento difícil.
                Atendimento claro e rápido.&rdquo;
              </p>
              <span>Cliente – DF</span>
            </Card>

            <Card>
              <p>
                &ldquo;Resolvi tudo sem sair de casa. Atendimento muito
                prático.&rdquo;
              </p>
              <span>Cliente – GO</span>
            </Card>

            <Card>
              <p>
                &ldquo;Profissional segura e objetiva. Me senti tranquila
                durante todo o processo.&rdquo;
              </p>
              <span>Cliente – SP</span>
            </Card>
          </Depoimentos>
        </DepoimentosWrapper>
      </Wrapper>
    </Container>
  )
}
