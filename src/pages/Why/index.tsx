import { Container, Wrapper, Content, Cards } from './styles'
import foto from '../../assets/larissarocha02.png'

export function Why() {
  return (
    <Container id="sobre">
      <Wrapper>
        {/* IMAGEM */}
        <img src={foto} alt="Larissa Rocha Advogada" />

        {/* TEXTO */}
        <Content>
          <h2>Atendimento jurídico com clareza e segurança</h2>

          <p>
            Sou advogada com atuação em Direito de Família, oferecendo
            orientação jurídica objetiva e acompanhamento próximo em cada etapa
            do seu caso.
          </p>

          <p>
            Meu foco é garantir que você entenda exatamente o que está
            acontecendo, com segurança para tomar decisões importantes.
          </p>

          {/* DIFERENCIAIS */}
          <Cards>
            <div>
              <h4>Comunicação direta</h4>
              <p>Você sempre sabe o que está acontecendo no seu processo.</p>
            </div>

            <div>
              <h4>Atendimento online</h4>
              <p>Resolva tudo com praticidade, sem deslocamentos.</p>
            </div>

            <div>
              <h4>Profissionalismo</h4>
              <p>Condução técnica, responsável e focada no seu resultado.</p>
            </div>
          </Cards>
        </Content>
      </Wrapper>
    </Container>
  )
}
