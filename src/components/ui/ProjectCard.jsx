import React from 'react'
import { Link } from 'react-router-dom'
import TechBadge from './TechBadge'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-labelledby={`title-${project.id}`}>
      <Link to={`/proyectos/${project.id}`} style={{display:'block'}}>
        <div style={{height:0, paddingTop:'56.25%', position:'relative'}}>
          <img className="thumbnail" src={project.thumbnail} alt={`${project.title} miniatura`} style={{position:'absolute', inset:0, width:'100%', height:'100%'}} />
        </div>
      </Link>
      <div className="card-body">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
          <div>
            <h3 id={`title-${project.id}`} style={{margin:'4px 0'}}>{project.title}</h3>
            <p className="meta">{project.description}</p>
          </div>
        </div>
        <div className="badges" style={{marginTop:8}}>
          {project.techs.map(t => <TechBadge key={t}>{t}</TechBadge>)}
        </div>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:12, alignItems:'center'}}>
          <span className="meta">{project.views} views • {project.updatedAt}</span>
          <Link to={`/proyectos/${project.id}`} className="btn" style={{padding:'6px 10px'}}>Ver</Link>
        </div>
      </div>
    </article>
  )
}