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
        O site não solicita nem armazena nome, telefone ou relato jurídico. Ao
        selecionar um botão de WhatsApp, você é direcionado ao aplicativo. As
        informações enviadas nesse canal são usadas para responder à solicitação
        e conduzir o atendimento jurídico, quando aplicável.
      </p>
      <h3>Medição anônima do site</h3>
      <p>
        Usamos Vercel Web Analytics e Speed Insights para obter estatísticas
        agregadas de visitas e desempenho, sem cookies e sem identificar
        visitantes. Parâmetros da URL são removidos antes do envio. Essas
        ferramentas podem registrar página visitada, origem, país, dispositivo,
        navegador e métricas técnicas de carregamento.
      </p>
      <h3>Medição de campanhas</h3>
      <p>
        Mediante seu consentimento, Google Tag Manager, Analytics e Google Ads
        medem interações gerais como cliques no WhatsApp e origem da visita. Não
        enviamos nome, telefone, resumo de caso ou conteúdo jurídico para
        plataformas de publicidade.
      </p>
      <h3>Seus direitos</h3>
      <p>
        Para solicitar informações, correção, eliminação ou para exercer outros
        direitos relacionados aos seus dados, escreva para
        juridicolarissarocha@gmail.com.
      </p>
      <p className="updated">Atualizada em 2 de agosto de 2026.</p>
    </div>
  )
}

function CookiesContent() {
  return (
    <div>
      <p>
        Usamos armazenamento local necessário para lembrar sua escolha de
        privacidade e, somente com sua autorização, recursos analíticos e de
        publicidade do Google.
      </p>
      <h3>Medição sem cookies</h3>
      <p>
        Vercel Web Analytics e Speed Insights medem visitas e desempenho de
        forma agregada, sem cookies e sem criar perfis publicitários. Parâmetros
        da URL são removidos antes do envio.
      </p>
      <h3>Cookies opcionais</h3>
      <p>
        Google Tag Manager, Analytics e Google Ads só poderão ser ativados após
        seu aceite. Eles servem para medir a navegação e a origem de campanhas,
        nunca o conteúdo do seu caso.
      </p>
      <p className="updated">
        Você pode alterar sua escolha a qualquer momento pelo rodapé.
      </p>
    </div>
  )
}
