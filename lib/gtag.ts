// Google Analytics 4 - Optimized for 2025
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Event tracking
type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom events for 2025
export const trackInstallClick = () => {
  event({
    action: 'click_install',
    category: 'engagement',
    label: 'Chrome Extension Install',
  })
}

export const trackDocsView = (docName: string) => {
  event({
    action: 'view_docs',
    category: 'documentation',
    label: docName,
  })
}

export const trackCTAClick = (ctaName: string) => {
  event({
    action: 'click_cta',
    category: 'conversion',
    label: ctaName,
  })
}

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        page_path?: string
        event_category?: string
        event_label?: string
        value?: number
      }
    ) => void
  }
}

