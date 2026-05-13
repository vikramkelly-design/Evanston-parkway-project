import { useRef, useState, useEffect } from 'react'
import './Idea.css'

export default function Idea() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="idea-page">
      <div className={`idea-page__inner ${visible ? 'idea-page__inner--in' : ''}`} ref={ref}>
        <p className="idea-eyebrow">Origin</p>
        <h1 className="idea-headline">The Idea</h1>
        <div className="idea-divider" />
        <p className="idea-body">
          What began as a chemistry final project quickly grew into a mission for our community. After seeing the impact of imidacloprid contamination, a problem hiding in plain sight on every treated lawn in the city, we realized this wasn't just a classroom exercise. It's a challenge facing every Evanston neighbor, from our youngest children to our seniors. The chemistry gave us the answer. The question became whether anyone was willing to act on it.
        </p>
        <p className="idea-body">
          We're now dedicated to finding affordable, science-backed ways to keep our city's water safe for everyone. The biochar solution costs less than it sounds, fits infrastructure the city already owns, and is grounded in well-documented chemistry. What it needs is attention and people willing to ask their city to take it seriously.
        </p>
        <div className="idea-footnote">
          Evanston, Illinois &mdash; 2025
        </div>
      </div>
    </main>
  )
}
