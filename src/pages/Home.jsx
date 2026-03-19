import { Link } from 'react-router-dom'
import { Leaf, Globe, Users, Shield, TriangleAlert, CircleCheckBig, TrendingUp, Award, Package, Utensils, Shirt, Building2 } from 'lucide-react'
import './Home.css'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <h1>
            <span className="text-green">Sustainability</span> as a<br />
            <span className="text-green">Lifestyle,</span><br />
            Delivered
          </h1>
          <p>Connecting the world to sustainable solutions, one partnership at a time. EkayaGreen links businesses with eco-innovators to replace plastics with planet-friendly materials.</p>
          <div className="hero__btns">
            <Link to="/partners" className="btn-primary">Partner With Us →</Link>
            <Link to="/solutions" className="btn-secondary">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>
              Learn How It Works
            </Link>
          </div>
          <div className="hero__badges">
            <span><span className="dot"></span>FDA & BPI Certified Products</span>
            <span><span className="dot"></span>Global Supplier Network</span>
            <span><span className="dot"></span>End-to-End Logistics</span>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission section">
        <div className="container">
          <div className="text-center">
            <h2>Our Mission</h2>
            <p className="mission__lead">At EkayaGreen, we believe in making sustainability a lifestyle. Our mission is to drive the global shift to eco-friendly materials by bridging US enterprises with innovative, sustainable manufacturers.</p>
            <div className="divider"></div>
          </div>
          <div className="mission__cards">
            {[
              { icon: <Leaf size={32} />, title: 'Sustainability First', desc: 'Every partnership is rooted in genuine environmental impact, not greenwashing.' },
              { icon: <Globe size={32} />, title: 'Global Reach', desc: 'Connecting innovative manufacturers worldwide with businesses seeking sustainable solutions.' },
              { icon: <Users size={32} />, title: 'Community Focus', desc: 'Building a collaborative ecosystem where sustainability becomes accessible to all.' },
              { icon: <Shield size={32} />, title: 'Quality Assured', desc: 'All materials meet international standards with full transparency and certification.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card mission__card">
                <div className="mission__icon-circle">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="mission__quote">
            <p>"We're not just sourcing products; we're changing mindsets and healing the planet."</p>
            <span>— EkayaGreen Founders</span>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="challenge section">
        <div className="container">
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h2>The Challenge & Our Solution</h2>
            <p className="challenge__sub">The world faces a plastic crisis, but sustainable alternatives exist. EkayaGreen makes them accessible to every business.</p>
          </div>
          <div className="challenge__grid">
            <div>
              <div className="challenge__header">
                <div className="icon-circle" style={{background:'#fee2e2',color:'#dc2626'}}><TriangleAlert size={22}/></div>
                <h3>The Challenge</h3>
              </div>
              <div className="challenge__box">
                <ul>
                  {['85% of ocean trash is packaging waste','Difficulty finding certified eco-alternatives','Complex international sourcing logistics','High costs for sustainable materials'].map(t => (
                    <li key={t}><span className="challenge__dot"></span>{t}</li>
                  ))}
                </ul>
                <div className="challenge__highlight">
                  <strong>44% of ocean trash is packaging waste</strong> — we knew there had to be a better way to connect businesses with sustainable alternatives.
                </div>
              </div>
            </div>
            <div>
              <div className="challenge__header">
                <div className="icon-circle"><CircleCheckBig size={22}/></div>
                <h3>Our Solution</h3>
              </div>
              <div className="solution__cards">
                {[
                  { icon: <CircleCheckBig size={20}/>, title: 'Certified Sustainable Products', desc: 'All materials are FDA, BPI, and internationally certified for peace of mind.' },
                  { icon: <TrendingUp size={20}/>, title: 'Cost-Effective Sourcing', desc: 'Direct manufacturer partnerships reduce costs by 30-50% compared to traditional sourcing.' },
                  { icon: <Award size={20}/>, title: 'Quality Assurance', desc: 'Vetted supplier network ensures reliability and consistent product quality.' },
                  { icon: <CircleCheckBig size={20}/>, title: 'Seamless Logistics', desc: 'End-to-end support with shipping, customs, and warehousing for hassle-free procurement.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="card solution__card">
                    <div className="icon-circle icon-circle--sm">{icon}</div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="showcase section" style={{background:'var(--green-light-bg2)'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom:'52px'}}>
            <h2>Sustainable Innovation Showcase</h2>
            <p className="showcase__sub">Discover the range of eco-friendly materials available through our global network. Each product is carefully vetted for quality, sustainability, and compliance.</p>
          </div>
          <div className="showcase__grid">
            {[
              { img:'/food-packaging.jpg', icon:<Package size={20}/>, title:'Food Packaging', desc:'Biodegradable plates, containers, and cups', bullets:['Made from bagasse','100% compostable','Food-safe certified'] },
              { img:'/cutlery-straws.jpg', icon:<Utensils size={20}/>, title:'Cutlery & Straws', desc:'Plant-based utensils and drinking solutions', bullets:['Bamboo & wheat straw','Plastic-free','Durable design'] },
              { img:'/bags-wraps.jpg', icon:<Shirt size={20}/>, title:'Bags & Wraps', desc:'Compostable bags and packaging films', bullets:['Seaweed-based films','Custom branding','Industrial compostable'] },
              { img:'/custom-solutions.jpg', icon:<Leaf size={20}/>, title:'Custom Solutions', desc:'Private label sustainable packaging', bullets:['Tailored materials','Brand integration','Scalable production'] },
            ].map(({ img, icon, title, desc, bullets }) => (
              <div key={title} className="showcase__card">
                <div className="showcase__img">
                  <img src={img} alt={title} />
                </div>
                <div className="showcase__card__content">
                  <div className="showcase__card-header">
                    <div className="icon-circle icon-circle--sm">{icon}</div>
                    <h3>{title}</h3>
                  </div>
                  <p>{desc}</p>
                  <ul>
                    {bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                  <Link to="/solutions" className="btn-secondary" style={{marginTop:'auto',justifyContent:'center'}}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop:'48px'}}>
            <Link to="/solutions" className="btn-primary">Explore All Solutions</Link>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="founder section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'48px'}}>
            <h2>Meet Our Founder</h2>
            <p className="founder__sub">EkayaGreen was founded by a sustainability visionary who believes that eco-friendly choices should be accessible to every business worldwide.</p>
          </div>
          <div className="founder__card">
            <div className="founder__avatar">
              <img src="/founder.jpg" alt="Sarasvathy TK" />
            </div>
            <h3>Sarasvathy TK</h3>
            <span className="founder__role">Founder and CEO</span>
            <p>A multidisciplinary creator and entrepreneur, acclaimed visual artist with a background in computer science. Based in New Jersey, Sarasvathy brings a unique global perspective to sustainability. She has built bridges between technology and art in her career, and now channels her passion for culture, community, and the planet into EkayaGreen's vision. Sarasvathy brings a human-centered design approach to EkayaGreen, ensuring that our sustainability solutions resonate with real people and lifestyles. Her vision of blending culture and ecology sets the tone for EkayaGreen as a brand built on values and creativity.</p>
            <div className="founder__actions">
              <a href="https://www.linkedin.com/in/sarasvathytk" target="_blank" rel="noreferrer" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="mailto:sarasvathytk@ekayagreen.com" className="btn-secondary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Contact
              </a>
            </div>
          </div>
          <div className="founder__quote">
            <p>"We started EkayaGreen to make sustainable choices the easy choice, not the expensive one. Our vision is a world where every business has access to planet-friendly materials."</p>
            <span>— Sarasvathy TK</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join the Sustainable Revolution?</h2>
          <p>Whether you're a business seeking eco-friendly solutions or a manufacturer with innovative materials, let's collaborate to build a greener future.</p>
          <div className="cta-section__cards">
            <div className="cta-section__card">
              <div className="cta-section__icon"><Building2 size={32} /></div>
              <h3>For Businesses</h3>
              <p>Transform your supply chain with certified sustainable materials. Reduce costs, meet compliance standards, and delight eco-conscious customers.</p>
              <ul>
                <li>30-50% cost savings vs traditional sourcing</li>
                <li>FDA, BPI, and international certifications</li>
                <li>End-to-end logistics support</li>
              </ul>
              <Link to="/solutions" className="btn-cta">Start Sourcing Sustainably →</Link>
            </div>
            <div className="cta-section__card">
              <div className="cta-section__icon"><Users size={32} /></div>
              <h3>For Suppliers</h3>
              <p>Join our vetted network of sustainable manufacturers. Access new markets, scale your innovations, and be part of the solution to plastic pollution.</p>
              <ul>
                <li>Access to US enterprise clients</li>
                <li>Marketing and credibility support</li>
                <li>Collaborative innovation opportunities</li>
              </ul>
              <Link to="/partners" className="btn-cta">Become a Partner →</Link>
            </div>
          </div>
          <div className="cta-section__footer">
            <p>Have questions? Want to learn more about our mission?</p>
            <Link to="/contact" className="btn-white">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
