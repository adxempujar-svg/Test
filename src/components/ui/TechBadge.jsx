import React from 'react'
export default function TechBadge({ children }) {
  return <span className="pill" style={{background:'transparent', border:`1px solid rgba(0,0,0,0.04)`}}>{children}</span>
}