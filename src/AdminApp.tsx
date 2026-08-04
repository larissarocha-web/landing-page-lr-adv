import logo from './assets/logo3.png'
import {
  AccessCard,
  AdminGlobalStyle,
  AdminHeader,
  AdminLayout,
  BrandLink,
  GoogleButton,
  SecurityList,
} from './admin-styles'

const officeUrl = String(
  import.meta.env.VITE_LR_OFFICE_URL ||
    'https://script.google.com/macros/s/AKfycbwYP-ZIt0GNGp_v4pTamtFeDgu2EqxfQ8BtYVfdUu1CKc8qKjJYzwwZG8i6APig4wMIHg/exec',
)
const isConfigured = /^https:\/\/script\.google\.com\//.test(officeUrl)

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path
        fill="#4285F4"
        d="M21.35 12.22c0-.74-.07-1.45-.19-2.13H12v4.03h5.24a4.48 4.48 0 0 1-1.94 2.94v2.61h3.14c1.84-1.69 2.91-4.18 2.91-7.45Z"
      />
      <path
        fill="#34A853"
        d="M12 21.72c2.62 0 4.83-.87 6.44-2.35l-3.14-2.61c-.87.58-1.98.93-3.3.93-2.53 0-4.67-1.71-5.44-4.01H3.31v2.69A9.72 9.72 0 0 0 12 21.72Z"
      />
      <path
        fill="#FBBC05"
        d="M6.56 13.68A5.84 5.84 0 0 1 6.26 12c0-.58.1-1.15.3-1.68V7.63H3.31A9.72 9.72 0 0 0 2.28 12c0 1.57.38 3.05 1.03 4.37l3.25-2.69Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.31c1.43 0 2.71.49 3.72 1.45l2.79-2.79A9.36 9.36 0 0 0 12 2.28a9.72 9.72 0 0 0-8.69 5.35l3.25 2.69C7.33 8.02 9.47 6.31 12 6.31Z"
      />
    </svg>
  )
}

export function AdminApp() {
  return (
    <>
      <AdminGlobalStyle />
      <AdminHeader>
        <BrandLink href="/" aria-label="Voltar para a página principal">
          <img src={logo} alt="Larissa Rocha Advogada" />
        </BrandLink>
      </AdminHeader>

      <AdminLayout>
        <section aria-labelledby="office-title">
          <p className="eyebrow">Acesso administrativo</p>
          <h1 id="office-title">Escritório virtual</h1>
          <p className="lead">
            Ambiente privado para organização de contatos, agenda, documentos e
            controle financeiro do escritório.
          </p>

          {isConfigured ? (
            <GoogleButton href={officeUrl} rel="noreferrer">
              <GoogleMark />
              Entrar com Google
            </GoogleButton>
          ) : (
            <GoogleButton as="span" aria-disabled="true" $disabled>
              <GoogleMark />
              Ambiente privado em implantação
            </GoogleButton>
          )}

          <p className="privacy-note">
            Esta página não solicita usuário, senha ou informações de clientes.
          </p>
        </section>

        <AccessCard aria-label="Proteções de acesso">
          <span className="card-number" aria-hidden="true">
            LR
          </span>
          <p className="eyebrow">LR Office</p>
          <h2>Acesso exclusivo da advogada</h2>
          <SecurityList>
            <li>Autenticação protegida pela Conta do Google</li>
            <li>Verificação em duas etapas</li>
            <li>Dados mantidos em ambiente privado</li>
            <li>Nenhum rastreamento nesta página</li>
          </SecurityList>
        </AccessCard>
      </AdminLayout>
    </>
  )
}
