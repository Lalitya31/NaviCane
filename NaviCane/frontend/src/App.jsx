import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import MainStatus from './pages/MainStatus'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        {!loggedIn ? <Landing onLogin={() => setLoggedIn(true)} /> : <MainStatus onLogout={() => setLoggedIn(false)} />}
      </main>
    </div>
  )
}
