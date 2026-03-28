import { useState } from 'react'

// Add your project image paths under /public/projects/ e.g. '/projects/pipeline.png'
// Leave image: null to show a plain text card
const projects = [
  {
    title: 'Data Pipeline Automation',
    description: 'Python ETL pipeline automating extraction, transformation, and loading across multiple government databases. Reduced manual processing time by 40%.',
    tags: ['Python', 'SQL', 'Docker', 'AWS'],
    github: 'https://github.com/myrahm',
    lang: 'Python',
    image: null, // e.g. '/projects/pipeline.png'
    featured: true,
  },
  {
    title: 'IT Incident Tracker',
    description: 'Web dashboard for tracking and visualising IT support tickets with analytics. Built for high-volume service desk environments.',
    tags: ['React', 'SQL', 'Power BI'],
    github: 'https://github.com/myrahm',
    lang: 'JavaScript',
    image: null,
    featured: true,
  },
  {
    title: 'MongoDB Analytics Dashboard',
    description: 'Full-stack application for querying MongoDB collections with aggregation pipelines and real-time data exploration.',
    tags: ['MongoDB', 'Node.js', 'React'],
    github: 'https://github.com/myrahm',
    lang: 'JavaScript',
    image: null,
    featured: false,
  },
  {
    title: 'Workflow Automator',
    description: 'Internal tool that automated repetitive administrative workflows, cutting manual effort by 30% across the team.',
    tags: ['Python', 'Bash', 'REST API'],
    github: 'https://github.com/myrahm',
    lang: 'Python',
    image: null,
    featured: false,
  },
  {
    title: 'AWS Lightsail Deployment',
    description: 'Cloud deployment template for web apps on AWS Lightsail with auto-scaling and HTTPS configuration.',
    tags: ['AWS', 'Linux', 'Nginx', 'Docker'],
    github: 'https://github.com/myrahm',
    lang: 'Shell',
    image: null,
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'This site. Built with React + Vite. Minimal black & white with vertical nav and dark mode.',
    tags: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/myrahm',
    live: '/',
    lang: 'JavaScript',
    image: null,
    featured: true,
  },
]

const langColors = { Python: '#3572A5', JavaScript: '#f1e05a', Shell: '#89e051' }

const filters = ['all', 'Python', 'JavaScript', 'Shell']

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter(p => p.lang === filter)

  return (
    <div className="page" style={{ maxWidth: '680px' }}>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '0.5rem', fontWeight: '500' }}>
          work
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>projects</h1>
        <p style={{ fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.7 }}>
          open source and personal work.{' '}
          <a href="https://github.com/myrahm" target="_blank" rel="noreferrer"
            style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', paddingBottom: '1px', transition: 'border-color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            github.com/myrahm ↗
          </a>
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '2rem' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              fontSize: '0.72rem', letterSpacing: '0.04em',
              padding: '4px 12px', borderRadius: '3px',
              border: '1px solid',
              borderColor: filter === f ? 'var(--text)' : 'var(--border)',
              color: filter === f ? 'var(--text)' : 'var(--text3)',
              background: filter === f ? 'var(--text)' : 'transparent',
              color: filter === f ? 'var(--bg)' : 'var(--text3)',
              transition: 'all 0.15s ease',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
        {shown.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>

    </div>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div style={{
      background: 'var(--bg)',
      padding: '1.25rem',
      borderRight: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      transition: 'background 0.15s ease',
      position: 'relative',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
    >
      {/* Optional image */}
      {p.image && (
        <div style={{
          width: '100%', aspectRatio: '16/9',
          borderRadius: '3px', overflow: 'hidden',
          border: '1px solid var(--border)', marginBottom: '0.25rem',
        }}>
          <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      {/* Title row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text)', lineHeight: 1.3 }}>
          {p.title}
          {p.featured && (
            <span style={{ marginLeft: '6px', fontSize: '0.62rem', color: 'var(--text3)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1px 5px', verticalAlign: 'middle' }}>
              featured
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          {p.live && (
            <a href={p.live} style={{ fontSize: '0.75rem', color: 'var(--text3)', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
            >↗</a>
          )}
          <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--text3)', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
          >
            gh ↗
          </a>
        </div>
      </div>

      <p style={{ fontSize: '0.78rem', color: 'var(--text2)', lineHeight: 1.65 }}>{p.description}</p>

      {/* Tags + lang */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize: '0.65rem', color: 'var(--text3)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1px 6px' }}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: langColors[p.lang] || '#888', flexShrink: 0 }} />
          <span style={{ fontSize: '0.65rem', color: 'var(--text3)' }}>{p.lang}</span>
        </div>
      </div>
    </div>
  )
}
