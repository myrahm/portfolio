const education = {
  degree: 'BSc Computer Science',
  school: 'Toronto Metropolitan University',
  period: 'Sept 2021 – Apr 2026',
  note: "Dean's List 2021–2026",
}

const experience = [
  {
    role: 'Junior Software Developer',
    org: 'Ontario Government — Ministry of Children',
    period: 'Sep 2024 – May 2025',
    points: [
      'Maintained and troubleshot enterprise applications in production environments',
      'Automated internal workflows, reducing manual processes by 30%',
      'Analysed system and database data using Python and SQL to identify performance issues',
      'Created technical documentation and user guides for internal tools',
      'Collaborated with cross-functional Agile teams to improve system reliability',
    ],
  },
  {
    role: 'IT Analyst — L1/L2 Support',
    org: 'Immigration and Refugee Board of Canada',
    period: 'Sep 2023 – Aug 2024',
    points: [
      'Resolved 1,000+ hardware, software, and connectivity issues in a high-volume service desk',
      'Managed incidents, service requests, and resolutions via ITSM ticketing systems',
      'Supported secure access control, authentication, and user account provisioning',
      'Escalated complex issues while maintaining clear communication with end users',
      'Documented troubleshooting procedures and recurring technical issues',
    ],
  },
]

const skills = {
  'IT Support': ['macOS', 'Windows', 'Google Workspace', 'IT Ticketing', 'Access Control', 'Hardware Troubleshooting'],
  'Data & Dev': ['Python', 'SQL', 'Power BI', 'MongoDB', 'Docker', 'AWS Lightsail', 'GitHub'],
  'Concepts': ['Agile / Scrum', 'Incident Management', 'Root Cause Analysis', 'IT Support Operations'],
}

export default function Experience() {
  return (
    <div className="page" style={{ maxWidth: '640px' }}>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '0.5rem', fontWeight: '500' }}>
          cv
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: '600', letterSpacing: '-0.02em' }}>experience</h1>
      </div>

      {/* Education */}
      <div style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '1rem', fontWeight: '500' }}>
          education
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text)', marginBottom: '3px' }}>{education.degree}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{education.school}</div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginBottom: '4px' }}>{education.period}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text3)', border: '1px solid var(--border)', borderRadius: '3px', padding: '2px 8px', display: 'inline-block' }}>
              {education.note}
            </div>
          </div>
        </div>
      </div>

      {/* Work */}
      <div style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '1.5rem', fontWeight: '500' }}>
          work
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experience.map((exp, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text)', marginBottom: '3px' }}>{exp.role}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text2)' }}>{exp.org}</div>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text3)', flexShrink: 0, marginTop: '2px' }}>{exp.period}</div>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {exp.points.map((p, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.65 }}>
                    <span style={{ flexShrink: 0, color: 'var(--text4)', marginTop: '1px' }}>—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '1.25rem', fontWeight: '500' }}>
          skills
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text3)', width: '72px', flexShrink: 0, paddingTop: '3px' }}>{cat}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', flex: 1 }}>
                {items.map(s => (
                  <span key={s} style={{
                    fontSize: '0.72rem', color: 'var(--text2)',
                    border: '1px solid var(--border)', borderRadius: '3px', padding: '2px 8px',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
