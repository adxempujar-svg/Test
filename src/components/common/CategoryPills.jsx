import React from 'react'

export default function CategoryPills({ categories = [], onSelect }) {
  return (
    <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:12}}>
      {['Todos', ...categories].map(c => (
        <button key={c} onClick={() => onSelect && onSelect(c)} className="pill">{c}</button>
      ))}
    </div>
  )
}