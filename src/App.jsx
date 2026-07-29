import React, { Suspense } from 'react'
import AppRouter from './routes/AppRouter'

export default function App() {
  return (
    <Suspense fallback={<div style={{padding:40}}>Cargando...</div>}>
      <AppRouter />
    </Suspense>
  )
}