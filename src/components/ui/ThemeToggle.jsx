import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button aria-label="Alternar tema" onClick={toggle} className="btn-ghost" style={{display:'inline-flex',alignItems:'center',gap:8}}>
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span style={{fontSize:13}}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}