import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { to: '/', label: 'home', end: true },
  { to: '/experience', label: 'experience' },
  { to: '/projects', label: 'projects' },
  { to: '/books', label: 'books' },
]

export default function Sidenav({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMobileOpen(false), [location])

  const linkStyle = (isActive) => ({
    fontSize: '0.78rem',
    fontWeight: isActive ? '500' : '400',
    color: isActive ? 'var(--text)' : 'var(--text3)',
    letterSpacing: '0.04em',
    transition: 'color 0.15s ease',
    lineHeight: 1,
  })

  return (
    <nav className="sidenav">
      {/* Logo / name */}
      <div style={{ marginBottom: '0.25rem' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.3rem', fontWeight: '500' }}>
          portfolio
        </div>
        <NavLink to="/" style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text)', letterSpacing: '-0.01em' }}>
          myrah m.
        </NavLink>
      </div>

      {/* Nav links */}
      <div className="nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '2.5rem', flex: 1 }}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            style={({ isActive }) => linkStyle(isActive)}
            onMouseEnter={e => { if (e.currentTarget.style.color === 'var(--text3)') e.currentTarget.style.color = 'var(--text2)' }}
            onMouseLeave={e => e.currentTarget.style.color = ''}
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Bottom: theme toggle */}
      <div className="nav-bottom" style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <button
          onClick={toggleTheme}
          style={{
            fontSize: '0.7rem',
            color: 'var(--text3)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
        >
          {theme === 'dark' ? '○ light' : '● dark'}
        </button>
      </div>
    </nav>
  )
}
