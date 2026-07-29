import React from 'react'
import { Menu, Sun, Moon, Search } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import SearchBar from './SearchBar'

export default function Header({ onToggleSidebar }) {
  return (
    <header className="header" role="banner">
      <button aria-label="Abrir menú" onClick={onToggleSidebar} className="btn-ghost" style={{display:'inline-flex',alignItems:'center',gap:8}}>
        <Menu size={18} /> <span style={{fontWeight:700}}>JhonDoe.dev</span>
      </button>
      <div style={{flex:1, display:'flex', justifyContent:'center', maxWidth:720}}>
        <SearchBar />
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <ThemeToggle />
        <img src="/public/avatar-placeholder.png" alt="Avatar Jhon Doe" style={{width:36,height:36,borderRadius:999}} />
      </div>
    </header>
  )
}