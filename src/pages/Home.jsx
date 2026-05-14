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
            Every time it rains on a treated Evanston lawn, pesticide washes into Lake Michigan. The city's water treatment barely touches it. Thirty million people drink from that lake.
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
            Evanston's front yard drains into its drinking water.
          </h2>
        </RevealBlock>
        <RevealBlock delay={150}>
          <p className="body-text">
            Every spring, homeowners across the city spray imidacloprid on their lawns. It's in most residential pesticides. Unlike a lot of chemicals, it doesn't bind to soil or break down when it rains — it dissolves completely and follows the water wherever it goes. In Evanston, that means straight through the storm sewers and into the lake.
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
              The treatment plant wasn't built to catch this.
            </h2>
          </RevealBlock>
          <RevealBlock delay={180}>
            <p className="body-text">
              Standard Evanston water treatment removes 30–50% of imidacloprid, resulting in a measurable amount of the toxin surviving all the way to the tap. The EPA has flagged the toxin as an endocrine disruptor, a compound that mimics human hormones at parts-per-trillion concentrations.
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
            There's a fix. It's low-tech and it's cheap.
          </h2>
        </RevealBlock>
        <RevealBlock delay={150}>
          <p className="body-text body-text--light">
            The parkway strips between sidewalks and curbs throughout Evanston are already city-owned. Fill them with biochar instead of plain dirt, and runoff from the neighboring lawns has to pass through it before it ever reaches the storm sewer. That's the whole idea.
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
              A porous carbon lattice that pulls imidacloprid out of water.
            </h2>
          </RevealBlock>
          <RevealBlock delay={180}>
            <p className="body-text">
              Biochar is the solution. It is a conglomerate of organic waste that is heated up to the 500–700°C mark. Its graphene-like carbon layers trap imidacloprid molecules through π–π stacking interactions with greater than 97% removal efficiency. The filtered water then drains downwards into the pre-existing sewage system below.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* ── FEASIBILITY SECTION ── */}
      <section className="feasibility-section">
        <RevealBlock>
          <p className="overline">Why Evanston Can Do This</p>
          <h2 className="section-headline">
            The city already owns the land.
          </h2>
        </RevealBlock>
        <div className="feasibility-section__grid">
          <RevealBlock delay={0} className="feasibility-card">
            <h3>Already There</h3>
            <p>Those parkway strips are city property. No land to buy, no negotiations, no permits beyond the usual. The space is just sitting there.</p>
          </RevealBlock>
          <RevealBlock delay={100} className="feasibility-card">
            <h3>Cheaper Than You'd Think</h3>
            <p>The biochar needed for the whole city costs less per year than one city employee's monthly paycheck.</p>
          </RevealBlock>
          <RevealBlock delay={200} className="feasibility-card">
            <h3>Settled Science</h3>
            <p>The chemistry behind biochar removing neonicotinoids has been replicated across multiple peer-reviewed studies. We're not proposing an experiment.</p>
          </RevealBlock>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section className="closing-section">
        <RevealBlock>
          <h2 className="closing-section__headline">
            Thirty million people get their drinking water from this lake. The city owns the land. The material is cheap. The chemistry works.
          </h2>
        </RevealBlock>
        <RevealBlock delay={150}>
          <p className="closing-section__sub">
            There's nothing left to figure out except whether anyone will do it.
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
