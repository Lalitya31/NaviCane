import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import SafetyDashboard from './pages/SafetyDashboard'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState('dashboard') // 'dashboard' | 'caretaker' | 'settings'

  return (
    <div className="app-root">
      <Navbar />
      <main className="container app-layout">
        {!loggedIn ? (
          <Landing onLogin={() => setLoggedIn(true)} />
        ) : (
          <SafetyDashboard page={page} setPage={setPage} onLogout={() => setLoggedIn(false)} />
        )}
      </main>
    </div>
  )
}
