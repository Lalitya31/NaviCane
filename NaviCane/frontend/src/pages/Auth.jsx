import React, { useState } from 'react'

export default function Auth({ onLogin, showSignup, setShowSignup }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (user && pass) onLogin()
  }

  return (
    <div className="auth-card">
      <div className="auth-top" style={{textAlign:'center',paddingTop:18}}>
        <div className="hero-logo">🔰</div>
        <h1 style={{margin:'12px 0 6px'}}>Welcome to NaviCane</h1>
        <div className="muted">Sign in to continue</div>
      </div>

      <div style={{padding:'18px'}}>
        <button className="google-btn" type="button">
          <span className="g-icon">G</span>
          Continue with Google
        </button>

        <div className="or-sep"><span>OR</span></div>

        <form onSubmit={handleLogin}>
          <label className="field-label">Email</label>
          <div className="input-with-icon">
            <span className="icon">✉️</span>
            <input placeholder="you@example.com" value={user} onChange={e => setUser(e.target.value)} />
          </div>

          <label className="field-label">Password</label>
          <div className="input-with-icon">
            <span className="icon">🔒</span>
            <input placeholder="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} />
          </div>

          <button className="sign-in-btn" type="submit">Sign in</button>
        </form>

        <div style={{textAlign:'center', marginTop:12}}>
          <div className="muted"><a href="#" style={{color:'inherit',textDecoration:'none'}}>Forgot password?</a></div>
          <div style={{marginTop:8}}>Need an account? <button type="button" onClick={() => setShowSignup(s => !s)} style={{border:'none',background:'transparent',color:'var(--accent)',fontWeight:700}}>Sign up</button></div>
        </div>
      </div>
    </div>
  )
}
