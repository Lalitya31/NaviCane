import React, { useState } from 'react'

export default function Auth({ onLogin, showSignup, setShowSignup }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // mock auth; replace with real auth call
    if (user && pass) onLogin()
  }

  return (
    <div className="auth-box">
      <form onSubmit={handleLogin}>
        <input placeholder="Username" value={user} onChange={e => setUser(e.target.value)} />
        <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} />
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8}}>
          <button className="btn" type="submit">Login</button>
          <button type="button" onClick={() => setShowSignup(s => !s)} style={{background:'transparent',border:'none',color:'var(--accent)',fontWeight:600}}>
            {showSignup ? 'Have account?' : 'Sign up'}
          </button>
        </div>
      </form>
    </div>
  )
}
