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
            Four stages: from lawn to lake to solution.
          </p>
        </div>
      </div>

      <ChemSection num="01" label="The Compound" theme="light">
        <h2>The molecule that dissolves into everything.</h2>
        <p>
          Imidacloprid (C₉H₁₀ClN₅O₂) is a highly water-soluble neonicotinoid pesticide with a log<em>K</em><sub>ow</sub> of 0.57. Its polar molecular structure strongly favors dissolving into water over binding to nonpolar surfaces, so when rain hits a treated lawn, it carries imidacloprid directly into runoff with almost no natural attenuation. The compound does not bind to soil. It does not evaporate. It follows the water, all the way to the lake.
        </p>
      </ChemSection>

      <ChemSection num="02" label="The Damage" theme="mid">
        <h2>Parts-per-trillion. Real consequences.</h2>
        <p>
          Once in the water supply, imidacloprid and its cytochrome P450 metabolites (IMI-olefin, 5-OH-IMI) act as endocrine disruptors by competitively binding to estrogen and thyroid hormone receptors through molecular mimicry. Their structural geometry is similar enough to natural hormones that they fit the same receptor lock and trigger false biological signals, even at the parts-per-trillion concentrations at which hormones normally operate. Children and developing fetuses carry the highest effective dose per body weight of anyone drinking that water.
        </p>
        <div className="chem-callout">
          <span className="chem-callout__label">Mechanism</span>
          <span className="chem-callout__text">Estrogen receptor competitive binding via molecular mimicry at ppt concentrations</span>
        </div>
      </ChemSection>

      <ChemSection num="03" label="The Failure" theme="dark">
        <h2>Standard treatment was never designed for this.</h2>
        <p>
          Municipal water treatment removes only 30–50% of imidacloprid. The reason is chemistry: imidacloprid's stable heterocyclic ring structure (the chlorinated imidazolidine ring) resists oxidation by chlorine. And its hydrophilicity means it passes straight through sand filtration fully dissolved, rather than as a particle that can be caught. Conventional treatment was designed to remove pathogens and sediment. A polar, stable, water-soluble pesticide metabolite passes through almost untouched.
        </p>
        <div className="chem-callout">
          <span className="chem-callout__label">Why chlorine fails</span>
          <span className="chem-callout__text">The chlorinated imidazolidine ring resists oxidation. The same stability that makes it a good pesticide makes it treatment-resistant.</span>
        </div>
      </ChemSection>

      <ChemSection num="04" label="The Solution" theme="forest">
        <h2>π–π stacking. 97% removal. Permanent.</h2>
        <p>
          Pyrolysis of organic biomass at 500–700°C drives off all hydrogen and oxygen, leaving behind a pure fused aromatic carbon lattice with up to 1,500 m²/g of surface area. When imidacloprid contacts that surface, the π-electrons delocalized across its imidazolidine ring are attracted to the π-electrons delocalized across biochar's graphene-like carbon layers through π–π stacking interactions, pulling the molecule out of solution and adsorbing it onto the biochar surface at greater than 97% removal efficiency.
        </p>
        <p>
          After adsorption, soil microbes in the gravel underdrain complete biodegradation via oxidative metabolism:
        </p>
        <div className="chem-equation">
          C₉H₁₀ClN₅O₂&nbsp;+&nbsp;O₂&nbsp;→&nbsp;CO₂&nbsp;+&nbsp;H₂O&nbsp;+&nbsp;NO₃⁻&nbsp;+&nbsp;Cl⁻
        </div>
        <p className="chem-equation__note">
          The compound is not relocated. It is destroyed.
        </p>
      </ChemSection>

    </main>
  )
}
