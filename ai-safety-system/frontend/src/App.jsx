import React from 'react'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Dashboard />
      </main>
    </div>
  )
}
