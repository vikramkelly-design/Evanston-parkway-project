import { useEffect, useRef, useState } from 'react'
import './Chemistry.css'

function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, ...options }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, isVisible]
}

function ChemSection({ num, label, children, theme = 'light' }) {
  const [ref, visible] = useScrollReveal()
  return (
    <section className={`chem-section chem-section--${theme}`} ref={ref}>
      <div className={`chem-section__inner ${visible ? 'chem-section__inner--in' : ''}`}>
        <div className="chem-section__number">{num}</div>
        <div className="chem-section__content">
          <p className="chem-section__label">{label}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export default function Chemistry() {
  return (
    <main className="chemistry-page">

      <div className="chemistry-hero">
        <div className="chemistry-hero__inner">
          <p className="chemistry-hero__eyebrow">Mechanism</p>
          <h1 className="chemistry-hero__headline">The Chemistry</h1>
          <p className="chemistry-hero__sub">
            How a lawn pesticide gets from a spray bottle to your tap, and why it's so hard to stop.
          </p>
        </div>
      </div>

      <ChemSection num="01" label="The Problem" theme="light">
        <h2>Imidacloprid and water solubility</h2>
        <p>
          Imidacloprid (C₉H₁₀ClN₅O₂) is a highly water-soluble molecule with a solubility of 610 mg/L that can be found in most pesticides used today. This is mainly accredited to the fact that the polar nitrogen and oxygen atoms form hydrogen bonds with surrounding water molecules.
        </p>
        <p>
          This all means that it dissolves almost completely into water rather than staying bound to what it was sprayed on. As the water travels from lawns to the lake, the imidacloprid follows. Imidacloprid is very unhealthy to consume, so this causes a large contamination in our water supply.
        </p>
      </ChemSection>

      <ChemSection num="02" label="The Impact" theme="mid">
        <h2>Endocrine Disruption</h2>
        <p>
          The human endocrine system communicates via hormones: small chemical messengers that travel quickly through the body. When a hormone delivers a message, it binds to a receptor in the body. Receptors and hormones fit together perfectly, like a key in a lock.
        </p>
        <p>
          Unfortunately, imidacloprid has a very similar shape to estrogen, a hormone found frequently in the human body. When imidacloprid is ingested, it can bind to the estrogen-receiving receptors. This causes a disruption to the endocrine system, with false signals being sent, which can be very problematic.
        </p>
        <div className="chem-callout">
          <span className="chem-callout__label">Mechanism</span>
          <span className="chem-callout__text">Imidacloprid mimics estrogen's shape, binding to hormone receptors and triggering false signals throughout the body</span>
        </div>
      </ChemSection>

      <ChemSection num="03" label="The Persistence" theme="dark">
        <h2>Persistence and chronic exposure</h2>
        <p>
          Imidacloprid has a soil half-life of 40 to 1,000 days. This is what allows it to burrow into our soil and stay there long enough to leak into the lake which holds our drinking water.
        </p>
        <p>
          Once inside our bodies, it metabolizes primarily by liver cytochrome P450 enzymes into several breakdown products called metabolites. These metabolites are even more toxic than the imidacloprid by itself.
        </p>
        <div className="chem-callout">
          <span className="chem-callout__label">Half-life</span>
          <span className="chem-callout__text">40 to 1,000 days in soil — long enough to accumulate season after season and continuously leach into groundwater</span>
        </div>
      </ChemSection>

      <ChemSection num="04" label="Solution" theme="forest">
        <h2>Biochar adsorption via π–π stacking</h2>
        <p>
          Biochar is the product of heating organic materials at very high temperatures with little to no oxygen present. What remains are structurally sound carbon rings with delocalized π-electrons, similar to how electrons are freely shared in metallic bonding.
        </p>
        <p>
          Imidacloprid also has these delocalized π-electrons. When biochar and imidacloprid collide, these π-electrons readily attract each other in a process known as π–π stacking. As a result, the biochar adsorbs the imidacloprid. If biochar is placed between the sewer system and the lawns, it serves as a filter to successfully remove the imidacloprid from the water before it ever reaches the lake.
        </p>
      </ChemSection>

    </main>
  )
}
