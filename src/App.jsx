import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Sidenav from './components/Sidenav'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Books from './pages/Books'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <BrowserRouter>
      <div className="layout">
        <Sidenav theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
