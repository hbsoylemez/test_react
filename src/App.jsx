import './App.css'

const trustLogos = ['Notion', 'Slack', 'Stripe', 'Figma', 'Linear']

const features = [
  {
    title: 'Unified workflow',
    text: 'Keep planning, execution, and approval in one place so teams move without bottlenecks.',
  },
  {
    title: 'Smarter insights',
    text: 'Track momentum, uncover blockers, and spot what matters before it impacts delivery.',
  },
  {
    title: 'Built for speed',
    text: 'Launch, iterate, and report faster with clean automations that reduce busywork.',
  },
]

const steps = [
  'Create a workspace for your team and goals.',
  'Track key work and align priorities in real time.',
  'Launch updates, improve momentum, and grow faster.',
]

const testimonials = [
  {
    quote: 'Northstar gave our product team a much clearer rhythm. We shipped faster and with less friction.',
    name: 'Maya Chen',
    role: 'VP Product, Northlane',
  },
  {
    quote: 'Finally, a tool that feels built for operators, not just project managers. The visibility is excellent.',
    name: 'Ethan Ross',
    role: 'COO, Harbor Studio',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand" aria-label="Northstar home">
          <span className="brand-mark">N</span>
          <span>Northstar</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#customers">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="text-button">
            Log in
          </button>
          <button type="button" className="nav-button">
            Book a demo
          </button>
        </div>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Built for modern teams</span>
          <h1>Turn strategy into momentum.</h1>
          <p>
            Align your roadmap, execution, and customer feedback in one focused workspace built for high-growth teams.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-button">
              Start free trial
            </button>
            <button type="button" className="secondary-button">
              Watch overview
            </button>
          </div>

          <div className="trust-row" aria-label="Customer logos">
            {trustLogos.map((name) => (
              <span key={name} className="trust-logo">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-panel" aria-label="Product dashboard preview">
          <div className="panel-header">
            <span className="dot dot-purple" />
            <span className="dot dot-blue" />
            <span className="dot dot-green" />
          </div>

          <div className="panel-body">
            <div className="mini-summary">
              <div>
                <span className="mini-label">This sprint</span>
                <strong>18 tasks</strong>
              </div>
              <span className="success-badge">+24%</span>
            </div>

            <div className="activity-card">
              <div className="activity-row">
                <span>Team velocity</span>
                <strong>82%</strong>
              </div>
              <div className="progress-bar">
                <span className="progress-fill" />
              </div>
            </div>

            <ul className="task-list">
              <li>
                <span className="task-check" />
                <div>
                  <strong>Launch onboarding</strong>
                  <small>Design review complete</small>
                </div>
              </li>
              <li>
                <span className="task-check" />
                <div>
                  <strong>Campaign refresh</strong>
                  <small>Ready for final approval</small>
                </div>
              </li>
              <li>
                <span className="task-check" />
                <div>
                  <strong>Revenue dashboard</strong>
                  <small>Metrics synced from CRM</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <section className="stats-band" id="customers">
        <div>
          <strong>12k+</strong>
          <span>teams launched</span>
        </div>
        <div>
          <strong>4.9/5</strong>
          <span>average rating</span>
        </div>
        <div>
          <strong>2.3x</strong>
          <span>faster planning</span>
        </div>
        <div>
          <strong>98.6%</strong>
          <span>customer retention</span>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <span className="eyebrow">Why teams choose Northstar</span>
          <h2>Everything your team needs to move with confidence.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">✦</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="resources">
        <div className="section-heading left">
          <span className="eyebrow">How it works</span>
          <h2>A simpler path from plan to progress.</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={step}>
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading">
          <span className="eyebrow">Customer stories</span>
          <h2>Trusted by teams building what’s next.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="stars" aria-label="Five star review">
                ★★★★★
              </div>
              <p>“{item.quote}”</p>
              <div className="person">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner" id="pricing">
        <div>
          <span className="eyebrow">Start today</span>
          <h2>Turn your next launch into a predictable win.</h2>
        </div>
        <button type="button" className="primary-button">
          Get started
        </button>
      </section>
    </div>
  )
}

export default App
