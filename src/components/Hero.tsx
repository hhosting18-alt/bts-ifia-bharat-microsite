import { ReactNode } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'

export function Hero({
  pageNo, label, title, accentTitle, body, image, accent = '#ec087c', meta = true, children, className = ''
}: { pageNo: string; label: string; title: string; accentTitle?: string; body: ReactNode; image: string; accent?: string; meta?: boolean; children?: ReactNode; className?: string }) {
  const showIndex = Boolean(pageNo || label)
  return <section className={`hero ${className}`.trim()} style={{'--accent': accent, '--hero': `url(${image})`} as any}>
    <div className="hero-overlay" />
    <div className="hero-content">
      {showIndex && <div className="hero-index-row">{pageNo && <span className="page-badge">{pageNo}</span>}<span className="hero-label">{label}</span></div>}
      <h1>{title}{accentTitle && <><br/><span>{accentTitle}</span></>}</h1>
      <div className="hero-body">{body}</div>
      {meta && <div className="hero-meta"><span><CalendarDays size={20}/>17–19 NOVEMBER 2026</span><i/> <span><MapPin size={20}/>BIEC, BENGALURU</span></div>}
      {children}
    </div>
  </section>
}

/* Final CTA band — text only (no icon), buttons on the right */
export function FinalBand({ title, accentText, buttons, accent = '#ec087c', className = '' }: { title: string; accentText: string; buttons: ReactNode; accent?: string; icon?: ReactNode; className?: string }) {
  return <section className={`final-band ${className}`.trim()} style={{'--accent': accent} as any}><div className="final-left"><div><h2>{title}</h2><div className="final-accent">{accentText}</div></div></div><div className="final-buttons">{buttons}</div></section>
}
