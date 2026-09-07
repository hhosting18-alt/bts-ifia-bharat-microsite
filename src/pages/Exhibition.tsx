import { Globe2, UsersRound, MonitorUp, Trophy, Lightbulb, Building2, ShieldCheck, Star, CalendarDays } from 'lucide-react'
import { Hero, FinalBand } from '../components/Hero'
import { Footer } from '../components/Footer'
import { PrimaryButton, SectionTitle } from '../components/Common'

const reasons = [
  ['GLOBAL VISIBILITY', <Globe2/>, 'Showcase your invention to a diverse technology and innovation audience from India and around the world.','#ec087c'],
  ['CONNECT & COLLABORATE', <UsersRound/>, 'Meet innovators, researchers, institutions, industry and ecosystem stakeholders.','#6d20d7'],
  ['DEMONSTRATE YOUR INNOVATION', <MonitorUp/>, 'Display and demonstrate your working invention to visitors and experts.','#164ec9'],
  ['EXPERT RECOGNITION', <Trophy/>, 'Outstanding innovations may be considered for the BTS × IFIA Bharat Global Invention & Innovation Awards 2026.','#ff7a00'],
]

export function Exhibition() {
  return <>
    <Hero pageNo="02" label="EXHIBITION" image="/assets/heroes/hero3.png" title="GLOBAL INVENTION &" accentTitle="INNOVATION EXHIBITION" accent="#ec087c" body={<><div className="hero-subtag">SHOWCASE. CONNECT. INSPIRE THE WORLD.</div><p>Bring your existing invention or innovation to Bengaluru Tech Summit 2026 — Asia’s largest integrated technology event — and connect with innovators, researchers, industry and technology leaders from India and around the world.</p></>} meta={true}>
      <PrimaryButton to="https://forms.gle/yuMsrN4br883syaE9" programme="exhibition">SUBMIT YOUR INVENTION / INNOVATION</PrimaryButton>
    </Hero>
    <main className="page exhibition-page">
      <section><SectionTitle>WHY EXHIBIT?</SectionTitle><div className="four-grid reasons-grid">{reasons.map(([title,icon,text,color])=><div className="reason-card" key={String(title)} style={{'--accent':color} as any}><div className="reason-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section className="three-col-section exhibition-feature-cards">
        <div className="white-card exhibit-card">
          <SectionTitle>WHAT CAN BE EXHIBITED?</SectionTitle>
          <div className="lead-row">
            <div className="lead-badge lead-badge-purple"><Lightbulb/></div>
            <p>The exhibition is sector-agnostic and welcomes existing inventions and innovations across technology and application domains.</p>
          </div>
          <p className="eligible-label">Eligible entries may include:</p>
          <ul><li>Working prototypes</li><li>Demonstrated technologies</li><li>Research-based inventions with practical application potential</li><li>Field-tested and operational solutions (TRL 6–9)</li></ul>
          <div className="callout purple trl-callout"><ShieldCheck/><div><strong>Minimum TRL 6.</strong><br/>Idea-stage or concept-only submissions are not eligible.</div></div>
        </div>

        <div className="white-card exhibit-card">
          <SectionTitle>POD / STALL AT BTS 2026</SectionTitle>
          <div className="lead-row lead-row-stall">
            <div className="stall-illustration" aria-hidden="true"><svg viewBox="0 0 110 100" role="img"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 39h84L88 14H22z"/><path d="M18 39v46h74V39"/><path d="M31 85V56h48v29"/><path d="M22 96h66"/><circle cx="44" cy="55" r="5"/><circle cx="66" cy="55" r="5"/><path d="M40 72c2-7 6-10 10-10s8 3 10 10M62 72c2-7 6-10 10-10s8 3 10 10"/></g></svg></div>
            <p>Selected exhibitors will take a POD / stall to display and demonstrate their invention at BTS 2026.</p>
          </div>
          <div className="display-grid"><MiniUse icon={<Building2/>} text="DISPLAY"/><MiniUse icon={<MonitorUp/>} text="DEMONSTRATE"/><MiniUse icon={<UsersRound/>} text="CONNECT"/></div>
          <div className="callout pink trl-callout"><span className="callout-star"><Star/></span><div>A dedicated POD / stall gives you the space to showcase, engage and build meaningful connections.</div></div>
        </div>

        <div className="white-card exhibit-card">
          <SectionTitle>AWARDS</SectionTitle>
          <div className="awards-lead-row">
            <p>Outstanding innovations selected through the exhibition evaluation will be considered for the first edition of the <b>BTS × IFIA Bharat Global Invention & Innovation Awards 2026.</b></p>
            <div className="trophy-mark laurel-trophy" aria-hidden="true"><svg viewBox="0 0 160 170" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M80 22v89" stroke-width="6"/><path d="M51 113h58" stroke-width="7"/><path d="M65 126h30" stroke-width="7"/><path d="M58 138h44" stroke-width="7"/><path d="M53 32h54v24c0 24-12 36-27 36S53 80 53 56z" stroke-width="7"/><path d="M53 39H31c0 18 7 27 22 29M107 39h22c0 18-7 27-22 29" stroke-width="7"/><path d="M33 120c-16-9-25-25-27-44M127 120c16-9 25-25 27-44" stroke-width="3.5" stroke-dasharray="3 6"/><path d="M26 126c-8-8-13-18-16-29M134 126c8-8 13-18 16-29" stroke-width="3.5" stroke-dasharray="3 6"/></g></svg></div>
          </div>
          <div className="callout gold awards-callout"><div>Selection is based on the merit of the invention and the information and evidence provided. Submission does not guarantee exhibition participation. Only shortlisted inventions will be <b>invited to exhibit.</b></div></div>
        </div>
      </section>
      <section className="dates-panel"><SectionTitle>KEY DATES</SectionTitle><div className="timeline three"><DateStep date="10 SEP 2026" title="Applications Open"/><DateStep date="10 OCT 2026" title="Application Deadline"/><DateStep date="17–19 NOV 2026" title="Global Invention & Innovation Exhibition · Bengaluru Tech Summit 2026"/></div></section>
    </main>
    <FinalBand title="HAVE AN INVENTION OR INNOVATION TO SHOWCASE?" accentText="BRING IT TO THE GLOBAL STAGE." accent="#ec087c" buttons={<PrimaryButton to="https://forms.gle/yuMsrN4br883syaE9" programme="exhibition">SUBMIT YOUR INVENTION / INNOVATION</PrimaryButton>}/>
    <Footer label="Global Invention & Innovation Exhibition"/>
  </>
}
function MiniUse({icon,text}:{icon:any;text:string}) { return <div className="mini-use"><div>{icon}</div><strong>{text}</strong></div> }
function DateStep({date,title}:{date:string;title:string}) { return <div className="date-step"><div className="date-circle"><CalendarDays size={25}/></div><b>{date}</b><p>{title}</p></div> }
