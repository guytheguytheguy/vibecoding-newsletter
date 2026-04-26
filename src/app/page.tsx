import ButtondownForm from "@/components/ButtondownForm";

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            ⚡ <span>VibeCoding</span> Newsletter
          </div>
          <ul className="nav-links">
            <li><a href="https://endofcoding.com" target="_blank" rel="noopener noreferrer">EndOfCoding</a></li>
            <li><a href="https://vibe-coding.academy" target="_blank" rel="noopener noreferrer">Academy</a></li>
            <li><a href="https://vibecodingebook.com" target="_blank" rel="noopener noreferrer">eBook</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="badge">Free Weekly Newsletter</div>
        <h1>
          Level Up Your{" "}
          <span className="gradient-text">AI Coding Skills</span>
        </h1>
        <p>
          Join developers getting weekly insights on vibe coding, Claude,
          Cursor, Lovable, and every AI tool reshaping how software gets built.
        </p>

        {/* Buttondown embed — account: endofcoding */}
        <div className="signup-box">
          <h2>Subscribe — it&apos;s free</h2>
          <p>Weekly. No spam. Unsubscribe any time.</p>
          <ButtondownForm />
          <p className="privacy-note">🔒 Your email stays private. Unsubscribe with one click.</p>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <span className="stat-number">Weekly</span>
          <span className="stat-label">Cadence</span>
        </div>
        <div className="stat">
          <span className="stat-number">100+</span>
          <span className="stat-label">Episodes</span>
        </div>
        <div className="stat">
          <span className="stat-number">Free</span>
          <span className="stat-label">Always</span>
        </div>
        <div className="stat">
          <span className="stat-number">AI-First</span>
          <span className="stat-label">Content</span>
        </div>
      </div>

      {/* What you get */}
      <section className="section">
        <h2 className="section-title">
          What&apos;s inside every{" "}
          <span className="gradient-text">edition</span>
        </h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>AI Tool Deep Dives</h3>
            <p>
              Hands-on breakdowns of Claude, Cursor, Lovable, Bolt, and every
              major AI coding assistant worth your time.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Vibe Coding Techniques</h3>
            <p>
              Real workflows for building full apps with AI — from prompt
              patterns to shipping in record time.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">📦</div>
            <h3>Tools &amp; Resources</h3>
            <p>
              Curated picks each week — the templates, repos, and guides that
              actually move the needle.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <h3>Industry Trends</h3>
            <p>
              What&apos;s happening in the AI dev space so you stay ahead of the
              curve, not behind it.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🎥</div>
            <h3>Video Highlights</h3>
            <p>
              Best picks from the EndOfCoding YouTube channel — summaries and
              key takeaways in minutes.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">💡</div>
            <h3>Practical Tutorials</h3>
            <p>
              Step-by-step guides you can follow immediately — build something
              real in each edition.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="ecosystem">
        <h2 className="ecosystem-title">
          Explore the <span className="gradient-text">Ecosystem</span>
        </h2>
        <div className="eco-grid">
          <a
            href="https://endofcoding.com"
            target="_blank"
            rel="noopener noreferrer"
            className="eco-card"
          >
            <span className="eco-card-name">🎬 EndOfCoding</span>
            <span className="eco-card-desc">
              YouTube channel + blog on AI-powered development and the future of
              coding.
            </span>
            <span className="eco-card-link">endofcoding.com →</span>
          </a>
          <a
            href="https://vibe-coding.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="eco-card"
          >
            <span className="eco-card-name">🎓 Vibe Coding Academy</span>
            <span className="eco-card-desc">
              Interactive courses and hands-on projects for AI-first developers.
            </span>
            <span className="eco-card-link">vibe-coding.academy →</span>
          </a>
          <a
            href="https://vibecodingebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="eco-card"
          >
            <span className="eco-card-name">📖 Vibe Coding eBook</span>
            <span className="eco-card-desc">
              The definitive guide to intent-based, AI-assisted software
              development.
            </span>
            <span className="eco-card-link">vibecodingebook.com →</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} VibeCoding Newsletter ·{" "}
          <a
            href="https://buttondown.com/endofcoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Archive
          </a>{" "}
          ·{" "}
          <a href="https://endofcoding.com" target="_blank" rel="noopener noreferrer">
            EndOfCoding
          </a>
        </p>
      </footer>
    </>
  );
}
