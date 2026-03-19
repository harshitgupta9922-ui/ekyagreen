import { Link } from 'react-router-dom'
import { Target, Users, Award, Globe } from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero section" style={{background:'linear-gradient(to bottom right, rgba(23,130,68,0.05), #ffffff, rgba(230,219,203,0.2))'}}>
        <div className="container text-center">
          <h1>Our Story & Vision</h1>
          <p>EkayaGreen was founded on a simple belief: sustainability isn't just a feature – it's a lifestyle and a responsibility we share.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission section">
        <div className="container about-mission__grid">
          <div className="about-mission__text">
            <h2>Our Mission</h2>
            <p>EkayaGreen bridges the gap between innovative sustainable manufacturers and businesses seeking eco-friendly alternatives. Our name 'Ekaya' reflects our commitment to home (Planet Earth) and 'Green' represents our mission to preserve it.</p>
            <p style={{marginTop:'16px'}}>We believe sustainability should be accessible to every business worldwide, not just the privileged few. By connecting global innovations with local needs, we're making planet-friendly choices the obvious choice.</p>
            <Link to="/contact" className="btn-primary" style={{marginTop:'28px',display:'inline-flex'}}>Join Our Mission →</Link>
          </div>
          <div className="about-mission__card">
            <div className="about-mission__visual">
              <Globe size={40} />
            </div>
            <h3>Sustainability as Lifestyle</h3>
            <p>Every choice counts. We invite businesses, suppliers, and individuals to join us in making sustainable living the norm.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values section" style={{background:'rgb(238,235,232)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Our Core Values</h2>
            <p style={{color:'var(--text-muted)',fontSize:'18px',maxWidth:'560px',margin:'0 auto'}}>These principles guide every decision we make and every partnership we forge.</p>
          </div>
          <div className="about-values__grid">
            {[
              { icon: <Target size={24}/>, title: 'Sustainability & Innovation', desc: 'Pioneering new eco-materials and solutions for a plastic-free future.' },
              { icon: <Users size={24}/>, title: 'Collaboration', desc: 'Building a global partnership network for sustainable supply chains.' },
              { icon: <Award size={24}/>, title: 'Integrity & Transparency', desc: 'Ethical sourcing with full transparency and no greenwashing.' },
              { icon: <Globe size={24}/>, title: 'Social Impact', desc: 'Improving livelihoods in supplier communities worldwide.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card about-values__card">
                <div className="icon-circle icon-circle--sm">{icon}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="about-founder section" style={{background:'linear-gradient(to bottom right, rgba(23,130,68,0.05), #ffffff, rgba(230,219,203,0.2))'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'48px'}}>
            <h2>Meet Our Founder</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px',maxWidth:'560px',margin:'0 auto'}}>Passionate sustainability expert with a vision to transform global supply chains.</p>
          </div>
          <div className="card about-founder__card">
            <div className="founder__avatar">
              <img src="/founder.jpg" alt="Sarasvathy TK" />
            </div>
            <h3>Sarasvathy TK</h3>
            <span className="founder__role">Founder and CEO</span>
            <p>A multidisciplinary creator and entrepreneur, acclaimed visual artist with a background in computer science. Based in New Jersey, Sarasvathy brings a unique global perspective to sustainability. She has built bridges between technology and art in her career, and now channels her passion for culture, community, and the planet into EkayaGreen's vision. Sarasvathy brings a human-centered design approach to EkayaGreen, ensuring that our sustainability solutions resonate with real people and lifestyles. Her vision of blending culture and ecology sets the tone for EkayaGreen as a brand built on values and creativity.</p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="about-journey section" style={{background:'var(--green-light-bg)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'56px'}}>
            <h2>Our Journey</h2>
            <p style={{color:'var(--text-muted)',fontSize:'17px'}}>Building the future of sustainable supply chains, one milestone at a time.</p>
          </div>
          <div className="journey__timeline">
            {[
              { year: '2025', title: 'EkayaGreen Idea Sprouted', desc: 'EkayaGreen Idea has been sprouted to create Eco-Friendly Lifestyle Revolution' },
              { year: 'March 2026', title: 'Idea Development & Network Building', desc: 'Idea development, Network Building' },
              { year: 'Q2 of 2026', title: 'Platform and Product Launch', desc: 'Platform and product launch' },
            ].map(({ year, title, desc }, i) => (
              <div key={i} className="journey__item">
                {i % 2 === 0 ? (
                  <>
                    <div className="card journey__card journey__card--left">
                      <span className="journey__year">{year}</span>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                    <div className="journey__dot"></div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div className="journey__dot"></div>
                    <div className="card journey__card journey__card--right">
                      <span className="journey__year">{year}</span>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
