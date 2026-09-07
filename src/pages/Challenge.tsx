import { useState } from 'react'
import {
  ChevronDown, ChevronUp, ArrowRight, Lightbulb, Target, Globe2,
  Store, UsersRound, Trophy, CalendarDays, Search, Star, CheckCircle2, Landmark, Droplets, Leaf, HeartPulse, Bot, Cpu, ShieldCheck, CarFront, Factory, Clock3
} from 'lucide-react'
import { Hero, FinalBand } from '../components/Hero'
import { Footer } from '../components/Footer'
import { PrimaryButton, SectionTitle } from '../components/Common'
import { sectors } from '../data/challenges'

export function Challenge() {
  const [open, setOpen] = useState('01')

  return <>
    <Hero
      pageNo="01"
      label="CHALLENGE-TO-INVENT"
      image="/assets/heroes/hero-challenge.png"
      className="challenge-hero"
      title="EXISTING SOLUTIONS."
      accentTitle="REAL-WORLD CHALLENGES."
      accent="#ec087c"
      body={<p>Do you have an existing invention, innovation, technology, prototype or demonstrated solution that can address a real-world challenge?</p>}
      meta={false}
    >
      <div className="trl-callout">
        <div className="trl-call-icon"><UsersRound size={22}/></div>
        <div className="trl-copy"><strong>MINIMUM<br/>TRL 4</strong></div>
        <i />
        <p>Not a hackathon.<br/><b>Idea-stage or concept-only</b><br/>submissions are not eligible.</p>
      </div>
      <PrimaryButton to="https://forms.gle/WNHSzHwPF4PB1gda9" programme="challenge">SUBMIT YOUR SOLUTION</PrimaryButton>
    </Hero>

    <main className="page challenge-page">
      <section className="what-section">
        <div className="what-copy">
          <SectionTitle>WHAT IS CHALLENGE-TO-INVENT?</SectionTitle>
          <p>A solution-sourcing programme that connects existing inventions, innovations, technologies, prototypes and demonstrated solutions with clearly defined real-world challenges.</p>
          <p>Your solution does not need to have been originally developed for the stated challenge. It should demonstrate a meaningful ability to address the challenge.</p>
        </div>

        <div className="process-flow">
          <ProcessCard title="EXISTING SOLUTION" icon={<Lightbulb/>} text={<>Invention · Technology<br/>Prototype · Demonstrated<br/>Solution</>} color="#ec087c" />
          <div className="flow-arrow"><ArrowRight size={22}/></div>
          <ProcessCard title="REAL CHALLENGE" icon={<Target/>} text={<>Select the challenge<br/>that best matches<br/>your solution.</>} color="#164ec9" />
          <div className="flow-arrow"><ArrowRight size={22}/></div>
          <ProcessCard title="GLOBAL PLATFORM" icon={<Globe2/>} text={<>Selected solutions<br/>progress to showcase<br/>at BTS 2026.</>} color="#ff6a00" />
        </div>
      </section>

      <section className="challenge-explorer panel-light">
        <div className="sector-panel">
          <div className="explorer-heading">
            <span>9 SECTORS</span> <b>•</b> <strong>28 CHALLENGES</strong>
            <p>Explore the challenge statements under each sector.</p>
          </div>

          <div className="sector-grid">
            {sectors.map(s => (
              <button
                key={s.id}
                onClick={() => setOpen(s.id)}
                className={`sector-tile ${open === s.id ? 'selected' : ''}`}
                style={{'--sector': s.color} as React.CSSProperties}
              >
                <span className="sector-icon" style={{color:s.color}}>{sectorIcons[s.id]}</span>
                <span className="sector-no" style={{color:s.color}}>{s.id}</span>
                <span>{s.short}</span>
              </button>
            ))}
          </div>

        </div>

        <div className="accordion-panel">
          <h3>EXPLORE THE CHALLENGES</h3>
          <p>Click on a sector to view the challenge statements.</p>

          {sectors.map(s => (
            <div className={`accordion ${open === s.id ? 'open' : ''}`} key={s.id}>
              <button onClick={() => setOpen(open === s.id ? '' : s.id)} aria-expanded={open === s.id}>
                <span className="acc-no" style={{color:s.color}}>{s.id}</span>
                <span>{s.title.toUpperCase()}</span>
                {open === s.id ? <ChevronUp size={15}/> : <ChevronDown size={15}/>}
              </button>

              {open === s.id && (
                <div className="acc-content">
                  {s.challenges.map(c => (
                    <div className="challenge-entry" key={c.code}>
                      <div className="challenge-entry-title">
                        <span className="challenge-code">GIC-C2I-2026-{c.code}</span>
                        <b>{c.title}</b>
                      </div>
                      <p>{c.question}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      <section className="pathway-strip">
        <MiniPath icon={<Store/>} title="EXHIBIT" text="Selected solutions will be invited to take a dedicated POD / stall at BTS 2026 to display and demonstrate their solution." color="#ec087c"/>
        <MiniPath icon={<UsersRound/>} title="EVALUATED" text="Expert & jury evaluation at the exhibition." color="#164ec9"/>
        <MiniPath icon={<Trophy/>} title="AWARDS CONSIDERATION" text="Outstanding solutions selected through the evaluation will be considered for the first edition of the BTS × IFIA Bharat Global Invention & Innovation Awards 2026." color="#ff6a00"/>
      </section>

      <section className="dates-panel">
        <SectionTitle>KEY DATES</SectionTitle>
        <div className="timeline five">
          <DateStep date="10 SEP 2026" title="Applications Open" icon={<CalendarDays/>}/>
          <DateStep date="10 OCT 2026" title="Application Deadline" icon={<CalendarDays/>}/>
          <DateStep date="16–23 OCT 2026" title="Expert & Jury Evaluation" icon={<Search/>}/>
          <DateStep date="24–28 OCT 2026" title="Final Selection" icon={<Star/>}/>
          <DateStep date="29–31 OCT 2026" title="Selected Solution Confirmation" icon={<CheckCircle2/>}/>
          <DateStep date="17–19 NOV 2026" title="Bengaluru Tech Summit (Exhibition)" icon={<Landmark/>}/>
        </div>
      </section>
    </main>

    <FinalBand
      title="HAVE AN EXISTING SOLUTION?"
      accentText="BRING IT TO CHALLENGE-TO-INVENT."
      accent="#ec087c"
      buttons={<PrimaryButton to="https://forms.gle/WNHSzHwPF4PB1gda9" programme="challenge">SUBMIT YOUR SOLUTION</PrimaryButton>}
    />
    <Footer label="Challenge-to-Invent Programme"/>
  </>
}

const sectorIcons: Record<string, React.ReactNode> = {
  '01': <Droplets />,
  '02': <Leaf />,
  '03': <HeartPulse />,
  '04': <Bot />,
  '05': <Cpu />,
  '06': <ShieldCheck />,
  '07': <CarFront />,
  '08': <Factory />,
  '09': <Clock3 />,
}

function ProcessCard({title, icon, text, color}:{title:string; icon:React.ReactNode; text:React.ReactNode; color:string}) {
  return <div className="process-card" style={{'--accent':color} as React.CSSProperties}>
    <div className="process-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
}

function MiniPath({icon,title,text,color}:{icon:React.ReactNode;title:string;text:string;color:string}) {
  return <div className="mini-path" style={{'--accent':color} as React.CSSProperties}>
    <div className="path-icon">{icon}</div>
    <div><h3>{title}</h3><p>{text}</p></div>
  </div>
}

function DateStep({date,title,icon}:{date:string;title:string;icon:React.ReactNode}) {
  return <div className="date-step">
    <div className="date-circle">{icon}</div>
    <b>{date}</b>
    <p>{title}</p>
  </div>
}
