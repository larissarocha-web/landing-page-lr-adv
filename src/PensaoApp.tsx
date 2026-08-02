import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider } from 'styled-components'

import { CookieConsent } from './components/CookieConsent'
import { Footer } from './components/Footer'
import { Header, type HeaderNavItem } from './components/Header'
import { LegalCenter } from './components/LegalCenter'
import { StickyContact } from './components/StickyContact'
import { PENSION_WHATSAPP_MESSAGE } from './constants/brand'
import { GlobalStyle } from './global'
import { redactAnalyticsQuery } from './lib/analytics'
import { Pensao } from './pages/Pensao'
import { defaultTheme } from './styles/themes/default'

const pensionNavItems: HeaderNavItem[] = [
  { href: '#inicio', label: 'Pensão alimentícia' },
  { href: '#atuacao', label: 'Situações atendidas' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#sobre', label: 'Sobre Larissa' },
]

function PensaoApp() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header
        navItems={pensionNavItems}
        trackingPrefix="pension"
        whatsappMessage={PENSION_WHATSAPP_MESSAGE}
      />
      <Pensao />
      <Footer
        ctaLocation="pension_footer"
        whatsappMessage={PENSION_WHATSAPP_MESSAGE}
      />
      <StickyContact
        ctaLocation="pension_sticky"
        whatsappMessage={PENSION_WHATSAPP_MESSAGE}
      />
      <CookieConsent />
      <LegalCenter />
      <GlobalStyle />
      <Analytics beforeSend={redactAnalyticsQuery} />
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default PensaoApp
