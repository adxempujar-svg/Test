import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projectsData'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div>
        <h2>Proyecto no encontrado</h2>
        <p>Lo sentimos, no se encontró el proyecto solicitado.</p>
        <Link to="/proyectos">Volver a proyectos</Link>
      </div>
    )
  }

  return (
    <article>
      <div style={{display:'grid', gridTemplateColumns: '1fr 360px', gap:20}}>
        <div>
          <div style={{background:'var(--surface)', borderRadius:12, padding:12, boxShadow:'var(--card-shadow)'}}>
            <div style={{height:0, paddingTop:'56.25%', position:'relative', borderRadius:8, overflow:'hidden'}}>
              <img src={project.thumbnail} alt={project.title} style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
            <h2 style={{marginTop:12}}>{project.title}</h2>
            <p className="meta">{project.description}</p>
            <div style={{marginTop:12}}>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn" style={{marginRight:8}}>Ver Demo</a>
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn-ghost">Repositorio</a>
            </div>

            <section style={{marginTop:18}}>
              <h4>Descripción técnica</h4>
              <p className="meta">Stack: {project.techs.join(', ')}</p>
              <p className="meta">Actualizado: {project.updatedAt} • {project.views} vistas</p>
            </section>
          </div>
        </div>

        <aside>
          <div style={{background:'var(--surface)', padding:12, borderRadius:12, boxShadow:'var(--card-shadow)'}}>
            <h4>Proyectos relacionados</h4>
            <ul style={{listStyle:'none', padding:0}}>
              {projects.filter(p => p.id !== project.id).map(p => (
                <li key={p.id} style={{marginBottom:10}}>
                  <Link to={`/proyectos/${p.id}`} style={{display:'flex', gap:8, alignItems:'center'}}>
                    <img src={p.thumbnail} alt="" style={{width:80, height:45, objectFit:'cover', borderRadius:6}} />
                    <div>
                      <div style={{fontSize:14, fontWeight:600}}>{p.title}</div>
                      <div className="meta" style={{fontSize:12}}>{p.techs.join(', ')}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  )
}