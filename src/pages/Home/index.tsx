import { Container, Wrapper, WhatsButton } from './styles'
import blogueira from '../../assets/larissarocha01.png'
import { FaWhatsapp } from 'react-icons/fa'

export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          <h4>ADVOCACIA ESPECIALIZADA EM</h4>

          <h1>Direito de Família</h1>

          <p>
            Atendimento online, com empatia e compromisso para solucionar
            questões familiares com segurança e tranquilidade.
          </p>

          <WhatsButton
            href="https://wa.me/5561991010204?text=Olá,%20preciso%20de%20orientação%20em%20Direito%20de%20Família."
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Falar com a advogada agora
          </WhatsButton>
        </div>

        <img src={blogueira} alt="Larissa Rocha advogada" />
      </Wrapper>
    </Container>
  )
}
