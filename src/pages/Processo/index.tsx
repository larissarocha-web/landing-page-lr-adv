import { Container, Steps, Wrapper } from './styles'

const steps = [
  {
    number: '01',
    title: 'Escuta e análise',
    text: 'Entendimento da situação, dos documentos disponíveis e dos pontos jurídicos envolvidos.',
  },
  {
    number: '02',
    title: 'Estratégia clara',
    text: 'Apresentação das possibilidades, dos próximos passos e da estratégia adequada ao caso.',
  },
  {
    number: '03',
    title: 'Acompanhamento do caso',
    text: 'Comunicação próxima e orientação durante cada etapa do atendimento.',
  },
]

export function Processo() {
  return (
    <Container id="como-funciona">
      <Wrapper>
        <span className="eyebrow">Como funciona</span>
        <h2>Você sabe o que acontece em cada etapa</h2>

        <Steps>
          {steps.map((step) => (
            <article key={step.number}>
              <span className="number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </Steps>
      </Wrapper>
    </Container>
  )
}
