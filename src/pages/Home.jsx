import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Home.css'

function RevealBlock({ children, delay = 0, className = '' }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const [heroOffset, setHeroOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setHeroOffset(window.scrollY * 0.45)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero__bg"
          ref={heroRef}
          style={{
            backgroundImage: `url(/images/lake-michigan.webp)`,
            transform: `translateY(${heroOffset}px)`,
          }}
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Evanston, Illinois</p>
          <h1 className="hero__headline">
            The Lake That<br />Feeds 30 Million
          </h1>
          <p className="hero__sub">
            A chemical chain that starts on a residential lawn ends in the drinking water of the Midwest.
            There is a solution.
          </p>
          <div className="hero__scroll-hint">
            <span />
          </div>
        </div>
      </section>

      {/* ── STAT BAND ── */}
      <section className="stat-band">
        <RevealBlock className="stat-band__item" delay={0}>
          <span className="stat-band__num">30M</span>
          <span className="stat-band__label">People drawing drinking water from Lake Michigan</span>
        </RevealBlock>
        <div className="stat-band__divider" />
        <RevealBlock className="stat-band__item" delay={100}>
          <span className="stat-band__num">30–50%</span>
          <span className="stat-band__label">Imidacloprid removed by standard water treatment</span>
        </RevealBlock>
        <div className="stat-band__divider" />
        <RevealBlock className="stat-band__item" delay={200}>
          <span className="stat-band__num">97%+</span>
          <span className="stat-band__label">Removal efficiency with biochar filtration</span>
        </RevealBlock>
      </section>

      {/* ── PROBLEM INTRO ── */}
      <section className="text-section">
        <RevealBlock>
          <p className="overline">The Problem</p>
          <h2 className="section-headline">
            Evanston sits directly on the shore of Lake Michigan, the drinking water source for 30 million people across the Midwest.
          </h2>
        </RevealBlock>
        <RevealBlock delay={150}>
          <p className="body-text">
            Every spring and summer, homeowners apply synthetic pesticides to their lawns containing imidacloprid, a neonicotinoid compound that dissolves almost completely into rainwater. That water flows through Evanston's storm sewer system directly into the lake with zero chemical treatment.
          </p>
        </RevealBlock>
      </section>

      {/* ── SPLIT: PESTICIDES IMAGE LEFT ── */}
      <section className="split-section">
        <RevealBlock className="split-section__image-wrap">
          <img
            src="/images/pesticides-lawn.avif"
            alt="Pesticides being sprayed on a residential lawn"
            className="split-section__image"
          />
        </RevealBlock>
        <div className="split-section__text">
          <RevealBlock delay={80}>
            <p className="overline">The Chemical Chain</p>
            <h2 className="section-headline--sm">
              From lawn to tap, with nothing stopping it.
            </h2>
          </RevealBlock>
          <RevealBlock delay={180}>
            <p className="body-text">
              Standard municipal water treatment removes only 30–50% of imidacloprid, meaning measurable concentrations survive all the way to the tap. The EPA has flagged imidacloprid as a potential endocrine disruptor, a compound that mimics human hormones at parts-per-trillion concentrations, with children and developing fetuses carrying the highest effective dose per body weight.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── FULL-WIDTH: KEEP OFF LAWN ── */}
      <section className="fullwidth-image-section">
        <img
          src="/images/keep-off-lawn.jpg"
          alt="Keep off lawn pesticide sign"
          className="fullwidth-image-section__img"
        />
        <div className="fullwidth-image-section__overlay">
          <RevealBlock>
            <blockquote className="fullwidth-image-section__quote">
              "The warning is already there.<br />The question is where the chemicals go next."
            </blockquote>
          </RevealBlock>
        </div>
      </section>

      {/* ── SOLUTION INTRO ── */}
      <section className="text-section text-section--dark">
        <RevealBlock>
          <p className="overline overline--light">The Solution</p>
          <h2 className="section-headline section-headline--light">
            Interrupt the chain before it starts.
          </h2>
        </RevealBlock>
        <RevealBlock delay={150}>
          <p className="body-text body-text--light">
            By installing biochar-amended bioretention cells in the city-owned parkway strips that already exist between sidewalks and curbs throughout Evanston, pesticide-laden runoff from residential lawns is forced to percolate through a layer of biochar before it ever reaches the storm sewer.
          </p>
        </RevealBlock>
      </section>

      {/* ── SPLIT: BIOCHAR IMAGE RIGHT ── */}
      <section className="split-section split-section--reverse">
        <RevealBlock className="split-section__image-wrap">
          <img
            src="/images/biochar.jpg"
            alt="Biochar material"
            className="split-section__image"
          />
        </RevealBlock>
        <div className="split-section__text">
          <RevealBlock delay={80}>
            <p className="overline">Biochar</p>
            <h2 className="section-headline--sm">
              A porous carbon lattice that pulls imidacloprid out of water permanently.
            </h2>
          </RevealBlock>
          <RevealBlock delay={180}>
            <p className="body-text">
              Produced by pyrolysis of organic waste at 500–700°C, biochar develops up to 1,500 m²/g of surface area. Its graphene-like carbon layers trap imidacloprid molecules through π–π stacking interactions with greater than 97% removal efficiency. The filtered water drains cleanly into existing underground sewer infrastructure below.
            </p>
          </RevealBlock>
          <RevealBlock delay={260}>
            <p className="body-text">
              After adsorption, soil microbes in the gravel underdrain complete biodegradation via oxidative metabolism, converting the compound entirely to CO₂, H₂O, NO₃⁻, and Cl⁻.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── FEASIBILITY SECTION ── */}
      <section className="feasibility-section">
        <RevealBlock>
          <p className="overline">Why Evanston Can Do This</p>
          <h2 className="section-headline">
            The city already owns the infrastructure.
          </h2>
        </RevealBlock>
        <div className="feasibility-section__grid">
          <RevealBlock delay={0} className="feasibility-card">
            <h3>Existing Parkways</h3>
            <p>City-owned parkway strips between sidewalks and curbs provide ready-made installation sites, with no land acquisition required.</p>
          </RevealBlock>
          <RevealBlock delay={100} className="feasibility-card">
            <h3>Low Cost</h3>
            <p>Biochar material costs less citywide per year than a single city employee's monthly salary.</p>
          </RevealBlock>
          <RevealBlock delay={200} className="feasibility-card">
            <h3>Proven Chemistry</h3>
            <p>π–π stacking adsorption of neonicotinoids onto biochar is thoroughly documented in peer-reviewed literature. This is not experimental.</p>
          </RevealBlock>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section className="closing-section">
        <RevealBlock>
          <h2 className="closing-section__headline">
            The drinking water of 30 million people flows from the lake this solution protects.
          </h2>
        </RevealBlock>
        <RevealBlock delay={150}>
          <p className="closing-section__sub">
            The chemistry is understood. The land is available. The cost is minimal.
          </p>
        </RevealBlock>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Evanston Biochar Initiative · Protecting Lake Michigan</p>
      </footer>
    </main>
  )
}
