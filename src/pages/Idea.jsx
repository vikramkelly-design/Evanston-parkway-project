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
          3 Chemistry students from Evanston High School, who were working on a chemistry final, found a problem hiding in plain sight inside our community. This problem being harmful pesticides on our lawns washing into sewers and contaminating Lake Michigan water. After seeing the impact of imidacloprid contamination, we realized this was beyond a chemistry assignment. It is a problem facing everyone in our community.
        </p>
        <p className="idea-body">
          Our goal now is to develop affordable solutions that attack the problem at the source. Our leading science-backed solution is biochar, which can be implemented into already existing city infrastructure. Now what it truly needs is attention from people willing to take this problem seriously.
        </p>
        <div className="idea-footnote">
          Evanston, Illinois &mdash; 2025
        </div>
      </div>
    </main>
  )
}
