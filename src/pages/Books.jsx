import { useState } from 'react'

const books = [
  {
    title: 'Heaven',
    author: 'Mieko Kawakami',
    rating: 4,
    genre: 'fiction',
    year: 2020,
    image: '/books/heaven.jpg',
    review: "this book broke me in the most beautiful way. really gut wrenching.",
  },
  {
    title: 'Pachinko',
    author: 'Min Jin Lee',
    rating: 5,
    genre: 'historical fiction',
    year: 2017,
    image: '/books/pachinko.avif',
    review: "multigenerational, devastating, and completely impossible to put down. every character felt real. i thought about sunja for weeks after finishing.",
  },
  {
    title: 'Crying in H Mart',
    author: 'Michelle Zauner',
    rating: 5,
    genre: 'memoir',
    year: 2021,
    image: '/books/hmart.jpg',
    review: "a memoir about grief, korean identity, and food as memory. zauner writes about her mother's death with such unsentimental honesty that it gutted me. read it slowly.",
  },
  {
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    rating: 3,
    genre: 'fantasy',
    year: 2020,
    image: '/books/house.jpg',
    review: "cozy and warm and exactly what i needed. genuinely wholesome which i mean as a compliment.",
  },
  {
    title: 'Convenience Store Woman',
    author: 'Sayaka Murata',
    rating: 3,
    genre: 'literary fiction',
    year: 2016,
    image: '/books/store.webp',
    review: "short and strange in the best way. a quiet critique of conformity wrapped in deadpan comedy. keiko is one of my favourite fictional protagonists.",
  },
  {
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    rating: 4,
    genre: 'literary fiction',
    year: 2022,
    image: '/books/t, t, t.jpg',
    review: "did not expect a novel about game developers to crack me open like this. sadie and sam's relationship is one of the most complex i've ever read. zevin is a genius.",
  },
]

function Stars({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24"
          fill={i <= rating ? '#f0b429' : 'none'}
          stroke={i <= rating ? '#f0b429' : 'var(--border2)'}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Books() {
  const [expanded, setExpanded] = useState(null)
  const [filter, setFilter] = useState('all')

  const genres = ['all', ...new Set(books.map(b => b.genre))]
  const shown = filter === 'all' ? books : books.filter(b => b.genre === filter)

  return (
    <div className="page" style={{ maxWidth: '580px' }}>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '0.5rem', fontWeight: '500' }}>
          reading log
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: '600', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>books</h1>
        <p style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>
          {books.filter(b => b.rating === 5).length} five-star reads · avg {(books.reduce((a,b) => a + b.rating, 0) / books.length).toFixed(1)} / 5
        </p>
      </div>

      {/* Genre pills */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
        {genres.map(g => (
          <button key={g} onClick={() => setFilter(g)} style={{
            fontSize: '0.68rem', padding: '3px 10px', borderRadius: '3px',
            border: '1px solid',
            borderColor: filter === g ? 'var(--text)' : 'var(--border)',
            background: filter === g ? 'var(--text)' : 'transparent',
            color: filter === g ? 'var(--bg)' : 'var(--text3)',
            cursor: 'pointer', transition: 'all 0.15s',
          }}>
            {g}
          </button>
        ))}
      </div>

      {/* Book list */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {shown.map((book, i) => (
          <BookRow
            key={i}
            book={book}
            isLast={i === shown.length - 1}
            expanded={expanded === i}
            onToggle={() => setExpanded(expanded === i ? null : i)}
          />
        ))}
      </div>

    </div>
  )
}

function BookRow({ book, isLast, expanded, onToggle }) {
  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid var(--border)' }}>
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          padding: '1rem 0', cursor: 'pointer',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        {/* Cover image or placeholder */}
        <div style={{
          width: '67px', height: '86px', flexShrink: 0,
          // border: '1px solid var(--border)', borderRadius: '3px',
          // overflow: 'hidden', background: 'var(--bg2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {book.image
            ? <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <span style={{ fontSize: '0.6rem', color: 'var(--text4)', textAlign: 'center', lineHeight: 1.2, padding: '4px' }}>cover</span>
          }
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text)' }}>{book.title}</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>{book.year}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text2)', marginBottom: '5px' }}>{book.author}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Stars rating={book.rating} />
            <span style={{ fontSize: '0.65rem', color: 'var(--text3)', border: '1px solid var(--border)', borderRadius: '2px', padding: '1px 6px' }}>{book.genre}</span>
          </div>
        </div>

        {/* Toggle chevron */}
        <span style={{ fontSize: '0.7rem', color: 'var(--text3)', flexShrink: 0, transition: 'transform 0.2s', transform: expanded ? 'rotate(90deg)' : 'none' }}>›</span>
      </div>

      {/* Expanded review */}
      <div style={{
        overflow: 'hidden',
        maxHeight: expanded ? '160px' : '0',
        transition: 'max-height 0.3s ease',
      }}>
        <div style={{
          paddingBottom: '1.25rem',
          paddingLeft: '54px', // align with title (cover width + gap)
        }}>
          <p style={{
            fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.75,
            borderLeft: '2px solid var(--border2)', paddingLeft: '12px',
            fontStyle: 'italic',
          }}>
            "{book.review}"
          </p>
        </div>
      </div>
    </div>
  )
}
