import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'

import { OPEN_LEGAL_NOTICE_EVENT } from '../../lib/marketing'
import { Content, Overlay } from './styles'

type LegalDocument = 'privacy' | 'cookies'

const titles: Record<LegalDocument, string> = {
  privacy: 'Política de Privacidade',
  cookies: 'Política de Cookies',
}

export function LegalCenter() {
  const [document, setDocument] = useState<LegalDocument | null>(null)

  useEffect(() => {
    const openDocument = (event: Event) => {
      const requested = (event as CustomEvent<LegalDocument>).detail
      if (requested === 'privacy' || requested === 'cookies')
        setDocument(requested)
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDocument(null)
    }

    window.addEventListener(OPEN_LEGAL_NOTICE_EVENT, openDocument)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener(OPEN_LEGAL_NOTICE_EVENT, openDocument)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  if (!document) return null

  return (
    <Overlay
      onMouseDown={(event) =>
        event.currentTarget === event.target && setDocument(null)
      }
    >
      <Content role="dialog" aria-modal="true" aria-labelledby="legal-title">
        <header>
          <h2 id="legal-title">{titles[document]}</h2>
          <button
            type="button"
            onClick={() => setDocument(null)}
            aria-label="Fechar"
          >
            <IoClose size={24} />
          </button>
        </header>

        {document === 'privacy' ? <PrivacyContent /> : <CookiesContent />}
      </Content>
    </Overlay>
  )
}

function PrivacyContent() {
  return (
    <div>
      <p>
        Larissa Rocha Advogada, OAB/DF nº 65.877, trata dados pessoais com
        responsabilidade e apenas para os fins informados nesta página.
      </p>
      <h3>Dados e finalidade</h3>
      <p>
        Ao usar o atendimento inicial, nome e resumo do caso são inseridos por
        você diretamente no WhatsApp. O site não armazena esses dados. Quando
        você entra em contato, os dados são usados para responder à solicitação
        e conduzir o atendimento jurídico, quando aplicável.
      </p>
      <h3>Medição e publicidade</h3>
      <p>
        Medimos, mediante seu consentimento, interações gerais como cliques no
        WhatsApp e origem da visita. Não enviamos nome, telefone, resumo de caso
        ou conteúdo jurídico para plataformas de publicidade.
      </p>
      <h3>Seus direitos</h3>
      <p>
        Para solicitar informações, correção, eliminação ou para exercer outros
        direitos relacionados aos seus dados, escreva para
        juridicolarissarocha@gmail.com.
      </p>
      <p className="updated">Atualizada em 17 de julho de 2026.</p>
    </div>
  )
}

function CookiesContent() {
  return (
    <div>
      <p>
        Usamos recursos necessários para lembrar sua escolha de privacidade e,
        somente com sua autorização, recursos analíticos e de publicidade.
      </p>
      <h3>Cookies necessários</h3>
      <p>
        Guardam sua preferência de consentimento e não são usados para criar
        perfis publicitários.
      </p>
      <h3>Cookies opcionais</h3>
      <p>
        Google Tag Manager, Analytics, Google Ads e Meta só poderão ser ativados
        após seu aceite. Eles servem para medir a navegação e a origem de
        campanhas, nunca o conteúdo do seu caso.
      </p>
      <p className="updated">
        Você pode alterar sua escolha a qualquer momento pelo rodapé.
      </p>
    </div>
  )
}
