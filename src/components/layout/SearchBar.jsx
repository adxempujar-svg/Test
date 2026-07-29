import React, { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const [q, setQ] = useState('')
  return (
    <div style={{width:'100%', maxWidth:720}}>
      <label style={{display:'flex', alignItems:'center', gap:8, background:'var(--surface)', padding:'6px 10px', borderRadius:10}}>
        <Search size={16} color="var(--text-secondary)" />
        <input
          aria-label="Buscar proyectos por tecnología o título"
          placeholder="Buscar proyectos (React, Java, Python...)"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          style={{flex:1, border:0, outline:0, background:'transparent', color:'var(--text-primary)'}}
        />
      </label>
    </div>
  )
}