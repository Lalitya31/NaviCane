import React, { useState, useEffect } from 'react'
import Auth from './Auth'

export default function Landing({ onLogin }) {
  const [showSignup, setShowSignup] = useState(false)
  const [user, setUser] = useState(import.meta.env.DEV ? 'dev@example.com' : '')
  const [pass, setPass] = useState(import.meta.env.DEV ? 'password' : '')
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.get('dev') === '1') onLogin() // auto proceed when ?dev=1
  }, [])
  return (
    <div className="landing-page" style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:360}}>
        <Auth onLogin={onLogin} showSignup={showSignup} setShowSignup={setShowSignup} user={user} pass={pass} />
        <button type="button" onClick={onLogin} style={{marginLeft:8}}>Skip (dev)</button>
      </div>
    </div>
  )
}
