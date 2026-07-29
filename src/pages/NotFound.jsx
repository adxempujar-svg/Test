import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{textAlign:'center', padding:40}}>
      <h1>404</h1>
      <p>Pagina no encontrada.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}