import React, { useState } from 'react'
import Auth from './Auth'

export default function Landing({ onLogin }) {
  const [showSignup, setShowSignup] = useState(false)
  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="logo-circle">N</div>
        <div className="product-name">NaviCane</div>
      </div>
      <div className="landing-auth">
        <Auth onLogin={onLogin} showSignup={showSignup} setShowSignup={setShowSignup} />
      </div>
    </div>
  )
}
