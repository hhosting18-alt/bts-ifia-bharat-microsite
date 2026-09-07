import { Globe2, BadgeCheck, UsersRound, Rocket, Lightbulb, ClipboardList, UserRoundCheck, Trophy, CalendarDays, ArrowRight } from 'lucide-react'
import { Hero, FinalBand } from '../components/Hero'
import { Footer } from '../components/Footer'
import { PrimaryButton, SectionTitle } from '../components/Common'

const reasons = [
  ['GLOBAL VISIBILITY', <Globe2/>, 'Present your invention on the global stage at one of Asia’s leading technology platforms.','#4d22c9'],
  ['EXPERT RECOGNITION', <BadgeCheck/>, 'Be evaluated by a distinguished Grand Jury of experts and technology leaders.','#ec087c'],
  ['GLOBAL CONNECTIONS', <UsersRound/>, 'Connect with innovators, researchers, institutions, industry leaders and investors.','#164ec9'],
  ["A PLATFORM FOR WHAT’S NEXT", <Rocket/>, 'Gain visibility, credibility and opportunities that can take your innovation further.','#ff7a00'],
]
const steps = [
  ['1. DISCOVER & ENTER', <Lightbulb/>, 'Inventions enter through the Challenge-to-Invent and/or the Global Invention & Innovation Exhibition.','#4528ce'],
  ['2. SELECT & SHORTLIST', <ClipboardList/>, 'Eligible and shortlisted inventions are evaluated through the respective programme processes.','#ec087c'],
  ['3. NOMINATE', <UserRoundCheck/>, 'Outstanding selected inventions are identified for award consideration.','#164ec9'],
  ['4. GRAND JURY EVALUATION', <UsersRound/>, 'A distinguished Grand Jury conducts the final assessment against the approved Awards criteria.','#087b8a'],
  ['5. AWARDS', <Trophy/>, 'Award recipients are announced at the BTS × IFIA Bharat Global Invention & Innovation Awards 2026.','#ff7a00'],
]
export function Awards() {
  return <>
    <Hero pageNo="03" label="AWARDS" image="/assets/heroes/hero-awards.png" title="GLOBAL INVENTION & INNOVATION" accentTitle="AWARDS 2026" accent="#f5a400" body={<><div className="hero-subtag gold">RECOGNISING THE INVENTIONS SHAPING TOMORROW</div><p>The Global Invention & Innovation Awards 2026 are the final recognition stage of the BTS × IFIA Bharat Global Invention & Innovation Connect 2026.</p><p>Outstanding inventions and innovations emerging through the Challenge-to-Invent programme and/or the Global Invention & Innovation Exhibition will be considered for the Awards.</p></>} meta={false} className="awards-hero">
      <div className="awards-note"><Trophy/><div><strong>There is no separate open application for the awards.</strong><br/>Award consideration is through the Challenge-to-Invent and Global Invention & Innovation Exhibition pathways.</div></div>
    </Hero>
    <main className="page awards-page">
      <section><SectionTitle>WHY THIS RECOGNITION MATTERS</SectionTitle><div className="four-grid reasons-grid">{reasons.map(([title,icon,text,color])=><div className="reason-card" key={String(title)} style={{'--accent':color} as any}><div className="reason-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section><SectionTitle>THE JOURNEY TO RECOGNITION</SectionTitle><div className="journey">{steps.map(([title,icon,text,color],i)=><div className="journey-step" key={String(title)}>{i>0 && <ArrowRight className="journey-arrow"/>}<div className="journey-icon" style={{color:color as string}}>{icon}</div><h3 style={{color:color as string}}>{title}</h3><p>{text}</p></div>)}</div></section>
      <section className="grand-panel"><div className="jury"><div className="jury-icon"><UsersRound/></div><div><h3>THE GRAND JURY</h3><p>A distinguished panel of experts, innovators and industry leaders from India and around the world will evaluate inventions on their merit, demonstrated performance, significance and potential impact, independent of the profile or size of the applicant organisation.</p></div></div><div className="ceremony"><CalendarDays/><div><h3>AWARDS CEREMONY</h3><b>19 NOVEMBER 2026</b><p>BENGALURU TECH SUMMIT 2026<br/>BIEC, Bengaluru</p></div><Trophy className="ceremony-trophy"/></div></section>
    </main>
    <FinalBand className="awards-final-band" title="HAVE AN OUTSTANDING INVENTION OR INNOVATION?" accentText="THIS COULD BE YOUR MOMENT." accent="#f5a400" buttons={<><PrimaryButton to="/challenge" programme="challenge">PARTICIPATE IN CHALLENGE</PrimaryButton><PrimaryButton to="/exhibition" programme="exhibition">EXHIBIT YOUR INNOVATION</PrimaryButton></>}/>
    <Footer label="Global Invention & Innovation Awards 2026"/>
  </>
}
