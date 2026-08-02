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
      'O atendimento inicial é online. Larissa ouve a situação, identifica os pontos jurídicos relevantes, verifica os documentos já disponíveis e explica as possibilidades e os próximos passos. A orientação específica depende da análise de cada caso.',
  },
  {
    title: 'O divórcio pode ser feito em cartório?',
    content:
      'Em situações consensuais, o divórcio pode ser extrajudicial. Quando há filhos menores ou incapazes, as questões de guarda, convivência e alimentos precisam estar previamente resolvidas judicialmente. A análise individual confirma se a via de cartório é adequada.',
  },
  {
    title: 'Guarda compartilhada significa dividir o tempo igualmente?',
    content:
      'Não necessariamente. A guarda compartilhada envolve responsabilidade conjunta pelas decisões sobre os filhos. A convivência deve considerar a rotina e o melhor interesse da criança, sem exigir uma divisão matemática do tempo.',
  },
  {
    title: 'Existe um percentual fixo para pensão alimentícia?',
    content:
      'Não. O valor é analisado conforme as necessidades de quem recebe, as possibilidades de quem paga e a proporcionalidade no caso concreto. Percentuais divulgados na internet não substituem uma análise individual.',
  },
  {
    title: 'A união estável precisa de contrato para existir?',
    content:
      'Não necessariamente. Ela pode ser reconhecida quando a convivência é pública, contínua, duradoura e estabelecida com o objetivo de constituir família. O contrato pode ajudar a documentar escolhas patrimoniais, mas cada situação precisa ser examinada.',
  },
  {
    title: 'O inventário pode ser feito em cartório?',
    content:
      'Em determinadas situações, sim. A via extrajudicial exige consenso e assistência de advogado. Há também hipóteses com menores ou incapazes, sujeitas a requisitos específicos e à manifestação favorável do Ministério Público. É necessário analisar os herdeiros, os bens e a eventual existência de testamento.',
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
            Respostas objetivas para algumas das dúvidas mais comuns em Direito
            de Família e Sucessões.
          </p>
        </div>

        <AccordionContainer>
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <AccordionItem key={item.title}>
                <AccordionTitle
                  id={`faq-title-${index}`}
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
                  $isOpen={isOpen}
                  role="region"
                  aria-labelledby={`faq-title-${index}`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
          <p className="faq-note">
            As informações são gerais e não substituem a análise individual do
            seu caso.
          </p>
        </AccordionContainer>
      </Wrapper>
    </Container>
  )
}
