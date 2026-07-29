import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // placeholder — integrar con Netlify Forms / Formspree / backend real
    console.log('Contacto enviado:', form)
    setSent(true)
  }

  if (sent) return <div><h2>Gracias</h2><p>Tu mensaje ha sido recibido. Responderé pronto.</p></div>

  return (
    <div style={{maxWidth:720}}>
      <h1>Contacto</h1>
      <p className="meta">¿Interesado en colaborar? Escríbeme.</p>
      <form onSubmit={onSubmit} style={{display:'grid', gap:12}}>
        <input required placeholder="Nombre" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:10, borderRadius:8, border:0}} />
        <input required type="email" placeholder="Correo" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{padding:10, borderRadius:8, border:0}} />
        <textarea required placeholder="Mensaje" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} style={{padding:10, borderRadius:8, border:0}} />
        <button className="btn" type="submit">Enviar</button>
      </form>

      <section style={{marginTop:20}}>
        <h4>Enlaces</h4>
        <p className="meta">
          <a href="https://github.com/jhondoe" target="_blank" rel="noreferrer">GitHub</a> •
          <a href="#" style={{marginLeft:8}}>LinkedIn</a> •
          <a href="mailto:jhon@example.com" style={{marginLeft:8}}>Correo</a>
        </p>
      </section>
    </div>
  )
}