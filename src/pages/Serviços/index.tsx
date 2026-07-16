import { useState } from 'react'
import {
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiHeart,
  FiHome,
  FiUsers,
} from 'react-icons/fi'
import { LuScale } from 'react-icons/lu'

import { Cards, Container, Wrapper } from './styles'

const areas = [
  {
    title: 'Divórcio e separação',
    description:
      'Orientação sobre o processo, divisão patrimonial e definição dos próximos passos.',
    icon: FiUsers,
  },
  {
    title: 'Guarda e convivência',
    description:
      'Análise das possibilidades de guarda e organização da convivência familiar.',
    icon: FiHome,
  },
  {
    title: 'Pensão alimentícia',
    description:
      'Orientação em pedidos, revisões e cumprimento de obrigações alimentares.',
    icon: LuScale,
  },
  {
    title: 'União estável',
    description:
      'Reconhecimento, dissolução e proteção dos direitos construídos na relação.',
    icon: FiHeart,
  },
  {
    title: 'Inventário e sucessões',
    description:
      'Organização da sucessão e acompanhamento do inventário judicial ou extrajudicial.',
    icon: FiFileText,
  },
  {
    title: 'Acordos e planejamento',
    description:
      'Construção de soluções consensuais e planejamento para prevenir conflitos.',
    icon: FiCheckCircle,
  },
]

export function Servicos() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Container id="atuacao">
      <Wrapper>
        <span className="eyebrow">Áreas de atuação</span>
        <h2>
          Direito de Família com orientação segura, clara, atendimento ágil e
          acompanhamento completo do seu caso.
        </h2>
        <p className="intro">
          Cada situação familiar exige análise individual. Conheça os temas em
          que Larissa Rocha oferece orientação jurídica.
        </p>

        <Cards>
          {areas.map((area, index) => {
            const Icon = area.icon
            const isOpen = openIndex === index

            return (
              <article key={area.title} data-open={isOpen}>
                <button
                  id={`area-title-${index}`}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`area-content-${index}`}
                >
                  <Icon aria-hidden="true" />
                  <h3>{area.title}</h3>
                  <FiChevronDown className="chevron" aria-hidden="true" />
                </button>
                <div
                  className="area-content"
                  id={`area-content-${index}`}
                  role="region"
                  aria-labelledby={`area-title-${index}`}
                  aria-hidden={!isOpen}
                >
                  <p>{area.description}</p>
                </div>
              </article>
            )
          })}
        </Cards>
      </Wrapper>
    </Container>
  )
}
