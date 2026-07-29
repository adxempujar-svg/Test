import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(v => !v)

  return (
    <div className="app-layout" style={{gridTemplateColumns: collapsed ? '72px 1fr' : undefined}}>
      <Header onToggleSidebar={toggle} />
      <Sidebar collapsed={collapsed} />
      <main className="main" role="main">
        <Outlet />
      </main>
    </div>
  )
}