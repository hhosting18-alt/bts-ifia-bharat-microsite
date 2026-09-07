import { ArrowRight, FlaskConical, GraduationCap, Rocket, Factory, Lightbulb, Boxes, Trophy, CheckCircle2, MapPin, CalendarDays } from 'lucide-react'
import { Hero, FinalBand } from '../components/Hero'
import { Footer } from '../components/Footer'
import { PrimaryButton, SectionTitle } from '../components/Common'

const LINKS = {
  challengeForm: 'https://forms.gle/WNHSzHwPF4PB1gda9',
  exhibitionForm: 'https://forms.gle/yuMsrN4br883syaE9',
  bts: 'https://www.bengalurutechsummit.com/',
  ifiaBharat: 'https://www.ifiabharat.com/',
}

const participants = [
  ['Inventors &\nInnovators', <Lightbulb/>, '#ec087c'],
  ['Researchers &\nScientists', <FlaskConical/>, '#ff80d7'],
  ['Universities &\nInstitutions', <GraduationCap/>, '#00c4ff'],
  ['Startups &\nCompanies', <Rocket/>, '#21e6d2'],
  ['Industry &\nTechnology\nProviders', <Factory/>, '#d9ff00'],
] as const

export function Home() {
  return <>
    <Hero pageNo="" label="" image="/assets/heroes/hero-home.png" meta={false} className="home-hero" title="GLOBAL INVENTION & INNOVATION CONNECT 2026" accentTitle="India’s First Invention Challenge & Connect Programme" accent="#ec087c" body={<p>Bringing existing inventions, innovators and real-world challenges together under the umbrella of Bengaluru Tech Summit 2026.</p>}>
      <div className="home-hero-meta">BTS 2026 <b>•</b> 17–19 NOVEMBER 2026 <b>•</b> BIEC, BENGALURU</div>
      <div className="home-cta-grid">
        <PrimaryButton to={LINKS.challengeForm} programme="challenge">SUBMIT YOUR SOLUTION <small>Challenge-to-Invent</small></PrimaryButton>
        <PrimaryButton to={LINKS.exhibitionForm} programme="exhibition">SUBMIT YOUR INVENTION / INNOVATION <small>Global Exhibition</small></PrimaryButton>
        <PrimaryButton to="/awards" programme="awards">EXPLORE THE AWARDS <small>Global Invention & Innovation Awards 2026</small></PrimaryButton>
      </div>
    </Hero>

    <main className="home-page-shell"><div className="page home-page">
      <section className="participant-panel dark-panel">
        <SectionTitle>WHO CAN PARTICIPATE?</SectionTitle>
        <div className="subtitle-pink">INDIAN & INTERNATIONAL PARTICIPANTS</div>
        <div className="participant-grid">{participants.map(([name, icon, color], i) => <div className="participant" key={i}><div className="participant-icon" style={{color}}>{icon}</div><div>{name}</div></div>)}</div>
      </section>

      <section className="initiatives">
        <div className="initiative-card pink-card"><span className="big-no">01</span><Lightbulb className="card-icon" size={70} strokeWidth={2.1}/><h3>CHALLENGE-TO-INVENT</h3><div className="short-rule"/><p>Do you have an existing solution to a real-world challenge?</p><p>Submit an existing invention, innovation, technology, prototype or demonstrated solution against one of the published challenge statements.</p><div className="stats"><b>9</b><span>SECTORS</span><em>|</em><b>28</b><span>CHALLENGES</span></div><PrimaryButton to={LINKS.challengeForm} programme="challenge">SUBMIT YOUR SOLUTION</PrimaryButton></div>
        <div className="initiative-card blue-card"><span className="big-no">02</span><Boxes className="card-icon" size={70} strokeWidth={2.1}/><h3>GLOBAL INVENTION & INNOVATION EXHIBITION</h3><div className="short-rule"/><p>Showcase your existing inventions and innovations from Karnataka, India and around the world at BTS 2026.</p><p>Bring your innovation to a global audience for exhibition, demonstration and expert evaluation.</p><div className="card-check"><CheckCircle2 size={18}/> Minimum TRL 6+</div><PrimaryButton to={LINKS.exhibitionForm} programme="exhibition">SUBMIT YOUR INVENTION / INNOVATION</PrimaryButton></div>
        <div className="initiative-card gold-card"><span className="big-no">03</span><Trophy className="card-icon" size={70} strokeWidth={2.1}/><h3>GLOBAL INVENTION & INNOVATION AWARDS 2026</h3><div className="short-rule"/><p>Outstanding inventions deserve recognition.</p><p>Outstanding inventions emerging through Challenge-to-Invent and/or the Exhibition may be considered for the Awards.</p><div className="card-check"><CheckCircle2 size={18}/> No separate Awards application.</div><PrimaryButton to="/awards" programme="awards">EXPLORE THE AWARDS</PrimaryButton></div>
      </section>

      <section className="bts-band">
        <img src="/assets/heroes/hero-home.png" alt="Bengaluru Tech Summit"/>
        <div className="bts-copy"><h3>PART OF BENGALURU TECH SUMMIT 2026</h3><div className="bts-meta"><span><CalendarDays size={18}/>17–19 November 2026</span><i/> <span><MapPin size={18}/>BIEC, Bengaluru</span></div><p>Global Invention & Innovation Connect 2026 is presented under the umbrella of Bengaluru Tech Summit 2026.</p></div>
        <div className="bts-links">
          <a href={LINKS.bts} target="_blank" rel="noopener noreferrer" className="outline-pill">EXPLORE BTS 2026 <ArrowRight size={17}/></a>
          <a href={LINKS.ifiaBharat} target="_blank" rel="noopener noreferrer" className="outline-pill pill-pink">EXPLORE IFIA BHARAT <ArrowRight size={17}/></a>
        </div>
      </section>
    </div></main>

    <FinalBand title="HAVE AN INVENTION OR INNOVATION?" accentText="BRING IT TO THE GLOBAL STAGE." accent="#ec087c" buttons={<><PrimaryButton to={LINKS.challengeForm} programme="challenge">SUBMIT YOUR SOLUTION <small>Challenge-to-Invent</small></PrimaryButton><PrimaryButton to={LINKS.exhibitionForm} programme="exhibition">SUBMIT YOUR INVENTION / INNOVATION <small>Global Exhibition</small></PrimaryButton></>}/>
    <Footer />
  </>
}
