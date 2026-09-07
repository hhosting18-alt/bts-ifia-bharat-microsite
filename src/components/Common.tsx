import { ReactNode } from 'react'
import { ArrowRight, Lightbulb, Boxes, Trophy, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AccentRule() { return <div className="accent-rule" /> }

export function SectionTitle({ children }: { children: ReactNode; accent?: string }) {
  return <div className="section-title"><h2>{children}</h2><AccentRule /></div>
}

/* Programme icons — one icon per programme, used identically on every page */
export const programmeIcon = {
  challenge: Lightbulb,
  exhibition: Boxes,
  awards: Trophy,
} as const
export type Programme = keyof typeof programmeIcon

/* CTA gradients by programme colour */
const gradients: Record<string, string> = {
  pink: 'linear-gradient(90deg,#ff1f8f 0%,#d6076f 55%,#b0055d 100%)',
  blue: 'linear-gradient(90deg,#1e8dff 0%,#0866d4 55%,#0748a8 100%)',
  gold: 'linear-gradient(90deg,#ff9d1f 0%,#f07c00 55%,#c95f00 100%)',
}
const programmeTone: Record<Programme, 'pink' | 'blue' | 'gold'> = { challenge: 'pink', exhibition: 'blue', awards: 'gold' }
function toneOf(accent: string, programme?: Programme): 'pink' | 'blue' | 'gold' {
  if (programme) return programmeTone[programme]
  const a = accent.toLowerCase()
  if (/^#[01]/.test(a)) return 'blue'
  if (/^#(f|dd|db7|d7|c9)/.test(a)) return 'gold'
  return 'pink'
}

export function PrimaryButton({ to = '#', children, accent = '#ec087c', outline = false, icon, programme }:
  { to?: string; children: ReactNode; accent?: string; outline?: boolean; icon?: ReactNode; programme?: Programme }) {
  const tone = toneOf(accent, programme)
  const className = `btn ${outline ? 'btn-outline' : 'btn-primary'} tone-${tone}`
  const style = !outline ? { background: gradients[tone] } : { borderColor: accent, color: accent }
  const IconCmp = programme ? programmeIcon[programme] : null
  const lead = icon ?? (IconCmp ? <IconCmp className="btn-icon" size={30} strokeWidth={1.8} /> : null)
  const content = <>{lead && <span className="btn-lead">{lead}</span>}<span className="btn-text">{children}</span><ArrowRight className="btn-arrow" size={22}/></>
  return /^https?:\/\//.test(to)
    ? <a href={to} className={className} style={style} target="_blank" rel="noopener noreferrer">{content}</a>
    : <Link to={to} className={className} style={style}>{content}</Link>
}

export function DatePill({ icon = <CalendarDays size={20}/>, children }: { icon?: ReactNode; children: ReactNode }) { return <div className="date-pill">{icon}<span>{children}</span></div> }

export function MiniIconCard({ icon, title, text, accent }: { icon: ReactNode; title: string; text: ReactNode; accent: string }) {
  return <div className="mini-card" style={{'--accent': accent} as any}><div className="mini-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>
}
