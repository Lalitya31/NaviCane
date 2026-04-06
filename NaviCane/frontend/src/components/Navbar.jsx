import React from 'react'
import StatusBadge from './StatusBadge'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="brand">NaviCane</div>
      <nav>
        <StatusBadge active={true} />
      </nav>
    </header>
  )
}

export default Navbar
