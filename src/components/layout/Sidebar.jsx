import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar({ collapsed=false }) {
  const loc = useLocation()
  const items = [
    { to: '/', label: 'Inicio' },
    { to: '/proyectos', label: 'Explorar Proyectos' },
    { to: '/sobre-mi', label: 'Sobre Mí' },
    { to: '/contacto', label: 'Contacto' }
  ]

  return (
    <aside className="sidebar" aria-label="Navegación principal">
      <nav style={{display:'flex',flexDirection:'column', gap:8}}>
        {items.map(i => (
          <Link key={i.to} to={i.to} style={{padding:'8px 10px', borderRadius:8, background: loc.pathname === i.to ? 'rgba(0,0,0,0.04)' : 'transparent', color:'var(--text-primary)'}}>
            {i.label}
          </Link>
        ))}
      </nav>

      <div style={{marginTop:20}}>
        <h4 style={{margin:'8px 0', color:'var(--text-secondary)'}}>Tecnologías</h4>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          {['Java','Python','React','Next.js','Node.js'].map(t => <span key={t} className="pill">{t}</span>)}
        </div>
      </div>
    </aside>
  )
}