import React from 'react'
import { projects } from '../data/projectsData'
import ProjectCard from '../components/ui/ProjectCard'

export default function Home() {
  const featured = projects.slice(0, 3)
  return (
    <div>
      <section style={{marginBottom:20}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <h1>Feed — Proyectos Destacados</h1>
            <p className="meta">Bienvenido al canal de Jhon Doe. Aquí verás mis proyectos recientes y destacados.</p>
          </div>
          <div>
            <button className="btn">Contactar</button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid">
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    </div>
  )
}