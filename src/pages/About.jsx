import React from 'react'

export default function About() {
  return (
    <div>
      <div style={{display:'flex', gap:20, alignItems:'center', marginBottom:20}}>
        <img src="/public/avatar-placeholder.png" alt="Jhon Doe" style={{width:120, height:120, borderRadius:12}} />
        <div>
          <h1>Jhon Doe</h1>
          <p className="meta">Programador / Desarrollador Full Stack</p>
          <p>Apasionado por construir productos escalables, APIs robustas y interfaces limpias.</p>
        </div>
      </div>

      <section style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap:16}}>
        <div style={{background:'var(--surface)', padding:12, borderRadius:12, boxShadow:'var(--card-shadow)'}}>
          <h3>Stack</h3>
          <ul className="meta">
            <li>Java, Spring Boot</li>
            <li>Python</li>
            <li>JavaScript (React, Vite, Next.js)</li>
            <li>Node.js, REST APIs</li>
          </ul>
        </div>
        <div style={{background:'var(--surface)', padding:12, borderRadius:12, boxShadow:'var(--card-shadow)'}}>
          <h3>Sobre el canal</h3>
          <p className="meta">Este espacio sirve como portafolio y showcase de proyectos profesionales y personales.</p>
        </div>
      </section>
    </div>
  )
}