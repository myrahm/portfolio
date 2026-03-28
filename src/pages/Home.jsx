import { Link } from 'react-router-dom'

// SVG icons — colourful brand colours
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#24292e" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#ea4335"/>
    </svg>
  )
}

const skills = ['Python', 'SQL', 'React', 'Docker', 'AWS', 'Power BI', 'MongoDB', 'Git']

export default function Home() {
  return (
    <div className="page" style={{ maxWidth: '600px' }}>

      {/* Name + Urdu hover */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '600', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          <span className="name-hover">
            myrah
            <span className="urdu-tip">ميرا</span>
          </span>
          {' '}mohammed
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: '400', lineHeight: 1.5 }}>
          computer science student · toronto metropolitan university
        </p>
      </div>

      {/* About */}
      <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '480px' }}>
        final-year CS student building thoughtful software. i like systems that are clean, data that makes sense, and code that actually works. currently open to new grad roles.
      </p>

      {/* Status */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        border: '1px solid var(--border)', borderRadius: '4px',
        padding: '6px 12px', marginBottom: '2.5rem',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, boxShadow: '0 0 6px #22c55e88' }} />
        <span style={{ fontSize: '0.72rem', color: 'var(--text2)', letterSpacing: '0.04em' }}>open to opportunities</span>
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '3rem' }}>
        {[
          { href: 'https://github.com/myrahm', icon: <GithubIcon />, label: 'GitHub' },
          { href: 'https://linkedin.com/in/myrah-m', icon: <LinkedinIcon />, label: 'LinkedIn' },
          { href: 'mailto:myrah.mohammed7@gmail.com', icon: <GmailIcon />, label: 'Email' },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            title={label}
            style={{
              width: '38px', height: '38px',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--bg)',
              transition: 'border-color 0.15s ease, transform 0.15s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      {/* Skills */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '1rem', fontWeight: '500' }}>
          technologies
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {skills.map(s => (
            <span key={s} style={{
              fontSize: '0.75rem', color: 'var(--text2)',
              border: '1px solid var(--border)', borderRadius: '3px',
              padding: '3px 9px',
              transition: 'border-color 0.15s, color 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Quick nav cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {[
          { to: '/experience', label: 'experience', sub: '2 roles' },
          { to: '/projects', label: 'projects', sub: '6 repos' },
          { to: '/books', label: 'books', sub: '6 reviews' },
        ].map(({ to, label, sub }) => (
          <Link
            key={to}
            to={to}
            style={{
              border: '1px solid var(--border)', borderRadius: '6px',
              padding: '1rem', display: 'block',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'var(--bg2)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
          >
            <div style={{ fontSize: '0.78rem', fontWeight: '500', color: 'var(--text)', marginBottom: '3px' }}>{label}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text3)' }}>{sub}</div>
          </Link>
        ))}
      </div>

    </div>
  )
}
