import React, { useState } from 'react'
import { projects } from '../data/projectsData'
import ProjectCard from '../components/ui/ProjectCard'
import CategoryPills from '../components/common/CategoryPills'

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const categories = Array.from(new Set(projects.flatMap(p => p.techs)))
  const filtered = projects.filter(p => filter === 'Todos' ? true : p.techs.includes(filter))

  return (
    <div>
      <h1>Catálogo de Proyectos</h1>
      <p className="meta">Explora proyectos por tecnología y categoría.</p>

      <CategoryPills categories={categories} onSelect={(c) => setFilter(c)} />

      <section className="grid" aria-live="polite">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </section>
    </div>
  )
}